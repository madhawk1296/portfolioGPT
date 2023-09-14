'use client';

import posthog from 'posthog-js';

export default function HeaderButtons(){
    const handleSignOut = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        posthog.reset();

        const form = event.target as HTMLFormElement;
        form.submit();
    }

    return(
        <div>
            <form action='/auth/signout' method='post' onSubmit={handleSignOut}>
                <button type="submit" className="border-2 border-red-400 rounded-lg text-red-400 text-sm font-bold tracking-wider px-[10px] py-[3px] hover:bg-red-950">Logout</button>
            </form>
        </div>
    )
}