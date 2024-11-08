import { useState } from "react";
import { useLoaderData } from "@remix-run/react";

import Section from "../../layout/Section";
import SectionTitle from "../../components/SectionTitle";
import Switch from "../../components/buttons/Switch";
import SwitchButton from "../../components/buttons/SwitchButton";
import CaseCard from "../../components/cards/CaseCard";

const Cases = () => {
  const { servicesData, casesData } = useLoaderData();

  // Categories: all, consulting, security, cloud
  const [category, setCategory] = useState("all");
  const [cases, setCases] = useState(casesData);

  const handleSwitchClick = (newCategory) => {
    setCategory(newCategory);

    if (newCategory === "all") {
      setCases(casesData);
      return;
    }

    let branch = 0;
    if (newCategory === "consulting") {
      branch = 1;
    } else if (newCategory === "security") {
      branch = 2;
    } else if (newCategory === "cloud") {
      branch = 3;
    }

    const foundCases = casesData.filter(
      (caseData) =>
        caseData.services.filter((service) => service.branchId == branch)
          .length > 0
    );

    setCases(foundCases);
  };

  const splitArrayIntoThree = (array) => {
    const part1 = array.slice(0, Math.ceil(array.length / 3));
    const part2 = array.slice(
      Math.ceil(array.length / 3),
      Math.ceil((2 * array.length) / 3)
    );
    const part3 = array.slice(Math.ceil((2 * array.length) / 3));

    return [part1, part2, part3];
  };

  const splitArrayIntoTwo = (array) => {
    const part1 = array.slice(0, Math.ceil(array.length / 2));
    const part2 = array.slice(Math.ceil(array.length / 2));

    return [part1, part2];
  };

  return (
    <Section className="lg:pb-200 pb-[82px]" hero={true}>
      <SectionTitle
        className="md:pb-15 xl:text-[56px] lg:text-[44px] sm:text-[56px] text-[28px]"
        col="col-start-1 col-end-5"
      >
        Портфолио
      </SectionTitle>

      <p className="text-gray-400 mb-15 row-start-2 col-start-1 col-end-5 text-[26px] font-extended font-bold leading-[30px]">
        Категория
      </p>

      <Switch className="mb-[50px] lg:flex-row flex-col col-start-1 col-end-5 lg:w-fit w-full">
        <SwitchButton
          selected={category == "all"}
          selectedColor="bg-gray-100"
          onClick={() => handleSwitchClick("all")}
        >
          Все кейсы
        </SwitchButton>
        <SwitchButton
          selected={category == "consulting"}
          textColor="text-consulting"
          selectedColor="bg-gray-100"
          onClick={() => handleSwitchClick("consulting")}
        >
          ИТ-консалтинг
        </SwitchButton>
        <SwitchButton
          selected={category == "cloud"}
          textColor="text-cloud"
          selectedColor="bg-gray-100"
          onClick={() => handleSwitchClick("cloud")}
        >
          Менеджмент облачной инфраструктуры
        </SwitchButton>
        <SwitchButton
          selected={category == "security"}
          textColor="text-security"
          selectedColor="bg-gray-100"
          onClick={() => handleSwitchClick("security")}
        >
          Информационная безопасность (Аутсорсинг ИБ)
        </SwitchButton>
      </Switch>

      <div className="max-md:hidden row-start-4 col-start-1 col-end-5 flex">
        {splitArrayIntoThree(cases).map((part, partIndex, parts) =>
          partIndex != parts.length - 1 ? (
            <div className="basis-1/3 [&>div>div]:border [&>div>div]:mt-[-1px] mr-[-1px]">
              {part.map((caseData) => (
                <CaseCard
                  key={caseData.id}
                  tags={caseData.services}
                  logoPath={caseData.imageUrl}
                >
                  {caseData.description}
                </CaseCard>
              ))}
            </div>
          ) : (
            <div className="basis-1/3 [&>div>div]:border [&>div>div]:mt-[-1px] grow">
              {part.map((caseData) => (
                <CaseCard
                  key={caseData.id}
                  tags={caseData.services}
                  logoPath={caseData.imageUrl}
                >
                  {caseData.description}
                </CaseCard>
              ))}
            </div>
          )
        )}
      </div>

      <div className="md:hidden row-start-4 col-start-1 col-end-5 flex">
        {splitArrayIntoTwo(cases).map((part, partIndex, parts) =>
          partIndex != parts.length - 1 ? (
            <div className="basis-1/2 [&>div>div]:border [&>div>div]:mt-[-1px] mr-[-1px]">
              {part.map((caseData) => (
                <CaseCard
                  key={caseData.id}
                  tags={caseData.services}
                  logoPath={caseData.imageUrl}
                >
                  {caseData.description}
                </CaseCard>
              ))}
            </div>
          ) : (
            <div className="basis-1/2 [&>div>div]:border [&>div>div]:mt-[-1px] grow">
              {part.map((caseData) => (
                <CaseCard
                  key={caseData.id}
                  tags={caseData.services}
                  logoPath={caseData.imageUrl}
                >
                  {caseData.description}
                </CaseCard>
              ))}
            </div>
          )
        )}
      </div>
    </Section>
  );
};

export default Cases;
