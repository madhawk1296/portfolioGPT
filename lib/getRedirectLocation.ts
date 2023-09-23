export default function getRedirectLocation() {
    return process.env.NODE_ENV == "development" ? 'http://localhost:3000/auth/callback' : 'https://chatfolio.org/auth/callback' 
}