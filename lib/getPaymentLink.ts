export default function getPaymentLink(tier: string, id: string, email: string | null) {
    const paymentLink = tier == "enthusiast" ? "https://buy.stripe.com/aEU28Q6GYcNK0hy7ss" : "https://buy.stripe.com/14k7ta9TabJG5BS145";

    return `${paymentLink}?client_reference_id=${encodeURIComponent(id)}&prefilled_email=${encodeURIComponent(email || '')}`
}