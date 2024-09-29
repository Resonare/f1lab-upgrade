import Hero from "../components/home/Hero";

import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "F1LAB" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Services() {
  return (
    <div className="overflow-x-auto pt-180 overflow-y-hidden whitespace-nowrap text-5xl font-title h-[calc(100svh-180px)]">
      <Hero />
      <Hero />
    </div>
  );
}
