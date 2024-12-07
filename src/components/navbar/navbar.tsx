import React from "react";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm bg-gradient-to-r from-indigo-400 to-cyan-400 z-50">
      <div className="flex justify-between items-center py-4 px-10 bg-transparent">
        <div className="text-2xl font-bold text-white">Logo</div>
        <nav className="hidden md:flex gap-10 text-white items-center font-semibold tracking-tighter">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Features</a>
        </nav>
        <div className="flex space-x-4">
          <Button type="button" variant="default">
            <Download size={20} className="mr-2" />
            Download
          </Button>
          <Button type="button" variant="secondary" className="hidden md:block">
            About
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
