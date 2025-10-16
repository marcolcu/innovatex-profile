import Image from "next/image";

export default function WorkSection() {
  return (
    <>
      <div className="h-fit flex flex-col items-center justify-center">
        <div className="flex-1 w-full border-b-2 border-black/25">
          <h1 className="font-telegraf font-extralight text-[6rem] xl:text-[10rem] border-r-2 border-black/25 w-fit px-16">
            Our Partners
          </h1>
        </div>
        <div className="flex-4 w-fit flex py-16">
          <div className="w-[100vw] h-full border-r-2 border-black/25 flex justify-center items-center flex-col">
            <Image
              src="/images/dharma-logo-red.webp"
              alt="Dharma Logo"
              width={400}
              height={500}
            ></Image>
            <p className="text-5xl font-extralight mt-5 w-[80%] text-center">
              The Dharma Experience
            </p>
            <a href="https://thedharmaexperience.com">
              <button className="mt-8 px-8 py-4 text-2xl font-telegraf font-extralight relative border-2 border-black/25 hover:bg-black hover:text-white transition-all duration-300">
                Visit Site
              </button>
            </a>
          </div>
          {/* <div className="w-[50vw] h-full border-r-2 border-black/25">
            to be added...
          </div> */}
        </div>
      </div>
    </>
  );
}
