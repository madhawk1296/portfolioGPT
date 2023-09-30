import posthogClient from './posthogClient'

export default async function trackChatbotInstalled(userId: string) {
    const { client, shutdown } = posthogClient();

    client.capture({
        distinctId: userId,
        event: 'user installs chatbot',
    });

    await shutdown();
}