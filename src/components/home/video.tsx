import React from "react";
import YoutubeVideo from "../ui/youtubeVideo";
const Video: React.FC = () => {
  return (
    <section
      className="pt-8 pb-20 md:pt-5 md:pb-10 px-10 flex items-center justify-center bg-gradient-to-r from-indigo-400 to-cyan-400 text-white font-semibold"
      id="video"
    >
      <div className="container">
        <div className=" wd-[90%] md:w-[50%] flex items-center justify-center flex-col mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-white to-[#ffe] text-transparent bg-clip-text mt-6">
            Check Out Our Video!
          </h1>
        </div>
        <div className="flex items-center justify-center pt-8 md:w-[60%] mx-auto ">
          <YoutubeVideo videoId="KBYSpR8N6pc" title="Dulic" />
        </div>
      </div>
    </section>
  );
};

export default Video;
