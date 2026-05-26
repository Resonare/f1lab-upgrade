import { useLoaderData } from "@remix-run/react";

import Contacts from "../pages/contacts/Contacts";
import { get } from "../data/companyInfo.server";

export const meta = () => {
  return [
    { title: "F1Lab | Контакты" },
    { name: "Контакты", content: "Контакты компании F1Lab" },
  ];
};

export async function loader() {
  const info = (await get()) || {};
  return { info };
}

export default function ContactsRoute() {
  const { info } = useLoaderData();
  return (
    <div className="2xl:border-x border-gray-200 border-dashed lg:pt-90 pt-[70px]">
      <Contacts info={info} />
    </div>
  );
}
