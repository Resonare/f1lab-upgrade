import { redirect } from "@remix-run/node";

import { update, get } from "../data/seo.server";
import ListServices from "../components/admin/Service/List";

import { useLoaderData } from "@remix-run/react";
import { authCookie } from "../auth";

export default function Services() {
  const data = useLoaderData();
  return <ListServices data={data} />;
}

export async function loader({ request }) {
  const cookieString = request.headers.get("Cookie");
  const userId = await authCookie.parse(cookieString);

  let data = [];

  if (userId || users.length === 0) {
    data = await get();
  } else {
    return redirect("/admin");
  }

  return {
    isAuthed: userId,
    data: data,
  };
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const intent = formData.get("intent");

  if (intent === "update") {
    await update(data);
  }

  return redirect("");
}
