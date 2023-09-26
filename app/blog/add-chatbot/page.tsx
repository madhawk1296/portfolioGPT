import { Metadata } from "next"
import Post from "../Post";
import Line from "../Line";
import SubHeader from "../SubHeader";
import BlogLink from "../BlogLink";
import BlogImage from "../BlogImage";
import CodeSnippet from "../CodeSnippet";


const title = 'How to Add a Chatbot to Your Portfolio Website(For Free)';
const description = 'In this post, I’ll show you how to add your own personal chatbot to your portfolio website in minutes.'

export const metadata: Metadata = {
    title,
    description
}

export default function AddChatbot() {
    return (
        <Post title={title}>
            <Line>{description}</Line>
            <SubHeader>Let's Dive Right In</SubHeader>
            <Line>To get started, head over to <BlogLink link="https://chatfolio.org?ref=blog">Chatfolio.org</BlogLink>, then login with your preferred gmail account.</Line>
            <BlogImage alt="Landing Page Screenshot" src="/blog/landing_page.png" />
            <SubHeader>Upload Your Resume</SubHeader>
            <Line>Once logged in, you can upload your resume. This will be the main source of information that your chatbot will be trained on.</Line>
            <BlogImage alt="Upload Resume Screenshot" src="/blog/upload_resume.png" />
            <SubHeader>Add The Chatbot to Your Site</SubHeader>
            <Line>This part can be a little tricky, we need to insert this code snippet into your website to embed the chatbot:</Line>
            <CodeSnippet />
            <Line>Each website platform has a different way of letting users insert code snippets. At <BlogLink link="https://chatfolio.org?ref=blog">Chatfolio</BlogLink>, we provide tutorials for Wordpress, Wix, Squarespace, and custom developed websites.</Line>
            <BlogImage alt="Add to Website Screenshot" src="/blog/add_to_website.png" />
            <SubHeader>Test Your Chatbot</SubHeader>
            <Line>After you've added the code snippet, refresh your site and you should see your chatbot at the corner of your site!</Line>
            <div className="relative px-[100px]">
                <BlogImage alt="Chatbot Screenshot" src="/blog/chatbot.png" width={350} />
            </div>
            <Line>If you feel that a chatbot would be beneficial to your portfolio website, go to <BlogLink link="https://chatfolio.org?ref=blog">Chatfolio.org</BlogLink> and create a free chatbot Today!</Line>
        </Post>
    )
}