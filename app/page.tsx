import Header from "@/components/Header";
import Chatbot from "@/components/Chatbot";
import Scroll from "@/components/Scroll";
import MainPageButton from "@/components/MainPageButton";
import FinalButton from "./FinalButton";
import Examples from "./Examples";
import ProductHuntButton from "./ProductHuntButton";
import Benefits from "./Benefits";

export default function Home() {
  const landingPageMessage = "Welcome to Chatfolio! Ask me any questions you may have about the site."

  return (
    <div className="relative w-full h-full overflow-scroll overflow-x-hidden">
      <div className="relative w-full overflow-x-hidden h-screen md:min-h-[700px] max-h-[1000px] py-[10px] md:py-[0] flex flex-col bg-blue-600">
        <Header/>
        <div className="relative flex justify-center">
          <div className="relative flex flex-col items-center w-full md:w-[800px] px-[20px] pt-[100px] gap-4">
            <h1 className="text-white text-3xl md:text-6xl text-center font-semibold tracking-wide md:w-[600px] leading-[1.1] ">ChatGPT for Your Portfolio Website</h1>
            <h2 className="text-white text-xl md:text-2xl text-center max-w-[600px] tracking-wide font">
              Elevate your portfolio site with an engaging chatbot trained on your resume.
            </h2>
            <MainPageButton/>
            <ProductHuntButton />
          </div>
          <div className="hidden md:block relative w-fit flex pt-[90px] justify-center ">
            <div className="relative shadow-xl shadow-black/30 hover:shadow-black/50 smoothe hover:shadow-2xl border-2 border-white rounded-lg">
              <Chatbot defaultMessage={landingPageMessage} landingPage={true}/>
            </div>
          </div>
        </div>
        <Scroll/>
      </div>
      <Examples />
      <div className="relative w-full flex flex-col items-center bg-blue-600 py-[20px] md:py-[80px] gap-5">
        <Benefits /> 
        <div className="flex flex-col gap-4 items-center pb-[10px]">
          <h3 className="text-2xl font-semibold w-fit text-white">Get Started for Free</h3>
          <FinalButton />
        </div>            
      </div>
    </div>
  )
}