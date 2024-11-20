import { redirect } from "@remix-run/node";

import { add, update, remove } from "../data/cases.server";
import ListCases from "../components/admin/Case/List";

import { getAll as getAllBranches } from "../data/branches.server";
import { getAll as getAllServiceCases } from "../data/cases.server";
import { getAll as getAllUsers } from "../data/users.server";
import { useLoaderData } from "@remix-run/react";
import { authCookie } from "../auth";

export default function Cases() {
  const { items, branches } = useLoaderData();
  return <ListCases items={items} branches={branches} />;
}

export async function loader({ request }) {
  const cookieString = request.headers.get("Cookie");
  const userId = await authCookie.parse(cookieString);
  const users = await getAllUsers();

  let branchesData = [];
  let serviceCasesData = [];

  if (userId || users.length === 0) {
    serviceCasesData = await getAllServiceCases();

    branchesData = await getAllBranches();
  } else {
    return redirect("/admin");
  }

  return {
    isAuthed: userId | (users.length === 0),
    items: serviceCasesData,

    branches: branchesData,
  };
}

export async function action({ request }) {
  const formData = await request.formData();
  const serviceCaseData = {
    id: formData.get("id"),
    title: formData.get("title"),
    description: formData.get("description"),
    body: formData.get("body"),
    imageUrl: formData.get("imageUrl"),
    serviceIds: formData.getAll("serviceIds"),
  };
  const intent = formData.get("intent");

  if (intent === "add") {
    await add(serviceCaseData);
    return { message: "case added successfully" };
  }

  if (intent === "update") {
    await update(serviceCaseData);
    return { message: "case updated successfully" };
  }

  if (intent === "delete") {
    await remove(+serviceCaseData.id);
  }

  return redirect("");
}
