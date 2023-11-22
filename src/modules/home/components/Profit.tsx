import Image from "next/image";

export function Profit() {
  return (
    <section className="px-6 py-20  lg:px-20">
      <div className="mb-10">
        <h2 className="font-monument text-white-100 uppercase font-normal text-3xl md:text-4xl lg:text-7xl">
          Profiting Through
        </h2>
        <p className="font-monument uppercase text-right mt-1 text-xl md:text-4xl font-normal bg-gradient-to-r from-blue to-purple-100 bg-clip-text text-transparent">
          AI Innovation & Decentralization
        </p>
      </div>
      <section className="grid items-center lg:grid-cols-[58%_37%] gap-[5%]  ">
        <div className="relative   ">
          <Image
            src="/assets/profit.png"
            width={987}
            height={485}
            alt="innovation"
            // className="w-full absolute inset-0 -z-2   h-full"
          />
          {/* <div className="absolute inset-0  -z-10  " /> */}
        </div>
        <div>
          <h6 className="text-xl font-satoshi text-white-100 font-bold">
            The dynamic community driven business model of the future.
          </h6>
          <p className="font-satoshi text-lg  mt-5 text-white-100 font-normal">
            At Creon, we blend the power of AI tools with the dynamic crypto and
            NFT markets, utilizing an innovative business model to drive
            profitability. This approach empowers our community, as our NFT and
            token holders directly benefit from the growth and prosperity of the
            Creon network, creating a win-win scenario for both our community
            and for the projects we launch.
          </p>
        </div>
      </section>
    </section>
  );
}
