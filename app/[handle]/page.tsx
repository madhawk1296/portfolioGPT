import { Database, Tables } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Container from "./Container";
import AdminContainer from "./admin/AdminContainer";

export default async function Page({ params: { handle } }: { params: {handle: string} }) {
    const supabase = createServerComponentClient<Database>({ cookies })
    const { data: { user } } = await supabase.auth.getUser();
    const { data: users, error } = await supabase.from('users').select().eq("handle", handle);
    const currentUser = users?.[0] || null;
    const isAdmin = currentUser?.user_id == user?.id;

    return currentUser && (isAdmin ? 
        (
            <AdminContainer user={currentUser}  />
        ) : (
            <Container user={currentUser}  />

        )
    )
}