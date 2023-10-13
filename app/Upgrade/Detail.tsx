import dosis from "@/fonts/dosis";

export default function Detail({ detail }: { detail: string}) {
    return (
        <div className={`text-gray-800 text-lg ${dosis.light} tracking-wide flex gap-2 items-center`}>
            <h1 className="text-green-500 text-xl">✓</h1>
            <h1>{detail}</h1>
        </div>
    )
}