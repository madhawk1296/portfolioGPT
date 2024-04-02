import { PostHog } from 'posthog-node'

export default function posthogClient() {
    const client = new PostHog(
        process.env.NEXT_PUBLIC_POSTHOG_KEY!,
        { host: process.env.NEXT_PUBLIC_POSTHOG_HOST! } 
    )

    const shutdown = async () => {
        await client.shutdownAsync();
    }

    return {
        client,
        shutdown
    }
}