import { useLoaderData, useLocation } from "@remix-run/react";

import { useState } from "react";

import { getAll as getAllBranches } from "../data/branches.server";
import { getAll as getAllServices } from "../data/services.server";
import { getAll as getAllServiceCases } from "../data/cases.server";

import ListBranches from "../components/admin/Branch/List";
import ListServices from "../components/admin/Service/List";
import ListServiceCases from "../components/admin/Case/List";

export const meta = () => {
  return [
    { title: "F1LAB" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function AdminPanel() {
  const location = useLocation();
  const { branches, services, cases } = useLoaderData();

  const navigation = [
    {
      title: "Направления",
      link: "branches",
    },
    {
      title: "Услуги",
      link: "services",
    },
    {
      title: "Кейсы",
      link: "cases",
    },
  ];

  const [activeNav, setActiveNav] = useState(
    location.hash ? location.hash.substring(1) : "branches"
  );

  return (
    <div className="xl:px-120 lg:px-60 px-[44.1px]">
      <div className=" font-title text-5xl pt-180 ">Админка</div>
      <div className="grid grid-cols-8 pt-30">
        <div className="col-span-2">
          <ul className="text-3xl font-bold">
            {navigation.map((nav) => (
              <li key={nav.link} className="">
                <button
                  className={`p-10 hover:bg-opacity-30 text-start text w-full ${
                    activeNav === nav.link ? "bg-f1-light" : "hover:bg-gray-200"
                  }`}
                  onClick={() => {
                    setActiveNav(nav.link);
                  }}
                >
                  {nav.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-5 xl:px-30 lg:px-15 px-10">
          {activeNav === "branches" && <ListBranches branches={branches} />}
          {activeNav === "services" && (
            <ListServices services={services} branches={branches} />
          )}
          {activeNav === "cases" && (
            <ListServiceCases serviceCases={cases} branches={branches} />
          )}
        </div>
      </div>
    </div>
  );
}

export async function loader() {
  const branchesData = await getAllBranches();
  const servicesData = await getAllServices();
  const serviceCasesData = await getAllServiceCases();

  return {
    branches: branchesData,
    services: servicesData,
    cases: serviceCasesData,
  };
}
