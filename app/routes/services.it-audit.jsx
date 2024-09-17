import { useState } from "react";

import Hero from "../components/consulting/Hero";
import Scenarios from "../components/consulting/Scenarios";
import Offers from "../components/consulting/Offers";
import Process from "../components/consulting/Process";
import Cases from "../components/consulting/Cases";
import Prices from "../components/consulting/Prices";
import Pockets from "../components/consulting/Pockets";
import TailwindCrutch from "../components/misc/TailwindCrutch";
import CallMeBackModal from "../components/modals/callMeBack/CallMeBackModal";
import PlanModal from "../components/modals/plan/PlanModal";

import { getAll as getAllServiceCases } from "../data/cases.server";

export const meta = () => {
  return [
    { title: "F1LAB" },
    { name: "ИТ-Аудит", content: "ИТ‑аудит с применимыми рекомендациями" },
  ];
};

export default function ITAudit() {
  const [planModalOpened, setPlanModalOpened] = useState(false);
  const [planModalData, setPlanModalData] = useState({});

  const [callMeBackModalOpened, setCallMeBackModalOpened] = useState(false);

  const handlePlanModalOpen = (planData) => {
    setPlanModalOpened(true);
    setPlanModalData(planData);
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "calc(100vw - 100%)";
  };

  const handlePlanModalClose = () => {
    setPlanModalOpened(false);
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0px";
  };

  const handleCallMeBackModalOpen = () => {
    setCallMeBackModalOpened(true);
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "calc(100vw - 100%)";
  };

  const handleCallMeBackModalClose = () => {
    setCallMeBackModalOpened(false);
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0px";
  };

  return (
    <div className="flex flex-col lg:gap-200 sm:gap-[82px]">
      <Hero onCallMeBackModalOpen={handleCallMeBackModalOpen} />
      <Scenarios />
      <Offers onCallMeBackModalOpen={handleCallMeBackModalOpen} />
      <Process onCallMeBackModalOpen={handleCallMeBackModalOpen} />
      <Cases />
      <Prices onPlanModalOpen={handlePlanModalOpen} />
      <Pockets onCallMeBackModalOpen={handleCallMeBackModalOpen} />
      <TailwindCrutch />
      <PlanModal
        opened={planModalOpened}
        onPlanModalClose={handlePlanModalClose}
        planModalData={planModalData}
      />
      <CallMeBackModal
        opened={callMeBackModalOpened}
        onCallMeBackModalClose={handleCallMeBackModalClose}
      />
    </div>
  );
}

export async function loader() {
  const serviceCasesData = await getAllServiceCases();
  return serviceCasesData;
}
