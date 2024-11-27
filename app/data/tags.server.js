import { prisma } from "./database.server";

export const getAll = async () => {
  try {
    const tags = await prisma.tag.findMany();

    return tags;
  } catch (error) {
    console.log(error);
  }
};

export const add = async (tagData) => {
  try {
    return await prisma.tag.create({
      data: {
        title: tagData.title,
        color: tagData.color,
        link: tagData.link,
        inverseColor: tagData.inverseColor,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const update = async (tagData) => {
  try {
    await prisma.tag.update({
      where: { id: +tagData.id },
      data: {
        title: tagData.title,
        color: tagData.color,
        link: tagData.link,
        inverseColor: tagData.inverseColor,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const remove = async (tagId) => {
  try {
    await prisma.tag.delete({ where: { id: tagId } });
  } catch (error) {
    console.log(error);
  }
};
