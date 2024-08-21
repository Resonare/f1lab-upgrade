import { redirect } from "@remix-run/node";

import { add, update, remove } from "../data/services.server";

export async function action({ request }) {
  const formData = await request.formData();
  const serviceData = Object.fromEntries(formData);
  const intent = formData.get("intent");

  if (intent === "add") {
    await add(serviceData);
  }

  if (intent === "update") {
    await update(serviceData);
  }

  if (intent === "delete") {
    await remove(+serviceData.id);
  }

  return redirect(`/admin`);
}
