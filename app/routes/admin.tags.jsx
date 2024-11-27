import fs from "fs/promises";
import path from "path";
import { redirect } from "@remix-run/node";

import { add, update, remove } from "../data/tags.server";
import ListTags from "../components/admin/Tag/List";

import { getAll as getAllTags } from "../data/tags.server";
import { getAll as getAllUsers } from "../data/users.server";
import { authCookie } from "../auth";
import { useLoaderData } from "@remix-run/react";

export default function Tags() {
  const { items } = useLoaderData();
  return <ListTags items={items} />;
}

export async function loader({ request }) {
  const cookieString = request.headers.get("Cookie");
  const userId = await authCookie.parse(cookieString);
  const users = await getAllUsers();

  let tagsData = [];

  if (userId || users.length === 0) {
    tagsData = await getAllTags();
  } else {
    return redirect("/admin");
  }

  return {
    isAuthed: userId | (users.length === 0),
    items: tagsData,
  };
}

export async function action({ request }) {
  const formData = await request.formData();
  const tagData = Object.fromEntries(formData);

  const intent = formData.get("intent");

  if (intent === "add") {
    await add(tagData);
  }

  if (intent === "update") {
    await update(tagData);
  }

  if (intent === "delete") {
    await remove(+tagData.id);
  }

  return redirect("");
}
