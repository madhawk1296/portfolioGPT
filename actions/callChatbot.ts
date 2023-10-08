'use server'

import { MessageType } from "@/app/[handle]/Chat";
import { Configuration, OpenAIApi } from "openai";
import { Database, Tables } from '@/types/supabase'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'


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
    const historyData = formData.get('history') as string;
    const userId = formData.get('user_id') as string;

    let currentUser: Tables<'users'>;
    try {
        const supabase = createServerActionClient<Database>({ cookies })
        const { data: users, error } = await supabase.from('users').select().eq("user_id", userId);
        currentUser = users?.[0]!

        console.log(users)


        if(error) {
            throw new Error (error.message)
        }

    } catch(e: any) {
          console.log(e);
          return "Error: cannot find user"    
    }

    const history: MessageType[] = JSON.parse(historyData);

    const structuredHistory = history.map(message => {
        const { content, sender } = message;

        return {
          "role": sender == "bot" ? ChatCompletionRequestMessageRoleEnum.Assistant : ChatCompletionRequestMessageRoleEnum.User, 
          "content": content
        }
    })

    const userStr = JSON.stringify(currentUser);
  
    const system = `You are a helpful chatbot for somebody's portfolio page. Your purpose is to provide information on this person to visitors. You will be provided with information about the user in json format. Use this information to be helpful and concise when answer visitor's questions about this person.`

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {"role": "system", "content": system}, 
            {"role": "user", "content": userStr}, 
            ...structuredHistory
        ],
      });

    return completion.data.choices[0].message?.content!;
}