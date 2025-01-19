import SearchFilter from "./SearchFilter";

function Hero() {
  return (
    <div
      className="bg-slate-100 flex items-center justify-center p-4 bg-cover bg-center w-full min-h-[70vh] mt-[64px]"
      style={{backgroundImage:"url('src/assets/graduation.jpg')"}}
    >
      <SearchFilter />
    </div>
  );
}

export default Hero;
