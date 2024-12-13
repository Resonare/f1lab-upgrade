import { Outlet } from "@remix-run/react";

import SidebarButtons from "../components/navigation/SidebarButtons";

export async function action({ request }) {
  const formData = await request.formData();

  const requestType = formData.get("request-type");

  let data = {};
  let message = {};

  if (requestType === "consultation-request") {
    data = {
      requestType: "Запрос консультации",
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      details: formData.get("details"),
      path: formData.get("path"),
    };

    message = `${data.requestType}\nСтраница: ${data.path}\nИмя: ${data.name}\nEmail: ${data.email}\nТелефон: ${data.phone}\nДетали: ${data.details}`;
  } else if (requestType === "service-request") {
    data = {
      requestType: "Запрос услуги",
      plan: formData.get("plan-title"),
      devicesCount: formData.get("device-count"),
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      details: formData.get("details"),
      path: formData.get("path"),
    };

    message = `${data.requestType}\nСтраница: ${data.path}\nИмя: ${data.name}\nEmail: ${data.email}\nТелефон: ${data.phone}\nТариф: ${data.plan}\nПериод оплаты: ${data.paymentPeriod}`;
  }

  // Send data to Telegram
  const botToken = import.meta.env.VITE_TG_TOKEN;
  const chatId = import.meta.env.VITE_TG_CHAT_ID;

  const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
    message
  )}`;

  // Send the request to Telegram API
  const response = await fetch(telegramUrl);

  //const response = true;
  //return response;

  if (response.ok) {
    return { success: true };
  } else {
    return { success: false };
  }
}

export const meta = () => {
  return [{ title: "F1LAB" }, { name: "Услуги" }];
};

export default function Services() {
  return (
    <>
      <SidebarButtons />
      <Outlet />
    </>
  );
}
