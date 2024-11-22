import { prisma } from "./database.server";

export const getAll = async () => {
  try {
    const serviceCases = await prisma.serviceCase.findMany({
      include: {
        client: true,
        services: true,
        CasesOnServices: {
          include: {
            case: true,
          },
        },
      },
    });

    return serviceCases;
  } catch (error) {
    console.log(error);
  }
};

export const getOne = async (serviceCaseId) => {
  try {
    const serviceCase = await prisma.serviceCase.findUnique({
      where: { id: +serviceCaseId },
      include: {
        services: true,
        client: true,
      },
    });

    return serviceCase;
  } catch (error) {
    console.log(error);
  }
};

export const getByService = async (service) => {
  try {
    const serviceCases = await prisma.serviceCase.findMany({
      include: {
        client: true,
        services: true,
        CasesOnServices: {
          include: {
            case: true,
          },
        },
      },
    });

    return serviceCases;
  } catch (error) {
    console.log(error);
  }
};

export const add = async (serviceCaseData) => {
  try {
    return await prisma.serviceCase.create({
      data: {
        description: serviceCaseData.description || "",
        task: serviceCaseData.task || "",
        results: serviceCaseData.results || "",
        services: {
          connect: serviceCaseData.serviceIds.map((serviceId) => ({
            id: +serviceId,
          })),
        },
        client: {
          connect: {
            id: +serviceCaseData.clientId
          }
        }
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const update = async (serviceCaseData) => {
  try {
    await prisma.serviceCase.update({
      where: { id: +serviceCaseData.id },
      data: {
        services: {
          set: [], // This removes all existing connections
        },
      },
    });

    await prisma.serviceCase.update({
      where: { id: +serviceCaseData.id },
      data: {
        description: serviceCaseData.description || "",
        task: serviceCaseData.task || "",
        results: serviceCaseData.results || "",
        services: {
          connect: serviceCaseData.serviceIds.map((serviceId) => ({
            id: +serviceId,
          })),
        },
        client: {
          connect: {
            id: +serviceCaseData.clientId
          }
        }
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const remove = async (serviceCaseId) => {
  try {
    const serviceCase = await prisma.serviceCase.findUnique({
      where: { id: serviceCaseId },
    });

    if (!serviceCase) {
      throw new Error(`ServiceCase with ID ${serviceCaseId} does not exist.`);
    }

    await prisma.casesOnServices.deleteMany({
      where: { caseId: serviceCaseId },
    });

    const deletedServiceCase = await prisma.serviceCase.delete({
      where: { id: serviceCaseId },
    });

    console.log("ServiceCase and related records deleted:", deletedServiceCase);
    return deletedServiceCase;
  } catch (error) {
    console.log(error);
  }
};
