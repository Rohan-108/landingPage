import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, DownloadIcon } from "lucide-react";
const Hero: React.FC = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-gradient-to-r from-indigo-400 to-cyan-400 text-white px-10 ">
      <div className="container flex w-100%">
        <div className="md:flex  justify-between">
          <div className="md:w-[40%] md:pt-10">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              Meet with awesome services & people
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-white to-[#ffe] text-transparent bg-clip-text mt-6">
              We Build Apps to Connect People.
            </h1>
            <p className="text-xl text-[#ffe] tracking-tight mt-6 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus quia cum, quas tempora et similique expedita repellat
              dignissimos at labore eveniet!
            </p>
            <div className="flex gap-5 items-center mt-[30px]">
              <Button type="button" variant="default">
                Get Started
                <DownloadIcon size={20} className="ml-2" />
              </Button>
              <Button type="button" variant="secondary">
                Learn More
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </div>
          </div>
          <div className=" flex items-center mt-20 md:mt-0 md:h-[600px]">
            <img
              src="/hero.svg"
              alt="hero-image"
              className="md:h-full md:w-auto md:max-w-none flex-1"
            />
          </div>
        </div>
      </div>
      {/* <img src="/circle.svg" alt="circle" className="lg:absolute h-20 w-20" /> */}
    </section>
  );
};

export default Hero;
