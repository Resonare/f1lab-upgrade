import { useLocation } from "@remix-run/react";

import Section from "../../layout/Section";
import SectionTitle from "../../components/SectionTitle";
import Switch from "../../components/buttons/Switch";
import SwitchButton from "../../components/buttons/SwitchButton";
import CaseCard from "../../components/cards/CaseCard";
import Tag from "../../components/misc/Tag";

const Cases = () => {
  const location = useLocation();
  const { pathname } = location;
  const path = pathname.split("/");
  const currentLocation = path[path.length - 1];

  const dummyTags = [<Tag>1</Tag>];

  return (
    <Section hero={true}>
      <SectionTitle
        className="md:pb-15 xl:text-[56px] lg:text-[44px] sm:text-[56px] text-[28px]"
        col="col-start-1 col-end-5"
      >
        Портфолио
      </SectionTitle>

      <p className="mb-15 row-start-2 col-start-1 col-end-5 text-[26px] font-extended font-bold leading-[30px]">
        Категория
      </p>

      <Switch className="mb-[50px]">
        <SwitchButton selected={true} selectedColor="bg-gray-100">
          Все кейсы
        </SwitchButton>
        <SwitchButton textColor="text-consulting">ИТ-консалтинг</SwitchButton>
        <SwitchButton>Менеджмент облачной инфраструктуры</SwitchButton>
        <SwitchButton>Информационная безопасность (Аутсорсинг ИБ)</SwitchButton>
      </Switch>

      <div className="row-start-4 col-start-1 col-end-5 flex">
        <div className="basis-1/3">
          <CaseCard
            tags={dummyTags}
            logoPath="/images/logo/lg-logo.svg"
            currentLocation={currentLocation}
            className="border"
          >
            Сделали то и это, а еще вон то и это для компании “Samarga”, что
            привело к этому и позволило это
          </CaseCard>
        </div>
        <div className="basis-1/3">
          <CaseCard className="border border-l-0" row="row-start-4">
            Сделали то и это, а еще вон то и это для компании “Samarga”, что
            привело к этому и позволило это Сделали то и это, а еще вон то и это
            для компании “Samarga”, что привело к этому и позволило это
          </CaseCard>
        </div>
        <div className="basis-1/3">
          <CaseCard className="border border-l-0" row="row-start-4">
            Сделали то и это, а еще вон то и это для компании “Samarga”, что
            привело к этому и позволило этоСделали то и это, а еще вон то и это
            для компании “Samarga”, что привело к этому и позволило это
          </CaseCard>
        </div>
      </div>
    </Section>
  );
};

export default Cases;
