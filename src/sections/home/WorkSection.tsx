import Image from "next/image";

const partners = [
  {
    src: "/images/dharma-logo-red.webp",
    alt: "Dharma Logo",
    name: "The Dharma Experience",
    href: "https://thedharmaexperience.com",
  },
  {
    src: "/images/70mai.webp",
    alt: "70mai Logo",
    name: "70mai Indonesia",
    href: "https://70maipointindonesia.com",
  },
];

export default function WorkSection() {
  return (
    <div className="h-fit flex flex-col">
      <div className="w-full border-b-2 border-black/25">
        <h1 className="font-telegraf font-extralight text-[3rem] md:text-[5rem] xl:text-[10rem] border-r-2 border-black/25 w-fit px-8 md:px-16">
          Our Partners
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {partners.map((partner, i) => (
          <div
            key={partner.name}
            className={`flex flex-col items-center justify-center gap-6 px-8 py-16 md:py-24 border-black/25 ${
              i < partners.length - 1
                ? "border-b-2 md:border-b-0 md:border-r-2"
                : ""
            }`}
          >
            <div className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center">
              <Image
                src={partner.src}
                alt={partner.alt}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-2xl md:text-3xl xl:text-4xl font-extralight text-center">
              {partner.name}
            </p>
            <a href={partner.href} target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-3 text-lg md:text-xl font-telegraf font-extralight border-2 border-black/25 hover:bg-black hover:text-white transition-all duration-300">
                Visit Site
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
