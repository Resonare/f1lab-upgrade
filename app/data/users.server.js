import { prisma } from "./database.server";
import crypto from "crypto";

export const getAll = async () => {
  try {
    const users = await prisma.user.findMany({
      include: {
        password: false,
      },
    });

    return users;
  } catch (error) {
    console.log(error);
  }
};

export const accountExists = async (name) => {
  const user = await prisma.user.findUnique({
    where: { name: name },
    select: { id: true },
  });

  return Boolean(user);
};

export const hashPassword = (password) => {
  const salt = crypto.randomBytes(16).toString("hex");

  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha256")
    .toString("hex");

  return { hash, salt };
};

export const verifyPassword = (password, hash, salt) => {
  const verifyHash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha256")
    .toString("hex");

  return hash === verifyHash;
};

export const verifyUser = async (name, password) => {
  const user = await prisma.user.findUnique({
    where: { name },
  });

  if (!user) return false;

  return {
    isValid: verifyPassword(password, user.password, user.salt),
    userId: user.id,
  };
};

export const add = async ({ name, password }) => {
  try {
    const { hash, salt } = hashPassword(password);

    return await prisma.user.create({
      data: {
        name: name,
        password: hash,
        salt: salt,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const update = async ({ id, name, password }) => {
  try {
    const { hash, salt } = hashPassword(password);
    await prisma.user.update({
      where: { id: +id },
      data: {
        name: name,
        password: hash,
        salt: salt,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const remove = async (userId) => {
  try {
    await prisma.user.delete({ where: { id: userId } });
  } catch (error) {
    console.log(error);
  }
};
