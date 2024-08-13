import HeroV2 from "../components/consulting/HeroV2";
import Scenarios from "../components/consulting/Scenarios";
import Offers from "../components/consulting/Offers";
import Process from "../components/consulting/Process";

export const meta = () => {
  return [
    { title: "F1LAB" },
    { name: "ИТ-Аудит", content: "ИТ‑аудит с применимыми рекомендациями" },
  ];
};

export default function ITAudit() {
  return (
    <>
      <HeroV2 />
      <Scenarios />
      <Offers />
      <Process />
    </>
  );
}
