import { redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { add, update, remove } from "../data/users.server";
import { authCookie } from "../auth";
import { getAll as getAllUsers } from "../data/users.server";

import ListUsers from "../components/admin/User/List";
import { validate } from "../validate/user";

export default function Users() {
  const { items } = useLoaderData();
  return <ListUsers items={items} />;
}

export async function loader({ request }) {
  const cookieString = request.headers.get("Cookie");
  const userId = await authCookie.parse(cookieString);
  const users = await getAllUsers();

  let usersData = [];

  if (userId || users.length === 0) {
    usersData = await getAllUsers();
  } else {
    return redirect("/admin");
  }

  return {
    isAuthed: userId | (users.length === 0),
    items: usersData,
  };
}

export async function action({ request }) {
  const formData = await request.formData();
  const userData = Object.fromEntries(formData);

  const intent = formData.get("intent");

  if (intent === "add") {
    const name = String(userData.name);
    const password = String(userData.password);

    const errors = validate(name, password);

    if (errors) {
      return { errors: errors };
    }

    await add(userData);

    return { message: "user added successfully" };
  }

  if (intent === "update") {
    const id = userData.id;
    const name = String(userData.name);
    const password = String(userData.password);

    const errors = validate(name, password);

    if (errors) {
      return { errors: errors };
    }

    await update({ id, name, password });

    return { message: "user updated successfully" };
  }

  if (intent === "delete") {
    await remove(+userData.id);
  }

  return redirect("");
}
