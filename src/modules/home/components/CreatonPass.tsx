import { Button } from "@/components/ui/button";
import { CREATON_PASS_ITEMS } from "@/mock";
import CreatonPassItem from "./CreatonPassItem";

export function CreatonPass() {
  return (
    <div className="grid bg-black-100 md:grid-cols-[45%_50%] gap-[5%] py-20 px-6 lg:px-20">
      <div>
        <h3 className="uppercase text-white-100 font-monument font-normal text-3xl md:text-4xl lg:text-6xl mb-3">
          creon pass nft
        </h3>

        <p className="font-bold font-satoshi  bg-gradient-to-r from-blue to-purple-100 bg-clip-text text-transparent text-lg md:text-xl">
          The Creon NFT pass unlocks access to AI projects, the Creon launchpad,
          and a ticket to generate passive income through AI-driven tools
        </p>

        <div className="my-5">
          {CREATON_PASS_ITEMS?.map(item => (
            <CreatonPassItem key={item} title={item} />
          ))}
        </div>

        <Button className="md:w-3/4 w-full mt-10"> Buy Creon Pass</Button>
      </div>
      <video
        src="/assets/creaton-pass.mp4"
        autoPlay
        loop
        muted
        width={808}
        height={808}
        className=" w-full h-full order-first md:order-last object-cover "
      />
    </div>
  );
}
