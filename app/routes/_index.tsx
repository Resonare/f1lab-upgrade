import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "F1LAB" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Services() {
  return (
    <div className="text-5xl font-title p-100 h-[calc(100svh-90px)]">
      Главная
    </div>
  );
}
