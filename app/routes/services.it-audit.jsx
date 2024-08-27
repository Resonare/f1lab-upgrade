import Hero from "../components/consulting/Hero";
import Scenarios from "../components/consulting/Scenarios";
import Offers from "../components/consulting/Offers";
import Process from "../components/consulting/Process";
import Cases from "../components/consulting/Cases";
import Prices from "../components/consulting/Prices";

export const meta = () => {
  return [
    { title: "F1LAB" },
    { name: "ИТ-Аудит", content: "ИТ‑аудит с применимыми рекомендациями" },
  ];
};

export default function ITAudit() {
  return (
    <>
      <Hero />
      <Scenarios />
      <Offers />
      <Process />
      <Cases />
      <Prices />
    </>
  );
}
