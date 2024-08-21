import { redirect } from "@remix-run/node";

import { add, update, remove } from "../data/branches.server";

export async function action({ request }) {
  const formData = await request.formData();
  const branchData = Object.fromEntries(formData);

  const intent = formData.get("intent");

  if (intent === "add") {
    await add(branchData);
  }

  if (intent === "update") {
    await update(branchData);
  }

  if (intent === "delete") {
    await remove(+branchData.id);
  }

  return redirect(`/admin`);
}
