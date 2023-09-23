import platforms from "@/data/platforms";
import Detail from "./Detail";
import { ReactNode } from "react";
import ModifyText from "./ModifyText";
import Wordpress from "./Wordpress";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";
import { cookies } from "next/headers";
import Wix from "./Wix";
import Squarespace from "./Squarespace";
import Custom from "./Custom";
import Other from "./Other";

export default async function Platform({ params }: { params: { platform: string}}) {    
    const supabase = createServerComponentClient<Database>({ cookies })
    const {data: apiKeys} = await supabase.from('api_keys').select()
    const primaryKey = apiKeys?.[0].key;



    const { platform: currentPlatform } = params;
    const platform = platforms().find(platform => platform.name == currentPlatform);
    const { name, image, title } = platform!;

    const platformComponents: Record<string, ReactNode> = {
        "wordpress": <Wordpress apiKey={primaryKey!} />,
        "wix": <Wix apiKey={primaryKey!} />,
        "squarespace": <Squarespace apiKey={primaryKey!}  />,
        "custom": <Custom apiKey={primaryKey!} />

    }
    return platformComponents[currentPlatform];
}