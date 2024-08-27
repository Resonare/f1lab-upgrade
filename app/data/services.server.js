import { prisma } from "./database.server";

export const getAll = async () => {
  try {
    const services = await prisma.service.findMany({
      include: {
        branch: true,
        cases: true,
        CasesOnServices: {
          include: {
            case: true,
          },
        },
      },
    });

    return services;
  } catch (error) {
    console.log(error);
  }
};

export const add = async (serviceData) => {
  try {
    return await prisma.service.create({
      data: {
        title: serviceData.title,
        link: serviceData.link,
        branchId: parseInt(serviceData.branchId),
        cases: serviceData.cases,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const update = async (serviceData) => {
  try {
    await prisma.service.update({
      where: { id: +serviceData.id },
      data: {
        title: serviceData.title,
        link: serviceData.link,
        branchId: parseInt(serviceData.branchId),
        cases: serviceData.cases,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const remove = async (serviceId) => {
  try {
    await prisma.service.delete({ where: { id: serviceId } });
  } catch (error) {
    console.log(error);
  }
};
