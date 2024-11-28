import { prisma } from "./database.server";

export const getAll = async () => {
  try {
    const services = await prisma.service.findMany({
      include: {
        branch: true,
        tag: true,
        cases: true,
      },
    });

    return services;
  } catch (error) {
    console.log(error);
  }
};

export const add = async (serviceData) => {
  try {
    // Find branch to get it's color
    const branch = await prisma.branch.findUnique({
      where: {
        id: parseInt(serviceData.branchId),
      },
    });

    return await prisma.service.create({
      data: {
        title: serviceData.title,
        link: serviceData.link,
        branch: {
          connect: {
            id: parseInt(serviceData.branchId),
          },
        },
        cases: serviceData.cases,
        tag: {
          create: {
            title: serviceData.title,
            color: branch.color,
            link: serviceData.link,
          },
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const update = async (serviceData) => {
  try {
    // Find branch to get it's color
    const branch = await prisma.branch.findUnique({
      where: {
        id: parseInt(serviceData.branchId),
      },
    });

    await prisma.service.update({
      where: { id: +serviceData.id },
      data: {
        title: serviceData.title,
        link: serviceData.link,
        branch: {
          connect: {
            id: parseInt(serviceData.branchId),
          },
        },
        cases: serviceData.cases,
        tag: {
          update: {
            title: serviceData.title,
            color: branch.color,
            link: serviceData.link,
          },
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const remove = async (serviceId) => {
  try {
    const service = await prisma.service.findUnique({
      where: { id: serviceId },
    });

    const tagId = service.tagId;

    await prisma.$transaction([
      prisma.service.delete({ where: { id: serviceId } }),
      prisma.tag.delete({ where: { id: tagId } }),
    ]);
  } catch (error) {
    console.log(error);
  }
};
