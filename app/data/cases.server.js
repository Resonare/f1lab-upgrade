import { prisma } from "./database.server";

export const getAll = async () => {
  try {
    const serviceCases = await prisma.serviceCase.findMany({
      include: {
        client: true,
        numbers: true,
        dones: true,
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
        numbers: true,
        dones: true,
        client: {
          include: {
            critiques: true,
          },
        },
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
            id: +serviceCaseData.clientId,
          },
        },
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
        published: false,
        results: serviceCaseData.results || "",
        services: {
          connect: serviceCaseData.serviceIds.map((serviceId) => ({
            id: +serviceId,
          })),
        },
        client: {
          connect: {
            id: +serviceCaseData.clientId,
          },
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const publish = async (serviceCaseId) => {
  try {
    await prisma.serviceCase.update({
      where: { id: serviceCaseId },
      data: {
        published: true,
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

    await prisma.$transaction([
      prisma.casesOnServices.deleteMany({
        where: {
          caseId: serviceCaseId,
        },
      }),

      prisma.casesOnTechnologies.deleteMany({
        where: {
          caseId: serviceCaseId,
        },
      }),

      prisma.numberInCase.deleteMany({
        where: {
          caseId: serviceCaseId,
        },
      }),

      prisma.doneInCase.deleteMany({
        where: {
          caseId: serviceCaseId,
        },
      }),

      prisma.serviceCase.delete({
        where: {
          id: serviceCaseId,
        },
      }),
    ]);

    const deletedServiceCase = await prisma.serviceCase.delete({
      where: { id: serviceCaseId },
    });

    console.log("ServiceCase and related records deleted:", deletedServiceCase);
    return deletedServiceCase;
  } catch (error) {
    console.log(error);
  }
};
