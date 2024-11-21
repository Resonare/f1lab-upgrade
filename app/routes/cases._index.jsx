import Cases from "../pages/portfolio/Cases";
import Pockets from "../pages/portfolio/Pockets";

import { getAll as getAllCases } from "../data/cases.server";

export const meta = () => {
  return [{ title: "F1LAB" }, { name: "Кейсы", content: "Welcome to Remix!" }];
};

export default function Portfolio() {
  return (
    <div className="2xl:border-x border-gray-200 border-dashed lg:pt-90 pt-[70px]">
      <Cases />
      <Pockets />
    </div>
  );
}

export async function loader() {
  const casesData = await getAllCases();

  return casesData;
}
