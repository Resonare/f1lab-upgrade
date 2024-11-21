import { getOne as getCase } from "../data/cases.server";
import { useLoaderData } from "@remix-run/react";

export const meta = () => {
  return [
    { title: "F1LAB" },
    { name: "Портфолио", content: "Welcome to Remix!" },
  ];
};

export default function Case() {
  const serviceCase = useLoaderData();
  return (
    <div className="2xl:border-x border-gray-200 border-dashed lg:pt-90 pt-[70px]">
      {serviceCase?.id}
    </div>
  );
}

export async function loader({ params }) {
  const caseData = await getCase(params.caseId);

  return caseData;
}
