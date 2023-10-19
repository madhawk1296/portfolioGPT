import dosis from "@/fonts/dosis";

export default function Price({ price, discountedPrice }: { price: number, discountedPrice: number}) {
    return (
        <h1 className={`w-fit text-xl ${dosis.bold} tracking-wider text-gray-700`}>
            <span className={`line-through text-lg ${dosis.medium}`}>${price}</span> ${discountedPrice}/month
        </h1>
    )
}