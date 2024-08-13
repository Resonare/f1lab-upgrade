import Hero from "../components/consulting/Hero";
import Scenarios from "../components/consulting/Scenarios";
import Offers from "../components/consulting/Offers";

export const meta = () => {
  return [
    { title: "F1LAB" },
    { name: "Портфолио", content: "Welcome to Remix!" },
  ];
};

export default function Portfolio() {
  return (
    <div className="min-h-[calc(100svh-90px)]">
      <Hero />
      <Scenarios />
      <Offers />
    </div>
  );
}
