import { redirect } from "@remix-run/node";

import { add, update, remove } from "../data/critiques.server";
import ListCritiques from "../components/admin/Critique/List";

import { getAll as getAllCritiques } from "../data/critiques.server";
import { getAll as getAllUsers } from "../data/users.server";
import { getAll as getAllClients } from "../data/clients.server";
import { authCookie } from "../auth";
import { useLoaderData } from "@remix-run/react";

export default function Critiques() {
  const { items, clients } = useLoaderData();
  return <ListCritiques items={items} clients={clients} />;
}

export async function loader({ request }) {
  const cookieString = request.headers.get("Cookie");
  const userId = await authCookie.parse(cookieString);
  const users = await getAllUsers();

  let critiquesData = [];
  let clientsData = [];

  if (userId || users.length === 0) {
    critiquesData = await getAllCritiques();
    clientsData = await getAllClients();
  } else {
    return redirect("/admin");
  }

  return {
    isAuthed: userId | (users.length === 0),
    items: critiquesData,
    clients: clientsData,
  };
}

export async function action({ request }) {
  const formData = await request.formData();
  const critiqueData = Object.fromEntries(formData);

  const intent = formData.get("intent");

  if (intent === "add") {
    await add(critiqueData);
  }

  if (intent === "update") {
    await update(critiqueData);
  }

  if (intent === "delete") {
    await remove(+critiqueData.id);
  }

  return redirect("");
}
