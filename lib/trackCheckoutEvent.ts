import { PostHog } from 'posthog-node'
import posthogClient from './posthogClient'

export default async function trackCheckoutEvent(userId: string) {
    const { client, shutdown } = posthogClient();

    client.capture({
        distinctId: userId,
        event: 'user completes checkout',
    });

    await shutdown();
}