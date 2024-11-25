import { prisma } from "./database.server";

export const getAll = async () => {
  try {
    const doneInCase = await prisma.doneInCase.findMany();

    return doneInCase;
  } catch (error) {
    console.log(error);
  }
};

export const getAllByCaseId = async (caseId) => {
  try {
    const doneInCase = await prisma.doneInCase.findMany({
      where: { caseId: caseId },
    });

    return doneInCase;
  } catch (error) {
    console.log(error);
  }
};

export const add = async (doneInCaseData) => {
  try {
    return await prisma.doneInCase.create({
      data: {
        title: doneInCaseData.title,
        description: doneInCaseData.description,
        iconPath: doneInCaseData.iconPath,
        mobileIconPath: doneInCaseData.mobileIconPath,
        case: {
          connect: {
            id: +doneInCaseData.caseId,
          },
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const update = async (doneInCaseData) => {
  try {
    await prisma.doneInCase.update({
      where: { id: +doneInCaseData.id },
      data: {
        title: doneInCaseData.title,
        description: doneInCaseData.description,
        iconPath: doneInCaseData.iconPath,
        mobileIconPath: doneInCaseData.mobileIconPath,
        case: {
          connect: {
            id: +doneInCaseData.caseId,
          },
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const remove = async (doneInCaseId) => {
  try {
    await prisma.doneInCase.delete({ where: { id: doneInCaseId } });
  } catch (error) {
    console.log(error);
  }
};

export const removeByCaseId = async (caseId) => {
  try {
    await prisma.doneInCase.delete({ where: { caseId: caseId } });
  } catch (error) {
    console.log(error);
  }
};
