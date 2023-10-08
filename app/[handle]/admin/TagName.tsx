import { useRouter } from "next/navigation"
import TagOption from "./TagOption"
import changeTag from "@/actions/changeTag"

export default function TagName({ tag: currentTag }: { tag: string | null}) {
    const tags = [
        "Designer",
        "Developer",
        "Entrepreneur",
        "Photographer",
        "Illustrator",
        "Writer",
        "Marketer",
        "Animator",
        "Brand Strategist",
        "Researcher",
        "Videographer",
        "Educator",
        "Environmentalist",
        "Public Speaker",
        "Content Creator",
        "Musician",
        "Architect",
        "Consultant",
        "Travel Blogger",
        "Product Manager"
    ]

    const router = useRouter()

    const onChange = async (newTag: string) => {
        const formData = new FormData()
        formData.append("tag", newTag)

        await changeTag(formData);

        router.refresh();
    }

    return (
        <div className="flex flex-wrap gap-2">
            {tags.sort((a, b) => a.localeCompare(b)).map((tag, index) => <TagOption key={index} onChange={onChange} tag={tag} selected={tag == currentTag} />)}
        </div>
    )
}