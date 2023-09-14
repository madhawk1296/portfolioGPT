'use client';

import posthog from 'posthog-js';
import { useEffect } from 'react';

export default function TrackLogin() {
    useEffect(() => {
        posthog.capture('user logs in');
    }, []);

    return (
        <>
        </>
    )
}