import getSupabaseAdmin from "./getSupabaseAdmin";
import trackChatbotInstalled from "./trackChatbotInstalled";

export default async function logChatbot(userInfo: any) {
    const { user_id } = userInfo;
    const { installed_chatbot, id } = user_id;
    
    if(!installed_chatbot) {
        const supabase = getSupabaseAdmin();
        await supabase
        .from("profiles")
        .update({
            installed_chatbot: true
        }) 
        .eq("id", id);

        await trackChatbotInstalled(id);
    }
}