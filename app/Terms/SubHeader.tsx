export default function SubHeader({ title }: {title: string}) {
    return (
        <h2 className={`w-fit text-3xl text-gray-700 tracking-wide`}>{title}</h2>
    )
}