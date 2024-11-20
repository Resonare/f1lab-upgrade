import {
  Form,
  NavLink,
  Outlet,
  redirect,
  useLoaderData,
} from "@remix-run/react";

import { getAll as getAllUsers, verifyUser } from "../data/users.server";

import { authCookie } from "../auth";
import UserForm from "../components/admin/User/Form";

export default function AdminPanel() {
  const { isAuthed } = useLoaderData();

  const navigation = [
    {
      title: "Пользователи",
      link: "users",
    },
    {
      title: "Направления",
      link: "branches",
    },
    {
      title: "Услуги",
      link: "services",
    },
    {
      title: "Кейсы",
      link: "cases",
    },
  ];

  return (
    <div className="xl:px-120 lg:px-60 px-[44.1px] pb-180">
      <div className="flex justify-between">
        <div className="font-title text-5xl pt-180 xl:px-30 lg:px-15 px-10 ">
          Админка
        </div>
        {isAuthed && (
          <div className=" pt-[190px] text-xl xl:px-30 lg:px-15 px-10 ">
            <Form method="POST">
              <button
                type="submit"
                name="intent"
                value="signout"
                className="font-text bg-gray-400 text-gray-100 p-10"
              >
                Выйти
              </button>
            </Form>
          </div>
        )}
      </div>
      <div className="grid grid-cols-8 pt-30">
        {isAuthed && (
          <>
            <div className="col-span-12 mb-40">
              {navigation.map((nav) => (
                <NavLink
                  key={nav.link}
                  to={nav.link}
                  className={({ isActive }) =>
                    `p-10 hover:bg-opacity-30 text-start text w-full h-20 ${
                      isActive ? "bg-f1-light" : "hover:bg-gray-200"
                    }`
                  }
                >
                  {nav.title}
                </NavLink>
              ))}
            </div>
            <div className="col-span-12 xl:px-30 lg:px-15 px-10">
              <Outlet />
            </div>
          </>
        )}
        {!isAuthed && (
          <div className="col-span-4 xl:px-30 lg:px-15 px-10">
            <UserForm intent="signin" />
          </div>
        )}
      </div>
    </div>
  );
}

export async function loader({ request }) {
  const cookieString = request.headers.get("Cookie");
  const userId = await authCookie.parse(cookieString);

  const users = await getAllUsers();

  return { isAuthed: userId || users.length === 0 };
}

export async function action({ request }) {
  const formData = await request.formData();
  const userData = Object.fromEntries(formData);

  const intent = formData.get("intent");

  if (intent === "signin") {
    const name = String(userData.name);
    const password = String(userData.password);

    const { isValid, userId } = await verifyUser(name, password);

    if (!isValid) {
      return { errors: { password: "Неверный пароль" } };
    }

    return redirect("/admin/users", {
      headers: { "Set-Cookie": await authCookie.serialize(userId) },
    });
  }

  if (intent === "signout") {
    return redirect("/admin/users", {
      headers: { "Set-Cookie": await authCookie.serialize("") },
    });
  }
}
