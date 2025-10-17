"use client";

export default function AboutSection() {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <section className="w-full h-[700px] border-b-2 border-black/25 flex flex-col xl:flex-row py-16 xl:py-0">
        <div className="flex-3 border-r-2 border-black/25 flex items-center justify-center">
          <p className="font-telegraf font-medium text-2xl xl:text-4xl w-[80%]">
            Empowering brands with systems that work — beautifully. From code to
            cloud, we craft digital foundations that last. No fluff, only
            function. Always one step ahead.
          </p>
        </div>
        <div className="flex-2 flex items-center justify-center flex-col gap-20">
          <p className="font-extralight text-xl xl:text-2xl w-[70%]">
            United by a passion for design, code, and interaction, our team
            stands at the intersection of creativity and technology. We build
            systems that don't just look good — they work beautifully.
          </p>
          <button className="px-10 py-5 text-4xl font-telegraf font-extralight relative border-2 border-black/25 hover:bg-black hover:text-white transition-all duration-300"
            onClick={() => handleScroll("work")}
          >
            see our projects
          </button>
        </div>
      </section>
    </>
  );
}
