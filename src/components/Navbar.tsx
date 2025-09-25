export default function Navbar() {
  return (
    <>
      <nav className="w-full h-32 border-b-3 border-b-black/25 flex justify-between items-center px-32 text-3xl font-extralight font-telegraf">
        <div>INNOVATE<span className="font-bold">X</span></div>
        <div className="flex justify-between items-center w-96">
          <h1 className="hover:tracking-[7px] hover:font-medium origin-center transition-all duration-300 hover:cursor-pointer">work</h1>
          <h1 className="hover:tracking-[7px] hover:font-medium origin-center transition-all duration-300 hover:cursor-pointer">about</h1>
          <h1 className="hover:tracking-[7px] hover:font-medium origin-center transition-all duration-300 hover:cursor-pointer">contact</h1>
        </div>
      </nav>
    </>
  );
}
