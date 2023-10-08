/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['lh3.googleusercontent.com', 'api.chat-fu.com'],
    },
    experimental: {
        serverActions: true,
    },
}

module.exports = nextConfig
