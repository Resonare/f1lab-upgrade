import { prisma } from "./database.server";

export const getAll = async () => {
  try {
    const numbersInCase = await prisma.numberInCase.findMany();

    return numbersInCase;
  } catch (error) {
    console.log(error);
  }
};

export const getAllByCaseId = async (caseId) => {
  try {
    const numbersInCase = await prisma.numberInCase.findMany({
      where: { caseId: caseId },
    });

    return numbersInCase;
  } catch (error) {
    console.log(error);
  }
};

export const add = async (numberInCaseData) => {
  try {
    return await prisma.numberInCase.create({
      data: {
        title: numberInCaseData.title,
        body: numberInCaseData.body,
        case: {
          connect: {
            id: +numberInCaseData.caseId,
          },
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const update = async (numberInCaseData) => {
  try {
    await prisma.numberInCase.update({
      where: { id: +numberInCaseData.id },
      data: {
        title: numberInCaseData.title,
        body: numberInCaseData.body,
        case: {
          connect: {
            id: +numberInCaseData.caseId,
          },
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const remove = async (numberInCaseId) => {
  try {
    await prisma.numberInCase.delete({ where: { id: numberInCaseId } });
  } catch (error) {
    console.log(error);
  }
};

export const removeByCaseId = async (caseId) => {
  try {
    await prisma.numberInCase.delete({ where: { caseId: caseId } });
  } catch (error) {
    console.log(error);
  }
};
