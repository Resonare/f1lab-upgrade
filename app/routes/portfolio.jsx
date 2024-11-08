import Cases from "../pages/portfolio/Cases";
import Pockets from "../pages/portfolio/Pockets";

import { getAll as getAllServices } from "../data/services.server";
import { getAll as getAllCases } from "../data/cases.server";

export const meta = () => {
  return [
    { title: "F1LAB" },
    { name: "Портфолио", content: "Welcome to Remix!" },
  ];
};

export default function Portfolio() {
  return (
    <div>
      <Cases />
      <Pockets />
    </div>
  );
}

export async function loader() {
  const servicesData = await getAllServices();
  const casesData = await getAllCases();

  return { servicesData: servicesData, casesData: casesData };
}
