import Section from "../Section";
import SectionTitle from "../SectionTitle";
import CaseCard from "../cards/CaseCard";
import Tag from "../Tag";

const Cases = () => {
  //REDO NEEDED
  const tags = [
    <Tag key={1} className="bg-f1-light">It аудит</Tag>,
    <Tag key={2} className="bg-consulting">Обслуживание серверов</Tag>,
    <Tag key={3} className="bg-consulting">Гибернация данных</Tag>,
    <Tag key={4} className="bg-consulting">VOIP</Tag>,
    <Tag key={5} className="bg-consulting">Обслуживание сетевого оборудования</Tag>,
  ];

  return (
    <div id="">
      <Section rowsAmount={4}>
        <SectionTitle
          row="row-start-1"
          col="xl:col-start-2 lg:col-start-2 md:col-start-2 col-start-1 xl:col-end-4 lg:col-end-4 md:col-end-4 col-end-5"
        >
          Примеры кейсов с аудитом
        </SectionTitle>
        <CaseCard
          row="row-start-2"
          col="col-start-1"
          tags={tags}
          logoPath="lg_logo.svg"
        >
          Сделали то и это, а еще вон то и это для компании “Samarga”, что
          привело к этому и позволило это
        </CaseCard>
        <CaseCard
          row="row-start-2"
          col="col-start-2"
          tags={tags}
          logoPath="xxi_logo.png"
        >
          Сделали то и это, а еще вон то и это для компании “Samarga”, что
          привело к этому и позволило это
        </CaseCard>
        <CaseCard
          row="row-start-2"
          col="col-start-3"
          tags={tags}
          logoPath="dv_logo.png"
        >
          Сделали то и это, а еще вон то и это для компании “Samarga”, что
          привело к этому и позволило это
        </CaseCard>
        <CaseCard
          row="row-start-3"
          col="col-start-1"
          tags={tags}
          logoPath="sunlight_logo.svg"
        >
          Сделали то и это, а еще вон то и это для компании “Samarga”, что
          привело к этому и позволило это
        </CaseCard>
        <CaseCard
          row="row-start-3"
          col="col-start-2"
          tags={tags}
          logoPath="onduline_logo.svg"
        >
          Сделали то и это, а еще вон то и это для компании “Samarga”, что
          привело к этому и позволило это
        </CaseCard>
        <CaseCard
          row="row-start-3"
          col="col-start-3"
          tags={tags}
          logoPath="rusapai_logo.png"
        >
          Сделали то и это, а еще вон то и это для компании “Samarga”, что
          привело к этому и позволило это
        </CaseCard>
        {/* <ContentCard
          row="row-start-2"
          col="col-start-1 xl:col-end-2 lg:col-end-2 col-end-3"
          iconPath="audit/audit-scenario-icon1.svg"
        >
          Понять текущее состояние IT-инфраструктуры и выявить слабые места
        </ContentCard>
        <ContentCard
          row="row-start-2"
          col="col-start-3 xl:col-end-4 lg:col-end-4 col-end-5"
          iconPath="audit/audit-scenario-icon2.svg"
        >
          Подготовиться к внедрению новых технологий и ит-решений
        </ContentCard>
        <ContentCard
          row="row-start-3"
          col="xl:col-start-2 lg:col-start-2 col-start-1 col-end-3"
          iconPath="audit/audit-scenario-icon3.svg"
        >
          Проверить соответствие стандартам безопасности и требованиям отрасли
        </ContentCard>
        <ContentCard
          row="row-start-3"
          col="xl:col-start-4 lg:col-start-4 col-start-3 col-end-5"
          iconPath="audit/audit-scenario-icon4.svg"
        >
          Оптимизировать затраты на ит-инфраструктуру
        </ContentCard> */}
      </Section>
    </div>
  );
};

export default Cases;
