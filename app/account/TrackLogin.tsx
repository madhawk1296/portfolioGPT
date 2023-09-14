'use client';

import { User } from '@supabase/gotrue-js';
import posthog from 'posthog-js';
import { useEffect } from 'react';

export default function TrackLogin({ user }: {user: User | null}) {
    useEffect(() => {
        if(user) {
            const { id, email } = user;

            posthog.identify(id, {
                email
            })
            posthog.capture('user logs in');
        }
    }, []);

    return (
        <>
        </>
    )
}