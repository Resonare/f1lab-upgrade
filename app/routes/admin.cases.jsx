import { redirect } from "@remix-run/node";
import fs from "fs/promises";
import path from "path";

import { add, update, publish, remove } from "../data/cases.server";
import ListCases from "../components/admin/Case/List";

import { getAll as getAllBranches } from "../data/branches.server";
import { getAll as getAllClients } from "../data/clients.server";
import { getAll as getAllServiceCases } from "../data/cases.server";
import { getAll as getAllUsers } from "../data/users.server";
import { getAll as getAllTags } from "../data/tags.server";
import { add as addNumberInCase } from "../data/numbersInCase.server";
import { update as updateNumberInCase } from "../data/numbersInCase.server";
import { remove as removeNumberInCase } from "../data/numbersInCase.server";
import { add as addDoneInCase } from "../data/doneInCase.server";
import { update as updateDoneInCase } from "../data/doneInCase.server";
import { remove as removeDoneInCase } from "../data/doneInCase.server";
import { removeByCaseId as removeNumberInCaseByCaseId } from "../data/numbersInCase.server";
import { useLoaderData } from "@remix-run/react";
import { authCookie } from "../auth";

export default function Cases() {
  const { items, branches, clients, tags } = useLoaderData();
  return (
    <ListCases
      items={items}
      branches={branches}
      clients={clients}
      tags={tags}
    />
  );
}

export async function loader({ request }) {
  const cookieString = request.headers.get("Cookie");
  const userId = await authCookie.parse(cookieString);
  const users = await getAllUsers();

  let branchesData = [];
  let clientsData = [];
  let tagsData = [];
  let serviceCasesData = [];

  if (userId || users.length === 0) {
    serviceCasesData = await getAllServiceCases();
    branchesData = await getAllBranches();
    clientsData = await getAllClients();
    tagsData = await getAllTags();
  } else {
    return redirect("/admin");
  }

  const iconsDirectory = path.resolve("public/images/icon-pack");
  const files = await fs.readdir(iconsDirectory);

  const icons = files.filter((file) => /\.(jpg|jpeg|png|gif|svg)$/i.test(file));

  return {
    isAuthed: userId | (users.length === 0),
    items: serviceCasesData,
    clients: clientsData,
    tags: tagsData,
    branches: branchesData,
    desktopIcons: icons.filter((icon) => icon.split("_")[0] !== "mobile"),
    mobileIcons: icons.filter((icon) => icon.split("_")[0] === "mobile"),
  };
}

export async function action({ request }) {
  const formData = await request.formData();
  const serviceCaseData = {
    id: formData.get("id"),
    description: formData.get("description"),
    task: formData.get("task"),
    results: formData.get("results"),
    published: false,
    serviceIds: formData.getAll("serviceIds"),
    techTagIds: formData.getAll("techTagIds"),
    clientId: formData.get("clientId"),
  };

  const numbersInCaseData = [];
  const numberInCaseIds = formData.getAll("numberInCaseIds");
  const numberInCaseTitles = formData.getAll("numberInCaseTitles");
  const numberInCaseBodies = formData.getAll("numberInCaseBodies");

  numberInCaseIds.map((numberInCaseId, index) =>
    numbersInCaseData.push({
      id: numberInCaseId,
      title: numberInCaseTitles[index],
      body: numberInCaseBodies[index],
      caseId: formData.get("id"),
    })
  );

  const doneInCaseData = [];
  const doneInCaseIds = formData.getAll("doneInCaseIds");
  const doneInCaseTitles = formData.getAll("doneInCaseTitles");
  const doneInCaseDescriptions = formData.getAll("doneInCaseDescriptions");
  const doneInCaseIconPaths = formData.getAll("doneInCaseIconPaths");
  const doneInCaseMobileIconPaths = formData.getAll(
    "doneInCaseMobileIconPaths"
  );

  doneInCaseIds.map((doneInCaseId, index) =>
    doneInCaseData.push({
      id: doneInCaseId,
      title: doneInCaseTitles[index],
      description: doneInCaseDescriptions[index],
      iconPath: doneInCaseIconPaths[index],
      mobileIconPath: doneInCaseMobileIconPaths[index],
      caseId: formData.get("id"),
    })
  );

  const intent = formData.get("intent");

  if (intent === "add") {
    await add(serviceCaseData);

    for (let i = 0; i < numbersInCaseData.length; i++) {
      await addNumberInCase(numbersInCaseData[i]);
    }

    for (let i = 0; i < doneInCaseData.length; i++) {
      await addDoneInCase(doneInCaseData[i]);
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

    for (let i = 0; i < doneInCaseData.length; i++) {
      if (!doneInCaseData[i].id) {
        // Add new number
        await addDoneInCase(doneInCaseData[i]);
      } else if (!doneInCaseData[i].title && !doneInCaseData[i].description) {
        // Remove existing number if fields are empty
        await removeDoneInCase(+doneInCaseData[i].id);
      } else {
        // Update existing number
        await updateDoneInCase(doneInCaseData[i]);
      }
    }

    return { message: "case updated successfully" };
  }

  if (intent === "publish") {
    await publish(+serviceCaseData.id);
  }

  if (intent === "delete") {
    await removeNumberInCaseByCaseId(+serviceCaseData.id);
    await remove(+serviceCaseData.id);
  }

  return redirect("");
}
