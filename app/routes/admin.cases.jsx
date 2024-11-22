import { redirect } from "@remix-run/node";

import { add, update, remove } from "../data/cases.server";
import ListCases from "../components/admin/Case/List";

import { getAll as getAllBranches } from "../data/branches.server";
import { getAll as getAllClients } from "../data/clients.server";
import { getAll as getAllServiceCases } from "../data/cases.server";
import { getAll as getAllUsers } from "../data/users.server";
import { useLoaderData } from "@remix-run/react";
import { authCookie } from "../auth";

export default function Cases() {
  const { items, branches, clients } = useLoaderData();
  return <ListCases items={items} branches={branches} clients={clients} />;
}

export async function loader({ request }) {
  const cookieString = request.headers.get("Cookie");
  const userId = await authCookie.parse(cookieString);
  const users = await getAllUsers();

  let branchesData = [];
  let clientsData = [];
  let serviceCasesData = [];

  if (userId || users.length === 0) {
    serviceCasesData = await getAllServiceCases();
    console.log(serviceCasesData);

    branchesData = await getAllBranches();
    clientsData = await getAllClients();
  } else {
    return redirect("/admin");
  }

  return {
    isAuthed: userId | (users.length === 0),
    items: serviceCasesData,
    clients: clientsData,
    branches: branchesData,
  };
}

export async function action({ request }) {
  const formData = await request.formData();
  const serviceCaseData = {
    id: formData.get("id"),
    description: formData.get("description"),
    task: formData.get("task"),
    results: formData.get("results"),
    serviceIds: formData.getAll("serviceIds"),
    clientId: formData.get("clientId"),
  };
  const intent = formData.get("intent");
  console.log(serviceCaseData);
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
