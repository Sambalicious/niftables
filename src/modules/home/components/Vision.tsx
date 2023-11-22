import { VISION_LIST } from "@/mock";
import Image from "next/image";
import { VisionItem } from "./VisionItem";

export function Vision() {
  return (
    <section className="grid md:grid-cols-[55%_40%]  gap-[5%]  px-6 py-20 lg:px-20">
      <div>
        <h4 className="font-monument text-xl md:text-4xl text-white-100 font-normal mb-8 uppercase md:w-11/12">
          Our vision is to support the innovation of AI blockchain projects{" "}
          <span className="bg-gradient-to-r from-blue to-purple-100 bg-clip-text text-transparent">
            while prioritizing communities and democratizing profits
          </span>
        </h4>

        <Image
          src="/assets/vision.png"
          width={836}
          height={502}
          alt="our vision"
        />
      </div>
      <article>
        {VISION_LIST?.map(el => (
          <VisionItem
            key={el.title}
            title={el.title}
            icon={el.icon}
            content={el.content}
          />
        ))}
      </article>
    </section>
  );
}
