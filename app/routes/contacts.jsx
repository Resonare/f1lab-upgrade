import Contacts from "../pages/contacts/Contacts";

export const meta = () => {
  return [
    { title: "F1LAB" },
    { name: "Контакты", content: "Welcome to Remix!" },
  ];
};

export default function Services() {
  return (
    <div className="2xl:border-x border-gray-200 border-dashed lg:pt-90 pt-[70px]">
      <Contacts />
    </div>
  );
}
