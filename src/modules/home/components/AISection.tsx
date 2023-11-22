import { AI_ITEMS } from "@/mock";
import { AICard } from "./AICard";

export default function AISection() {
  return (
    <section className=" px-6 py-20 lg:px-20 w-full bg-[rgba(19,23,29,0.60)] overflow-x-auto relative scrollbar-hide md:block flex gap-5">
      <video
        src="/assets/ai.mp4"
        autoPlay
        loop
        muted
        className="absolute mix-blend-overlay object-fill inset-0 min-w-full h-[100dvh] lg:h-[150dvh] xl:h-[200dvh]  -z-2  "
      />
      {AI_ITEMS?.map(item => (
        <AICard
          key={item.title}
          title={item.title}
          subTitle={item.subTitle}
          image={item.image}
        />
      ))}
    </section>
  );
}
