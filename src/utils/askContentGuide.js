import { PromptTemplate ,HumanMessagePromptTemplate,SystemMessagePromptTemplate,ChatPromptTemplate} from '@langchain/core/prompts';
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
export const askContentGuide= async(QueryMessage)=>{
 //console.log("in the jarvisChef function:",recipeMessage);
 const SECRET_KEY= import.meta.env.VITE_GOOGLE_API_KEY
 const chat = new ChatGoogleGenerativeAI({
    apiKey:SECRET_KEY
  });
  const systemMessagePrompt=SystemMessagePromptTemplate.fromTemplate("Your name is Helena.You can give advices based on the topic of the content creation keeping in mind the three related trending examples in the query that will help in boosting social media reach and profile ,give the hashtags from the trending videos. Always Give some original and unique ideas for their content related to their query along with your response. Use your own knowledge about the theme of content creation and share it.make the content very large by explaining everything in detail"
)
const humanMessagePrompt=HumanMessagePromptTemplate.fromTemplate("{asked_Query}") 
const chatPrompt=ChatPromptTemplate.fromMessages([systemMessagePrompt,humanMessagePrompt]);
const formattedChatPrompt=await chatPrompt.formatMessages({
    asked_Query:QueryMessage
})
//console.log("formatted chat prompt:",formattedChatPrompt);
const respone=await chat.invoke(formattedChatPrompt)
//console.log(respone);
return respone.content
}