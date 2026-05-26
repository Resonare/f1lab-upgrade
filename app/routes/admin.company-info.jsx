import { redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { get, upsert } from "../data/companyInfo.server";
import { getAll as getAllUsers } from "../data/users.server";
import { authCookie } from "../auth";
import CompanyInfoForm from "../components/admin/CompanyInfo/Form";

export default function CompanyInfo() {
  const { info } = useLoaderData();
  return (
    <div>
      <div className="text-2xl font-bold mb-30">Контактная информация</div>
      <CompanyInfoForm info={info} />
    </div>
  );
}

export async function loader({ request }) {
  const cookieString = request.headers.get("Cookie");
  const userId = await authCookie.parse(cookieString);
  const users = await getAllUsers();

  if (!userId && users.length > 0) {
    return redirect("/admin");
  }

  const info = await get();
  return { info };
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const intent = formData.get("intent");

  if (intent === "update") {
    const { intent: _, ...fields } = data;
    await upsert(fields);
  }

  return redirect("");
}
