import { redirect } from "@remix-run/node";

import { add, update, remove } from "../data/branches.server";
import ListBranches from "../components/admin/Branch/List";

import { getAll as getAllBranches } from "../data/branches.server";
import { getAll as getAllUsers } from "../data/users.server";
import { authCookie } from "../auth";
import { useLoaderData } from "@remix-run/react";

export default function Branches() {
  const { items } = useLoaderData();
  return <ListBranches items={items} />;
}

export async function loader({ request }) {
  const cookieString = request.headers.get("Cookie");
  const userId = await authCookie.parse(cookieString);
  const users = await getAllUsers();

  let branchesData = [];

  if (userId || users.length === 0) {
    branchesData = await getAllBranches();
  } else {
    return redirect("/admin");
  }

  return {
    isAuthed: userId | (users.length === 0),
    items: branchesData,
  };
}

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

  return redirect("");
}
