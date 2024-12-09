import React from "react";
import { Button } from "../ui/button";
function scrollToElement(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm bg-gradient-to-r from-indigo-400 to-cyan-400 z-50">
      <div className="flex justify-between items-center py-4 px-10 bg-transparent">
        <div className="text-2xl font-bold text-white inline-flex items-center">
          <img src="/logo.png" alt="company logo" className="w-12" />
          SEEYAA
        </div>
        <nav className="hidden md:flex gap-10 text-white items-center font-semibold tracking-tighter">
          <Button
            variant="link"
            onClick={() => scrollToElement("hero")}
            className="text-white font-medium"
          >
            Home
          </Button>
          <Button
            onClick={() => scrollToElement("about")}
            variant="link"
            className="text-white font-medium"
          >
            About
          </Button>
          <Button
            onClick={() => scrollToElement("video")}
            variant="link"
            className="text-white font-medium"
          >
            Features
          </Button>
        </nav>
        <div className="flex space-x-4">
          {/* <Button type="button" variant="default">
            Download
            <img src="/googlePlay.svg" alt="applink" className="w-8 h-8" />
          </Button> */}
          <Button type="button" variant="secondary" className="hidden md:block">
            About
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
