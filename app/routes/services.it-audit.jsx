import ServicesPage from "../components/ServicesPage";

export const meta = () => {
  return [
    { title: "F1LAB" },
    { name: "ИТ-Аудит", content: "Welcome to Remix!" },
  ];
};

export default function ITAudit() {
  return <ServicesPage />;
}
