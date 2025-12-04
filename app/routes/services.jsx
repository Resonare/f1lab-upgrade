import {Outlet, useLocation} from "@remix-run/react";

import SidebarButtons from "../components/navigation/SidebarButtons";

export async function action({ request }) {
  const formData = await request.formData();

  const captchaToken = formData.get("recaptcha-token");
  const captchaSecretKey = import.meta.env.VITE_RECAPTCHA_SECRET;

  const captchaResponse = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${captchaSecretKey}&response=${captchaToken}`,
    { method: "POST" }
  );

  const captchaData = await captchaResponse.json();
  const captchaScore = captchaData?.score;

  if (captchaScore == undefined) {
    return { success: false };
  }

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

    message = `${data.requestType}\nСтраница: ${data.path}\nИмя: ${data.name}\nEmail: ${data.email}\nТелефон: ${data.phone}\nДетали: ${data.details}\nCaptcha score: ${captchaScore}`;
  } else if (requestType === "service-request") {
    data = {
      requestType: "Запрос услуги",
      plan: formData.get("plan-title"),
      devicesCount: formData.get("devices-count"),
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      details: formData.get("details"),
      path: formData.get("path"),
    };

    message = `${data.requestType} \nСтраница: ${data.path} \nИмя: ${
      data.name
    } \nEmail: ${data.email} \nТелефон: ${data.phone} \nТариф: ${data.plan} ${
      data.devicesCount > 0
        ? `\nКоличество устройств: ${data.devicesCount}`
        : ``
    } \nCaptcha score: ${captchaScore}`;
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
  return [
    { title: "F1Lab | Услуги" },
    { name: "Услуги", content: "Услуги F1Lab" },
  ];
};

export default function Services() {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);

  const sidebarInverseColor = segments[segments.length - 1] == "automation"

  return (
    <>
      <SidebarButtons inverseColor={sidebarInverseColor} />
      <Outlet />
    </>
  );
}
