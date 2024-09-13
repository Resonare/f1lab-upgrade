import { useState } from "react";

import Hero from "../components/consulting/Hero";
import Scenarios from "../components/consulting/Scenarios";
import Offers from "../components/consulting/Offers";
import Process from "../components/consulting/Process";
import Cases from "../components/consulting/Cases";
import Prices from "../components/consulting/Prices";
import Pockets from "../components/consulting/Pockets";
import TailwindCrutch from "../components/misc/TailwindCrutch";
import RecallModal from "../components/modals/recall/RecallModal";
import TariffModal from "../components/modals/tariff/TariffModal";

import { getAll as getAllServiceCases } from "../data/cases.server";

export const meta = () => {
  return [
    { title: "F1LAB" },
    { name: "ИТ-Аудит", content: "ИТ‑аудит с применимыми рекомендациями" },
  ];
};

export default function ITAudit() {
  const [tariffModalOpened, setTariffModalOpened] = useState(false);
  const [tariffModalData, setTariffModalData] = useState({});

  const [recallModalOpened, setRecallModalOpened] = useState(false);

  const handleTariffModalOpen = (tariffData) => {
    setTariffModalOpened(true);
    setTariffModalData(tariffData);
    document.body.style.overflow = "hidden";
  };

  const handleTariffModalClose = () => {
    setTariffModalOpened(false);
    document.body.style.overflow = "auto";
  };

  const handleRecallModalOpen = () => {
    setRecallModalOpened(true);
    document.body.style.overflow = "hidden";
  };

  const handleRecallModalClose = () => {
    setRecallModalOpened(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="flex flex-col lg:gap-200 sm:gap-[82px]">
      <Hero onRecallModalOpen={handleRecallModalOpen} />
      <Scenarios />
      <Offers onRecallModalOpen={handleRecallModalOpen} />
      <Process onRecallModalOpen={handleRecallModalOpen} />
      <Cases />
      <Prices onTariffModalOpen={handleTariffModalOpen} />
      <Pockets />
      <TailwindCrutch />
      <TariffModal
        opened={tariffModalOpened}
        onTariffModalClose={handleTariffModalClose}
        tariffModalData={tariffModalData}
      />
      <RecallModal
        opened={recallModalOpened}
        onRecallModalClose={handleRecallModalClose}
      />
    </div>
  );
}

export async function loader() {
  const serviceCasesData = await getAllServiceCases();
  return serviceCasesData;
}
