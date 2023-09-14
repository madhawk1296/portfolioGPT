import getClientSupabaseSession from "@/lib/getClientSupabaseSession";
import googleLogin from "@/lib/googleLogin";
import { useRouter } from "next/navigation";
import posthog from 'posthog-js';

export default function Login() {
    const router = useRouter();

    return async () => {
        posthog.capture('user attempts login');

        const { data } = await getClientSupabaseSession();
        if(data.session) {
            router.push('/account');
        } else {
            await googleLogin();
        }
    }
}