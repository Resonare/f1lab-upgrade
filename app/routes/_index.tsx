import Hero from "../components/home/Hero";
import Why from "../components/home/Why";
import Cases from "../components/home/Cases";
import Pockets from "../components/home/Pockets";
import Benefits from "../components/home/Benefits";
import Solutions from "../components/home/Solutions";

import { getAll as getAllServiceCases } from "../data/cases.server";

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
      <Solutions />
      <Benefits />
      <Cases />
      <Pockets />
    </div>
  );
}

export async function loader() {
  const serviceCasesData = await getAllServiceCases();
  return serviceCasesData;
}