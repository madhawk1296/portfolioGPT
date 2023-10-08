export default function TagOption({ tag, onChange, selected }: { tag: string, onChange: (tag: string) => void, selected: boolean }) {
    const handleClick = () => {
        onChange(tag);
    }
    
    return (
        <button onClick={handleClick} className={`text-xs py-[3px] px-[4px] rounded-lg shadow-sm tracking-wide smoothe ${selected ? "bg-gray-400" : "bg-gray-200"}`}>{tag}</button>
    )
}