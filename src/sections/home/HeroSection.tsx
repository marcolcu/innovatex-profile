import { ArrowUpRight } from "lucide-react";
export default function HeroSection() {
  return (
    <>
      <div className="w-full h-[90vh] flex flex-col mt-32">
        <div className="w-full flex-3 flex border-b-3 border-b-black/25">
          <div className="h-full flex-6 border-r-3 border-r-black/25 flex justify-center items-center relative">
            <div className="w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(125,211,252,1)_0%,rgba(134,239,172,0)_70%)] blur-3xl absolute top-1/2 left-1/2 -translate-x-[70%] -translate-y-[60%]"></div>
            <div className="w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(196,151,253,1)_0%,rgba(196,181,253,0)_70%)] blur-3xl absolute top-1/2 left-1/2 -translate-x-[30%] -translate-y-[40%]"></div>
          </div>
          <div className="h-full flex-4  flex flex-col justify-between items-center py-32">
            <div className="w-full flex items-center justify-end">
              <h1 className="text-7xl font-extralight font-telegraf text-end w-[60%] mr-24">
                Where your ideas become reality
              </h1>
            </div>
            <div className=" flex justify-center items-center text-4xl font-telegraf font-extralight gap-8">
              <div className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:opacity-50 transition-all duration-300">
                <button className="bg-transparent hover:cursor-pointer">
                  view our work
                </button>
                <ArrowUpRight width={40} height={40} />
              </div>
              <div className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:opacity-50 transition-all duration-300">
                <button className="bg-transparent hover:cursor-pointer">
                  get in contact
                </button>
                <ArrowUpRight width={40} height={40} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex-1 flex">
          <div className="h-full flex-7 border-r-3 border-r-black/25 flex justify-center items-center">
            <p className="font-extralight font-telegraf text-[11rem] flex justify-center items-center pt-4">
              INNOVATE<span className="font-bold">X</span>
            </p>
          </div>
          <div className="h-full flex-3 flex justify-center items-center">
            <ArrowUpRight size={200} className="rotate-90"/>
          </div>
        </div>
      </div>
    </>
  );
}
