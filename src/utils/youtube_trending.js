import axios from 'axios';
import { PromptTemplate, HumanMessagePromptTemplate, SystemMessagePromptTemplate, ChatPromptTemplate } from '@langchain/core/prompts';
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';

export async function youtube_trending(query) {
  try {
    const topic = await extractTopic(query);

    const response = await axios.get(YOUTUBE_API_URL, {
      params: {
        part: 'snippet',
        q: topic,
        type: 'video',
        key: YOUTUBE_API_KEY,
        maxResults: 3,
      },
    });

    let videos = response.data.items;

    if (videos.length === 0) {
      const topViewedResponse = await axios.get(YOUTUBE_API_URL, {
        params: {
          part: 'snippet',
          q: topic,
          type: 'video',
          publishedAfter: new Date(new Date() - 7 * 24 * 60 * 60 * 1000).toISOString(),
          order: 'viewCount',
          key: YOUTUBE_API_KEY,
          maxResults: 3,
        },
      });

      videos = topViewedResponse.data.items;
    }

    return videos.map((video) => ({
      title: video.snippet.title,
      description: video.snippet.description,
      videoUrl: `https://www.youtube.com/watch?v=${video.id.videoId}`,
    }));
  } catch (error) {
    return { error: 'Failed to fetch YouTube videos' };
  }
}

async function extractTopic(query) {
  const SECRET_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

  const chat = new ChatGoogleGenerativeAI({
    apiKey: SECRET_KEY,
  });

  const systemMessagePrompt = SystemMessagePromptTemplate.fromTemplate(
    "Your job is to find the theme or topic of the video the person wants to post and answer in one word only."
  );

  const humanMessagePrompt = HumanMessagePromptTemplate.fromTemplate("{asked_Query}");

  const chatPrompt = ChatPromptTemplate.fromMessages([systemMessagePrompt, humanMessagePrompt]);

  const formattedChatPrompt = await chatPrompt.formatMessages({
    asked_Query: query,
  });

  const response = await chat.invoke(formattedChatPrompt);

  return response.content;
}