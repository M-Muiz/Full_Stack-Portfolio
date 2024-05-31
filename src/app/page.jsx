import Image from "next/image";

const Homepage = () => {
  return <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
    <div className="h-1/2 lg:h-5/6 lg:w-1/2 relative">
      <Image src="/hero.png" alt="hero" fill className="object-contain" />
    </div>
    <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
      <h1 className="text-4xl lg:text-6xl text-black font-bold">Crafting Digital Experiences, Designing Tommorrow.</h1>
      <p className="md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam at voluptas quas sunt incidunt quibusdam provident! Debitis, exercitationem? Mollitia ab esse quisquam voluptatem rem cum nesciunt fugit itaque aliquam. Quisquam, voluptatem officia deleniti necessitatibus libero laborum quis adipisci.</p>
      <div className="w-full flex gap-4">
        <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work</button>
        <button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button>
      </div>
    </div>
  </div>;
};

export default Homepage;
