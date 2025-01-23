import { prisma } from "./database.server";

export const getAll = async () => {
  try {
    const critiques = await prisma.critique.findMany();

    return critiques;
  } catch (error) {
    console.log(error);
  }
};

export const add = async (critiqueData) => {
  try {
    return await prisma.critique.create({
      data: {
        title: critiqueData.title,
        subtitle: critiqueData.subtitle,
        body: critiqueData.body,
        avatarPath: critiqueData.avatarPath,
        logoPath: critiqueData.logoPath,
        client: {
          connect: {
            id: +critiqueData.clientId,
          },
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const update = async (critiqueData) => {
  try {
    await prisma.critique.update({
      where: { id: +critiqueData.id },
      data: {
        title: critiqueData.title,
        subtitle: critiqueData.subtitle,
        body: critiqueData.body,
        avatarPath: critiqueData.avatarPath,
        logoPath: critiqueData.logoPath,
        client: {
          connect: {
            id: +critiqueData.clientId,
          },
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const remove = async (critiqueId) => {
  try {
    await prisma.critique.delete({ where: { id: critiqueId } });
  } catch (error) {
    console.log(error);
  }
};
