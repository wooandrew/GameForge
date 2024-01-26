// GameForge (c) 2024 Andrew Woo
// License: MIT

import Suggestion from "./components/suggestion";
import TriTravelers from "./components/tritravelers";

// import css
import "./css/fonts.css";
import "./css/tritravelers.css";

export default function Home() {
  return (
    <main className="bg-black h-screen">
      <div className="relative overflow-hidden h-full">
        <TriTravelers />
        <p className="relative bops-one text-4xl m-4">GameForge</p>
        <div className="relative flex flex-col items-center justify-center">
          <p className="bops-one text-2xl mt-20 mb-10">
            Create a game...
          </p>
        </div>

        <div className="relative flex justify-around">
          <Suggestion section="Genre" />
          <Suggestion section="Theme" />
          <Suggestion section="Goal" />
        </div>

        {/* Button to Scroll Down */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-5">
          <a href="#about" className="flex flex-col items-center justify-center">
            <svg className="w-6 h-6 text-white animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
            </svg>
            <p className="text-white font-mono">Scroll Down</p>
          </a>
        </div>
      </div>
      <div id="about" className="w-screen">
        <h1 className="text-center bops-one pt-5 text-2xl">About GameForge</h1>
        <p> GameForge was developed as part of an assignment GeorgiaTech&apos;s Computer Science Special Topics: Creative Design Practice course</p>
      </div>
    </main>
  );
}
