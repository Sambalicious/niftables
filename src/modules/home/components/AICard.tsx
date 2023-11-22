import Image from "next/image";

interface AICardProps {
  title: string;
  subTitle: string;
  image: string;
}

export function AICard({ title, subTitle, image }: AICardProps) {
  return (
    <div className="grid shadow-sm md:p-10 py-10 items-center mb-5 bg-[rgba(19,23,29,0.6)] md:grid-cols-[60%_40%] lg:grid-cols-[70%_25%] gap-[5%]  min-w-[350px] ">
      <div className="px-4">
        <h6 className="text-white-100 uppercase font-monument font-normal text-2xl md:text-4xl ">
          {title}
        </h6>
        <p className="mt-4 text-white-100 text-base md:text-lg font-satoshi font-normal">
          {subTitle}
        </p>
      </div>
      <div className="w-full  relative order-first md:order-last bg-gradient-to-b to-purple-100 from-blue  h-full">
        <Image
          src={image}
          alt={title}
          width={453}
          height={302}
          className="h-full w-full mix-blend-overlay"
        />
        <div className="absolute inset-0 -z-10 " />
      </div>
    </div>
  );
}
