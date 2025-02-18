import Experts from "../pages/experts/Experts";

export const meta = () => {
  return [
    { title: "F1Lab | Эксперты" },
    { name: "Эксперты", content: "Эксперты F1Lab" },
  ];
};

export default function Services() {
  return (
    <div className="2xl:border-x border-gray-200 border-dashed lg:pt-90 pt-[70px]">
      <Experts />
    </div>
  );
}
