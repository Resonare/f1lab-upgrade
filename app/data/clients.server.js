import { prisma } from "./database.server";

export const getAll = async () => {
  try {
    const clients = await prisma.client.findMany({
      include: {
        cases: true,
        critiques: true,
      },
    });

    return clients;
  } catch (error) {
    console.log(error);
  }
};

export const add = async (clientData) => {
  try {
    return await prisma.client.create({
      data: {
        title: clientData.title,
        description: clientData.description,
        logoPath: clientData.logoPath,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const update = async (clientData) => {
  try {
    await prisma.client.update({
      where: { id: +clientData.id },
      data: {
        title: clientData.title,
        description: clientData.description,
        logoPath: clientData.logoPath,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const remove = async (clientId) => {
  try {
    await prisma.$transaction([
      prisma.critique.deleteMany({
        where: {
          clientId: clientId,
        },
      }),

      prisma.client.delete({
        where: {
          id: clientId,
        },
      }),
    ]);
  } catch (error) {
    console.log(error);
  }
};
