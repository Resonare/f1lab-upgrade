import { prisma } from "./database.server";

export const getAll = async () => {
  try {
    const branches = await prisma.branch.findMany({
      include: {
        services: true,
      },
    });

    return branches;
  } catch (error) {
    console.log(error);
  }
};

export const add = async (branchData) => {
  try {
    return await prisma.branch.create({
      data: {
        title: branchData.title,
        color: branchData.color,
        services: branchData.services,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const update = async (branchData) => {
  try {
    await prisma.branch.update({
      where: { id: +branchData.id },
      data: {
        title: branchData.title,
        color: branchData.color,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const remove = async (branchId) => {
  try {
    await prisma.branch.delete({ where: { id: branchId } });
  } catch (error) {
    console.log(error);
  }
};
