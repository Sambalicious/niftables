"use client";

import { FEATURE_ITEMS } from "@/mock";
import { FeatureCard } from "./FeatureCard";

export function Feature() {
  return (
    <section className="py-20 px-6 lg:px-20 flex overflow-x-auto  scrollbar-hide gap-6">
      {FEATURE_ITEMS?.map(el => (
        <FeatureCard
          title={el.title}
          subTitle={el.subTitle}
          description={el.description}
          image={el.image}
        />
      ))}
    </section>
  );
}
