import { prisma } from "./database.server";

export async function get() {
  return await prisma.companyInfo.findFirst();
}

export async function upsert(data) {
  const existing = await prisma.companyInfo.findFirst();
  if (existing) {
    return await prisma.companyInfo.update({
      where: { id: existing.id },
      data,
    });
  }
  return await prisma.companyInfo.create({ data });
}
