export default function ExpertiseSection() {
  return (
    <>
      <section className="w-full h-[90vh] flex flex-col items-center justify-center">
        <div className="flex-4 w-full  flex items-center justify-center flex-col">
          <div className=" w-full flex-1 flex border-b-3 border-black/25">
            <h1 className="text-[10rem] font-telegraf font-extralight px-12 border-r-3 border-black/25">
              Expertise <span className="font-extrabold">&</span>
            </h1>
          </div>
          <div className=" w-full flex-1 flex justify-end border-b-3 border-black/25">
            <h1 className="text-[10rem] font-telegraf font-extralight px-12 border-l-3 border-black/25">
              Capabilities
            </h1>
          </div>
        </div>
        <div className="flex-5 w-full flex flex-col items-center justify-center">
          <div className="w-full flex-1 border-b-2 border-black/25">
            <div className="w-[800px] h-full ml-[20vw] border-r-2 border-l-2 border-r-black/25 border-l-black/25 relative flex justify-start items-center">
              <p className="absolute top-2 left-5">1.</p>
              <p className="text-[5rem] ml-16 font-extralight">Product Design</p>
            </div>          
          </div>
          <div className="w-full flex-1 border-b-2 border-black/25">
            <div className="w-[800px] h-full ml-[25vw] border-r-2 border-l-2 border-r-black/25 border-l-black/25 relative flex justify-start items-center">
              <p className="absolute top-2 left-5">2.</p>
              <p className="text-[5rem] ml-16 font-extralight">Web Development</p>
            </div>          
          </div>
          <div className="w-full flex-1 border-b-2 border-black/25">
            <div className="w-[800px] h-full ml-[30vw] border-r-2 border-l-2 border-r-black/25 border-l-black/25 relative flex justify-start items-center">
              <p className="absolute top-2 left-5">3.</p>
              <p className="text-[5rem] ml-16 font-extralight">Mobile App</p>
            </div>          
          </div>
          <div className="w-full flex-1 border-b-2 border-black/25">
            <div className="w-[800px] h-full ml-[35vw] border-r-2 border-l-2 border-r-black/25 border-l-black/25 relative flex justify-start items-center">
              <p className="absolute top-2 left-5">4.</p>
              <p className="text-[5rem] ml-16 font-extralight">Backend</p>
            </div>          
          </div>
         
   
        </div>
      </section>
    </>
  );
}
