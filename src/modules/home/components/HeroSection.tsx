import { Navbar } from "@/modules/common/components/Navbar";

export function HeroSection() {
  return (
    <section className="w-full relative h-[100dvh] bg-gradient-to-b from-black-100 via-blue to-purple-100 flex flex-col items-center">
      <video
        src="/assets/main.mov"
        autoPlay
        loop
        muted
        className="absolute w-full h-[100dvh] top-0 -z-2 object-cover "
      />
      <Navbar />

      <article className="px-6 lg:px-20 h-[80dvh] relative text-white-100 flex flex-col justify-end ">
        <h1 className="text-white-100 font-monument md:w-11/12 uppercase  font-normal text-3xl md:text-7xl">
          The world&apos;s first platform for Tokenizing AI blockchain projects
        </h1>
        <div className="text-with-gradient mt-5 py-2">
          <p className="font-satoshi  text-bold text-lg md:text-xl   ">
            Hold the Creon Pass NFT and earn passive income from AI Tools
          </p>
        </div>
      </article>
    </section>
  );
}
