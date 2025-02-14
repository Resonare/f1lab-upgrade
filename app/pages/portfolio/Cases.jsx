import { useState, useEffect } from "react";
import { useLoaderData, useSearchParams } from "@remix-run/react";

import Section from "../../layout/Section";
import SectionTitle from "../../layout/SectionTitle";
import Switch from "../../components/buttons/Switch";
import SwitchButton from "../../components/buttons/SwitchButton";
import CaseCard from "../../components/cards/CaseCard";
import Carousel from "../../components/misc/Carousel";

const Cases = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const defaultBranch = searchParams.get("branchId") || null;

  const { casesData, branchesData } = useLoaderData();

  const [branch, setBranch] = useState(defaultBranch);
  const [cases, setCases] = useState(casesData);

  const changeBranch = (newBranch) => {
    setBranch(newBranch);

    if (newBranch === null) {
      setCases(casesData);
      return;
    }

    const foundCases = casesData.filter(
      (caseData) =>
        caseData.services.filter((service) => service.branchId == newBranch)
          .length > 0
    );

    setCases(foundCases);
  };

  useEffect(() => {
    if (defaultBranch != branch) changeBranch(defaultBranch);
  }, [defaultBranch]);

  const handleSwitchClick = (newBranch, event) => {
    changeBranch(newBranch);

    event.target.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
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
        className="max-sm:font-extended md:pb-15 xl:text-[56px] lg:text-[44px] sm:text-[56px] text-[28px]"
        col="col-start-1 xl:col-end-4 col-end-5 max-lg:hidden"
      >
        Кейсы: как мы решаем задачи наших клиентов
      </SectionTitle>

      <SectionTitle
        className="max-sm:font-extended md:pb-15 xl:text-[56px] lg:text-[44px] sm:text-[56px] text-[28px]"
        col="col-start-1 col-end-5 lg:hidden"
      >
        Портфолио
      </SectionTitle>

      <p className="max-sm:mt-30 mb-15 row-start-2 col-start-1 col-end-5 max-sm:uppercase sm:text-[26px] text-sm sm:font-extended font-text font-bold leading-[30px] max-sm:tracking-wide sm:text-gray-400 text-gray-300">
        Категория
      </p>

      <Switch className="sm:mb-[50px] mb-30 col-start-1 col-end-5 lg:w-fit w-full">
        <SwitchButton
          selected={branch === null}
          selectedColor="bg-gray-100"
          onClick={(event) => handleSwitchClick(null, event)}
        >
          Все кейсы
        </SwitchButton>

        {branchesData.map((branchData) => (
          <SwitchButton
            key={branchData.id}
            selected={branch == branchData.id}
            textColor={`text-${branchData.color}`}
            selectedColor="bg-gray-100"
            onClick={(event) => handleSwitchClick(branchData.id, event)}
          >
            {branchData.title}
          </SwitchButton>
        ))}
      </Switch>

      <div className="max-md:hidden row-start-4 col-start-1 col-end-5 flex [&>div:last-child]:grow [&>div:not(:last-child)]:mr-[-1px]">
        {splitArrayIntoThree(cases).map((part, index) => (
          <div
            key={index}
            className="basis-1/3 [&>div>div]:border [&>div>div]:mt-[-1px] mr-[-1px]"
          >
            {part.map((caseData) => (
              <CaseCard key={caseData.id} caseData={caseData} />
            ))}
          </div>
        ))}
      </div>

      <div className="md:hidden max-sm:hidden row-start-4 col-start-1 col-end-5 flex [&>div:last-child]:grow [&>div:not(:last-child)]:mr-[-1px]">
        {splitArrayIntoTwo(cases).map((part, index) => (
          <div
            key={index}
            className="basis-1/2 [&>div>div]:border [&>div>div]:mt-[-1px]"
          >
            {part.map((caseData) => (
              <CaseCard key={caseData.id} caseData={caseData} />
            ))}
          </div>
        ))}
      </div>

      <div className="col-start-1 col-end-5 overflow-hidden flex flex-col gap-30">
        <Carousel
          className="col-start-1 col-end-5 sm:hidden"
          lastIndicatorIsLight={true}
        >
          {cases.length > 0
            ? cases.map((caseData) => (
                <CaseCard
                  className="border-r"
                  key={caseData.id}
                  caseData={caseData}
                />
              ))
            : null}
        </Carousel>
      </div>
    </Section>
  );
};

export default Cases;
