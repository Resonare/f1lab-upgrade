import { Outlet } from "@remix-run/react";

import SidebarButtons from "../components/navigation/SidebarButtons";

export const meta = () => {
  return [{ title: "F1LAB" }, { name: "Услуги", content: "Welcome to Remix!" }];
};

export default function Services() {
  return (
    <>
      <SidebarButtons />
      <Outlet />
    </>
  );
}
