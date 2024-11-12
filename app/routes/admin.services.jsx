import { redirect } from "@remix-run/node";

import { add, update, remove } from "../data/services.server";
import ListServices from "../components/admin/Service/List";

import { getAll as getAllBranches } from "../data/branches.server";
import { getAll as getAllServices } from "../data/services.server";
import { getAll as getAllUsers } from "../data/users.server";

import { useLoaderData } from "@remix-run/react";
import { authCookie } from "../auth";

export default function Services() {
  const { items, branches } = useLoaderData();
  return <ListServices items={items} branches={branches} />;
}

export async function loader({ request }) {
  const cookieString = request.headers.get("Cookie");
  const userId = await authCookie.parse(cookieString);
  const users = await getAllUsers();

  let servicesData = [];
  let branchesData = [];

  if (userId || users.length === 0) {
    servicesData = await getAllServices();
    branchesData = await getAllBranches();
  } else {
    return redirect("/admin");
  }

  return {
    isAuthed: userId | (users.length === 0),
    items: servicesData,
    branches: branchesData,
  };
}

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

  return redirect("");
}
