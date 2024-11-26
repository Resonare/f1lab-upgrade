import fs from "fs/promises";
import path from "path";
import { redirect } from "@remix-run/node";

import { add, update, remove } from "../data/clients.server";
import ListClients from "../components/admin/Client/List";

import { getAll as getAllClients } from "../data/clients.server";
import { getAll as getAllUsers } from "../data/users.server";
import { authCookie } from "../auth";
import { useLoaderData } from "@remix-run/react";

export default function Clients() {
  const { items } = useLoaderData();
  return <ListClients items={items} />;
}

export async function loader({ request }) {
  const cookieString = request.headers.get("Cookie");
  const userId = await authCookie.parse(cookieString);
  const users = await getAllUsers();

  let clientsData = [];

  if (userId || users.length === 0) {
    clientsData = await getAllClients();
  } else {
    return redirect("/admin");
  }

  const logosDirectory = path.resolve("public/images/logo");
  const files = await fs.readdir(logosDirectory);

  const logos = files.filter((file) => /\.(jpg|jpeg|png|gif|svg)$/i.test(file));

  return {
    isAuthed: userId | (users.length === 0),
    items: clientsData,
    logos: logos,
  };
}

export async function action({ request }) {
  const formData = await request.formData();
  const clientData = Object.fromEntries(formData);

  const intent = formData.get("intent");

  if (intent === "add") {
    await add(clientData);
  }

  if (intent === "update") {
    await update(clientData);
  }

  if (intent === "delete") {
    await remove(+clientData.id);
  }

  return redirect("");
}
