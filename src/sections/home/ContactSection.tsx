export default function ContactSection() {
  return (
    <>
      <section className="w-full h-[200px] border-t-2 border-black/25 flex items-center justify-center">
        <div className="flex-1 border-r-2 h-full border-black/25 flex justify-center items-center">
          <a href="https://wa.me/6281586525868">
            <button className="px-10 py-5 text-4xl font-telegraf font-extralight relative border-2 border-black/25 hover:bg-black hover:text-white transition-all duration-300">
              contact us
            </button>
          </a>
        </div>
        <div className="flex-1 flex h-full justify-center items-center">
          <h1 className="font-telegraf text-[6rem] font-extralight  px-16">
            +62 815-8652-5868
          </h1>
        </div>
      </section>
    </>
  );
}
