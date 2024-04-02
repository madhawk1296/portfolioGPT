import Panel from "./Panel";

export default function Benefits() {
    return (
        <div className="flex flex-col md:flex-row justify-center md:gap-14 items-center">
          <Panel title="Upload Your Resume" step="upload" detail="Your chatbot can answer questions about your experience, skills, and background." />
          <Panel title="Customize Your Chatbot" step="customize" detail="Customize the appearance of your chatbot to make it suit your website." />        
          <Panel title="Upgrade Your Site" step="upgrade" detail="Elevate your site with an engaging chatbot, letting visitors learn more about you." />  
        </div> 
    )
}