import { prisma } from "./database.server";

export async function update(id, data) {
  return await prisma.seo.update({
    where: { id },
    data,
  });
}

export async function get() {
  return await prisma.seo.findFirst();
}
