'use server'

import { MessageType } from "@/app/[user]/Chat";
import { Configuration, OpenAIApi } from "openai";


enum ChatCompletionRequestMessageRoleEnum {
    User = 'user',
    Assistant = 'assistant',
    System = 'system',
  }

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  
const openai = new OpenAIApi(configuration);

export async function callChatbot(formData: FormData) {
    const historyData = formData.get('history');
    if (typeof historyData !== 'string') {
        throw new Error("History not found in FormData");
    }

    const history: MessageType[] = JSON.parse(historyData);

    const structuredHistory = history.map(message => {
        const { content, sender } = message;

        return {
          "role": sender == "bot" ? ChatCompletionRequestMessageRoleEnum.Assistant : ChatCompletionRequestMessageRoleEnum.User, 
          "content": content
        }
    })


    const bio = 'I love building in AI and crypto';

    const system = `You are a helpful chatbot on Cristian Silva's portfolio page. Your purpose is to provide information on this person to visitors. Your boi is "${bio}". Your tag is "Developer".`

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {"role": "system", "content": system}, 
            // {"role": "user", "content": `"${info}"`},
            ...structuredHistory
        ],
      });

    return completion.data.choices[0].message?.content!;
}