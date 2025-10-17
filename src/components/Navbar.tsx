"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // close menu after navigation
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="w-full h-32 border-b-3 border-b-black/25 justify-between items-center px-32 text-3xl font-extralight font-telegraf fixed bg-white/0 z-[30] backdrop-blur-lg top-0 hidden md:flex">
        <div>
          INNOVATE<span className="font-bold">X</span>
        </div>
        <div className="flex justify-between items-center w-96">
          <h1
            onClick={() => handleScroll("work")}
            className="hover:tracking-[7px] hover:font-medium origin-center transition-all duration-300 hover:cursor-pointer"
          >
            work
          </h1>

          <h1
            onClick={() => handleScroll("about")}
            className="hover:tracking-[7px] hover:font-medium origin-center transition-all duration-300 hover:cursor-pointer"
          >
            about
          </h1>

          <h1
            onClick={() => handleScroll("contact")}
            className="hover:tracking-[7px] hover:font-medium origin-center transition-all duration-300 hover:cursor-pointer"
          >
            contact
          </h1>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="flex md:hidden h-28 border-b-2 border-black/25 justify-between items-center px-8 fixed w-full top-0 z-[40] bg-white/70 backdrop-blur-lg">
        <div className="text-2xl font-extralight">
          INNOVATE<span className="font-bold">X</span>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="z-[50]">
          <Menu size={36} />
        </button>
      </nav>

      {/* Mobile Slide-In Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 70, damping: 20 }}
            className="fixed top-0 right-0 w-3/4 h-screen bg-white shadow-2xl flex flex-col justify-center items-center text-3xl font-telegraf gap-12 z-[45] "
          >
            <X size={36}  className="top-12 right-12 absolute" onClick={() => setIsOpen(false)}/>
            <h1
              onClick={() => handleScroll("work")}
              className="hover:tracking-[5px] hover:font-medium origin-center transition-all duration-300 hover:cursor-pointer"
            >
              work
            </h1>
            <h1
              onClick={() => handleScroll("about")}
              className="hover:tracking-[5px] hover:font-medium origin-center transition-all duration-300 hover:cursor-pointer"
            >
              about
            </h1>
            <h1
              onClick={() => handleScroll("contact")}
              className="hover:tracking-[5px] hover:font-medium origin-center transition-all duration-300 hover:cursor-pointer"
            >
              contact
            </h1>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
