import React from "react";
import Carousel from "./carousel";
const About: React.FC = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 px-10 flex items-center justify-center">
      <div className="container">
        <div className=" wd-[90%] md:w-[50%] flex items-center justify-center flex-col mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#0b0b29] text-transparent bg-clip-text mt-6">
            What We Do!
          </h1>
          <p className="text-xl text-[#0b0b29] tracking-tight mt-6 text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            obcaecati mollitia debitis nobis commodi quidem, sint maxime at
            quos. Soluta quod eveniet quis! Ducimus dolorem blanditiis eveniet
            saepe praesentium expedita!
          </p>
        </div>
        <div className="pt-8">
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default About;
