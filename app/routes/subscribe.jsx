export async function action({ request }) {
  const formData = await request.formData();

  let message = {};

  message = `Подписка на рассылку\nEmail: ${formData.get("email")}`;

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
  return [{ title: "F1Lab" }, { name: "Услуги" }];
};

export default function Subscribe() {
  return <></>;
}
