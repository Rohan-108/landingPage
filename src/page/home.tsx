import About from "@/components/home/about";
import Hero from "@/components/home/hero";
import Video from "@/components/home/video";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Video />
    </>
  );
};

export default Home;
