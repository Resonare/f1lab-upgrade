export const meta = () => {
  return [
    { title: "F1LAB" },
    { name: "Эксперты", content: "Welcome to Remix!" },
  ];
};

export default function Services() {
  return (
    <div className="text-5xl font-title p-100 h-[calc(100svh-90px)]">
      Эксперты
    </div>
  );
}
