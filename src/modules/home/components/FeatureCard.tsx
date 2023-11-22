import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface FeatureCardProps {
  title: string;
  subTitle: string;
  description: string;
  image: string;
}

export function FeatureCard({
  title,
  subTitle,
  description,
  image,
}: FeatureCardProps) {
  return (
    <div className=" rounded-sm shadow-sm bg-[rgba(19,23,29,0.6)] pb-10 relative min-w-[423px] lg:min-w-0">
      <Badge className="absolute rounded-2xl right-4 py-0 -top-2">
        Coming soon{" "}
      </Badge>

      <div className="p-6 mb-5">
        <h6 className="font-monument uppercase text-white-100 font-normal text-xl md:text-4xl">
          {title}
        </h6>
        <p className="text-base md:text-xl mt-4 font-satoshi font-bold bg-gradient-to-r from-blue to-purple-100 bg-clip-text text-transparent">
          {subTitle}
        </p>
      </div>

      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={423}
          height={234}
          className="h-full w-full mix-blend-overlay"
        />

        <div className="absolute inset-0  bg-gradient-to-b from-blue -z-10 to-purple-100" />
      </div>
      <p className="p-5 font-satoshi text-base md:text-lg font-normal text-white-100">
        {description}{" "}
      </p>
    </div>
  );
}
