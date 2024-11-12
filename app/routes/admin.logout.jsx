import { redirect } from "react-router";
import { authCookie } from "../auth";

export async function action() {
  return redirect("/admin", {
    headers: {
      "Set-Cookie": await authCookie.serialize("", { maxAge: 0 }),
    },
  });
}
