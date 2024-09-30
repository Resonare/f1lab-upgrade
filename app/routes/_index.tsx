import Hero from "../components/home/Hero";
import Why from "../components/home/Why";

import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "F1LAB" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Services() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Why />
    </div>
  );
}
