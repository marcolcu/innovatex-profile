"use client";

import { ArrowUpRight } from "lucide-react";
import PlusSign from "@/components/PlusSign";
export default function HeroSection() {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="w-full h-[90vh] flex flex-col mt-24 md:mt-32">
        <div className="w-full flex-5 flex border-b-3 border-b-black/25">
          <div className="h-full flex-6 border-r-3 border-r-black/25 hidden xl:flex justify-center items-center relative">
            <div className="w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(125,211,252,1)_0%,rgba(134,239,172,0)_70%)] blur-3xl absolute top-1/2 left-1/2 -translate-x-[70%] -translate-y-[60%]"></div>
            <div className="w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(196,151,253,1)_0%,rgba(196,181,253,0)_70%)] blur-3xl absolute top-1/2 left-1/2 -translate-x-[30%] -translate-y-[40%]"></div>
          </div>
          <div className="h-full flex-4  flex flex-col justify-between items-center py-12 md:py-32">
            <div className="w-full flex items-center justify-end">
              <h1 className="text-7xl font-extralight font-telegraf text-end w-[65%] mr-24">
                Where your ideas become reality
              </h1>
            </div>
            <div className=" flex justify-around items-center text-4xl font-telegraf font-extralight w-full flex-col md:flex-row mt-12 gap-8 md:gap-0 md:mt-0">
              <div className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:opacity-50 transition-all duration-300">
                <button
                  className="bg-transparent hover:cursor-pointer"
                  onClick={() => handleScroll("work")}
                >
                  view our work
                </button>
                <ArrowUpRight width={40} height={40} />
              </div>
              <div className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:opacity-50 transition-all duration-300">
                <button
                  className="bg-transparent hover:cursor-pointer"
                  onClick={() => handleScroll("contact")}
                >
                  get in contact
                </button>
                <ArrowUpRight width={40} height={40} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex-3 flex border-b-3 border-black/25">
          <div className="h-full flex-7 border-r-3 border-r-black/25 flex justify-center items-center relative">
            <PlusSign position="tl" />
            <PlusSign position="tr" />
            <PlusSign position="br" />
            <PlusSign position="bl" />
            <p className="font-extralight font-telegraf text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[11rem] flex justify-center items-center pt-4">
              INNOVATE<span className="font-bold">X</span>
            </p>
          </div>
          <div className="h-full flex-3 hidden xl:flex justify-center items-center">
            <ArrowUpRight size={200} className="rotate-90" />
          </div>
        </div>
      </div>
    </>
  );
}
