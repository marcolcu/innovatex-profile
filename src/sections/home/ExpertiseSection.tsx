export default function ExpertiseSection() {
  return (
    <>
      <section className="w-full h-[900px] xl:h-[90vh] flex flex-col items-center justify-center">
        <div className=" flex-1 xl:flex-4 w-full  flex items-center justify-center flex-col overflow-hidden relative">
          <div className="w-[1000px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(196,151,253,1)_0%,rgba(196,181,253,0)_70%)] blur-3xl absolute left-0 top-1/2 -translate-y-1/2"></div>
          <div className="w-[1000px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(125,211,252,1)_0%,rgba(134,239,172,0)_70%)] blur-3xl absolute right-0 top-1/2 -translate-y-1/2"></div>
          <div className=" w-full flex-1 flex border-b-3 border-black/25 relative overflow-hidden">
            <h1 className="text-[4rem] xl:text-[10rem] font-telegraf font-extralight px-12 xl:border-r-3 border-black/25 bg-white flex justify-center items-center xl:w-fit w-full">
              Expertise <span className="font-extrabold">&</span>
            </h1>
          </div>
          <div className=" w-full flex-1 flex justify-end border-b-3 border-black/25 relative overflow-hidden">
            <h1 className="text-[4rem] xl:text-[10rem] font-telegraf font-extralight px-12 border-l-3 border-black/25 bg-white flex justify-center items-center xl:w-fit w-full">
              Capabilities
            </h1>
          </div>
        </div>
        <div className="flex-1 xl:flex-5 w-full flex flex-col items-center justify-center">
          <div className="w-full flex-1 border-b-2 border-black/25">
            <div className="xl:w-[1000px] h-full xl:ml-[15vw] xl:border-r-2 border-l-2 border-r-black/25 border-l-black/25 relative flex justify-start items-center">
              <p className="absolute top-5 left-5">1.</p>
              <p className="text-[2rem] xl:text-[5rem] ml-12 xl:ml-16 font-extralight">
                Web Development
              </p>
            </div>
          </div>
          <div className="w-full flex-1 border-b-2 border-black/25">
            <div className="xl:w-[1000px] h-full xl:ml-[20vw] xl:border-r-2 border-l-2 border-r-black/25 border-l-black/25 relative flex justify-start items-center">
              <p className="absolute top-5 left-5">2.</p>
              <p className="text-[2rem] xl:text-[5rem] ml-12 xl:ml-16 font-extralight">
                IT Consultant
              </p>
            </div>
          </div>
          <div className="w-full flex-1 border-b-2 border-black/25">
            <div className="xl:w-[1000px] h-full xl:ml-[25vw] xl:border-r-2 border-l-2 border-r-black/25 border-l-black/25 relative flex justify-start items-center">
              <p className="absolute top-5 left-5">3.</p>
              <p className="text-[2rem] xl:text-[5rem] ml-12 xl:ml-16 font-extralight">
                Mobile App Development
              </p>
            </div>
          </div>
          <div className="w-full flex-1 border-b-2 border-black/25">
            <div className="xl:w-[1000px] h-full xl:ml-[30vw] xl:border-r-2 border-l-2 border-r-black/25 border-l-black/25 relative flex justify-start items-center">
              <p className="absolute top-5 left-5">4.</p>
              <p className="text-[2rem] xl:text-[5rem] ml-12 xl:ml-16 font-extralight">
                UI/UX Design
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
