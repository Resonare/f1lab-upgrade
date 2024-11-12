import { createCookie } from "@remix-run/node";

let secret = process.env.COOKIE_SECRET || "default";
if (secret == "default") {
  console.log("No COOKIE_SECRET set, the app is insecure");
  secret = "default-secret";
}

export const authCookie = createCookie("auth", {
  httpOnly: true,
  path: "/admin",
  sameSite: "lax",
  secrets: [secret],
  secure: process.env.NODE_ENV === "production",
  maxAge: 60 * 60 * 24 * 30,
});
