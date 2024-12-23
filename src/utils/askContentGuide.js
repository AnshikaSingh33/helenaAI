// askContentGuide.js
import { PromptTemplate, HumanMessagePromptTemplate, SystemMessagePromptTemplate, ChatPromptTemplate } from '@langchain/core/prompts';
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

export const askContentGuide = async (QueryMessage) => {
  const SECRET_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
  const chat = new ChatGoogleGenerativeAI({
    apiKey: SECRET_KEY,
  });

  const systemMessagePrompt = SystemMessagePromptTemplate.fromTemplate(
    "Your name is Helena. You give advice based on content creation queries, providing three related trending examples to boost social media reach. Include trending hashtags and original content ideas. Provide detailed explanations and unique suggestions.If someone greets you firsts greet them back.Handle the prompts gracefully."
  );

  const humanMessagePrompt = HumanMessagePromptTemplate.fromTemplate("{asked_Query}");
  const chatPrompt = ChatPromptTemplate.fromMessages([systemMessagePrompt, humanMessagePrompt]);

  const formattedChatPrompt = await chatPrompt.formatMessages({
    asked_Query: QueryMessage,
  });

  const response = await chat.invoke(formattedChatPrompt);
  return response.content;
};