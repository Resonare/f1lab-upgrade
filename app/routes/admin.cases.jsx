import { redirect } from "@remix-run/node";

import { add, update, remove } from "../data/cases.server";
import ListCases from "../components/admin/Case/List";

import { getAll as getAllBranches } from "../data/branches.server";
import { getAll as getAllClients } from "../data/clients.server";
import { getAll as getAllServiceCases } from "../data/cases.server";
import { getAll as getAllUsers } from "../data/users.server";
import { add as addNumberInCase } from "../data/numbersInCase.server";
import { update as updateNumberInCase } from "../data/numbersInCase.server";
import { remove as removeNumberInCase } from "../data/numbersInCase.server";
import { removeByCaseId as removeNumberInCaseByCaseId } from "../data/numbersInCase.server";
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

  const numberInCaseIds = formData.getAll("numberInCaseIds");
  const numberInCaseTitles = formData.getAll("numberInCaseTitles");
  const numberInCaseBodies = formData.getAll("numberInCaseBodies");
  const numbersInCaseData = [];

  numberInCaseIds.map((numberInCaseId, index) =>
    numbersInCaseData.push({
      id: numberInCaseId,
      title: numberInCaseTitles[index],
      body: numberInCaseBodies[index],
      caseId: formData.get("id"),
    })
  );

  const intent = formData.get("intent");

  if (intent === "add") {
    await add(serviceCaseData);

    for (let i = 0; i < numbersInCaseData.length; i++) {
      await addNumberInCase(numbersInCaseData[i]);
    }

    return { message: "case added successfully" };
  }

  if (intent === "update") {
    await update(serviceCaseData);

    for (let i = 0; i < numbersInCaseData.length; i++) {
      if (!numbersInCaseData[i].id) {
        // Add new number
        await addNumberInCase(numbersInCaseData[i]);
      } else if (!numbersInCaseData[i].title && !numbersInCaseData[i].body) {
        // Remove existing number if fields are empty
        await removeNumberInCase(+numbersInCaseData[i].id);
      } else {
        // Update existing number
        await updateNumberInCase(numbersInCaseData[i]);
      }
    }

    return { message: "case updated successfully" };
  }

  if (intent === "delete") {
    await removeNumberInCaseByCaseId(+serviceCaseData.id);
    await remove(+serviceCaseData.id);
  }

  return redirect("");
}
