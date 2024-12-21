// youtube_trending.js (utils/youtube_trending.js)
import axios from 'axios';
import { PromptTemplate, HumanMessagePromptTemplate, SystemMessagePromptTemplate, ChatPromptTemplate } from '@langchain/core/prompts';
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';

export async function youtube_trending(query) {
  try {
    // Await the resolved topic from the query
    const topic = await extractTopic(query); // Fixed: Awaiting the async function
    console.log(`Extracted topic: ${topic}`); // Log the extracted topic for debugging

    // Fetch trending videos related to the extracted topic
    const response = await axios.get(YOUTUBE_API_URL, {
      params: {
        part: 'snippet',
        q: topic, // Use the resolved topic here
        type: 'video',
        key: YOUTUBE_API_KEY,
        maxResults: 3, // Get top 3 results
      },
    });
    console.log(response);

    let videos = response.data.items;

    // If no relevant trending videos found, fetch top viewed videos in the last 7 days
    if (videos.length === 0) {
      console.log(`No videos found for topic: ${topic}, fetching top viewed.`);
      const topViewedResponse = await axios.get(YOUTUBE_API_URL, {
        params: {
          part: 'snippet',
          q: topic,
          type: 'video',
          publishedAfter: new Date(new Date() - 7 * 24 * 60 * 60 * 1000).toISOString(), // Last 7 days
          order: 'viewCount',
          key: YOUTUBE_API_KEY,
          maxResults: 3,
        },
      });

      videos = topViewedResponse.data.items;
    }

    // Get description and summary of the top 3 videos
    const videoSummaries = videos.map((video) => ({
      title: video.snippet.title,
      description: video.snippet.description,
      videoUrl: `https://www.youtube.com/watch?v=${video.id.videoId}`,
    }));

    console.log(videoSummaries);
    return videoSummaries;
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return { error: 'Failed to fetch YouTube videos' };
  }
}

// Function to extract the most relevant topic from the query
async function extractTopic(query) {
  const SECRET_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

  const chat = new ChatGoogleGenerativeAI({
    apiKey: SECRET_KEY,
  });

  // System message template for extracting the topic
  const systemMessagePrompt = SystemMessagePromptTemplate.fromTemplate(
    "Your job is to find the theme or topic of the video the person wants to post and answer in one word only."
  );

  // Human message template
  const humanMessagePrompt = HumanMessagePromptTemplate.fromTemplate("{asked_Query}");

  // Combine the system and human messages into a chat prompt
  const chatPrompt = ChatPromptTemplate.fromMessages([systemMessagePrompt, humanMessagePrompt]);

  // Format the prompt with the user's query
  const formattedChatPrompt = await chatPrompt.formatMessages({
    asked_Query: query,
  });

  // Invoke the chat model to extract the topic
  const response = await chat.invoke(formattedChatPrompt);

  console.log(`Extracted topic from query: ${response.content}`);
  return response.content; // Return the topic as a string
}
