import { Form } from "@remix-run/react";

export default function CompanyInfoForm({ info = {} }) {
  return (
    <Form method="POST" className="flex flex-col gap-20 max-w-lg">
      <div className="flex flex-col gap-10">
        <label className="font-text text-lg text-gray-300">Адрес</label>
        <input
          defaultValue={info?.address}
          type="text"
          name="address"
          placeholder="Владивосток, ул. Батарейная, 3А"
          className="border border-gray-200 px-10 rounded-md placeholder:text-gray-200 text-md font-text h-40 w-full"
        />
      </div>
      <div className="flex flex-col gap-10">
        <label className="font-text text-lg text-gray-300">Ссылка на карту</label>
        <input
          defaultValue={info?.addressLink}
          type="text"
          name="addressLink"
          placeholder="https://go.2gis.com/..."
          className="border border-gray-200 px-10 rounded-md placeholder:text-gray-200 text-md font-text h-40 w-full"
        />
      </div>
      <div className="flex flex-col gap-10">
        <label className="font-text text-lg text-gray-300">Email</label>
        <input
          defaultValue={info?.email}
          type="text"
          name="email"
          placeholder="info@f1lab.ru"
          className="border border-gray-200 px-10 rounded-md placeholder:text-gray-200 text-md font-text h-40 w-full"
        />
      </div>
      <div className="flex flex-col gap-10">
        <label className="font-text text-lg text-gray-300">Телефон</label>
        <input
          defaultValue={info?.phone}
          type="text"
          name="phone"
          placeholder="8-423-202-52-55"
          className="border border-gray-200 px-10 rounded-md placeholder:text-gray-200 text-md font-text h-40 w-full"
        />
      </div>
      <div className="flex flex-col gap-10">
        <label className="font-text text-lg text-gray-300">Telegram (ссылка)</label>
        <input
          defaultValue={info?.telegram}
          type="text"
          name="telegram"
          placeholder="https://t.me/..."
          className="border border-gray-200 px-10 rounded-md placeholder:text-gray-200 text-md font-text h-40 w-full"
        />
      </div>
      <div className="flex flex-col gap-10">
        <label className="font-text text-lg text-gray-300">WhatsApp (ссылка)</label>
        <input
          defaultValue={info?.whatsapp}
          type="text"
          name="whatsapp"
          placeholder="https://wa.me/..."
          className="border border-gray-200 px-10 rounded-md placeholder:text-gray-200 text-md font-text h-40 w-full"
        />
      </div>
      <button
        type="submit"
        name="intent"
        value="update"
        className="rounded-md bg-gray-400 text-gray-100 text-2xl p-10 font-text"
      >
        Сохранить
      </button>
    </Form>
  );
}
