import { redirect } from "@remix-run/node";

import { add, update, remove } from "../data/cases.server";

export async function action({ request }) {
  const formData = await request.formData();
  const serviceCaseData = {
    id: formData.get("id"),
    title: formData.get("title"),
    description: formData.get("description"),
    body: formData.get("body"),
    image: formData.get("image"),
    serviceIds: formData.getAll("serviceIds"),
  };
  const intent = formData.get("intent");

  if (intent === "add") {
    await add(serviceCaseData);
  }

  if (intent === "update") {
    await update(serviceCaseData);
  }

  if (intent === "delete") {
    await remove(+serviceCaseData.id);
  }

  return redirect(`/admin`);
}
