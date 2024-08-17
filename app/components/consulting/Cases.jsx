import Section from "../Section";
import SectionTitle from "../SectionTitle";
import CaseCard from "../cards/CaseCard";
import ReviewCard from "../cards/ReviewCard";
import Tag from "../misc/Tag";
import SecondaryButton from "../buttons/SecondaryButton";

const Cases = () => {
  //REDO NEEDED
  const tags = [
    <Tag key={1} className="bg-f1-light">
      It аудит
    </Tag>,
    <Tag key={2} className="bg-consulting">
      Обслуживание серверов
    </Tag>,
    <Tag key={3} className="bg-consulting">
      Гибернация данных
    </Tag>,
    <Tag key={4} className="bg-consulting">
      VOIP
    </Tag>,
    <Tag key={5} className="bg-consulting">
      Обслуживание сетевого оборудования
    </Tag>,
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
          className="border-t-[1px] border-l-[1px]"
        >
          Сделали то и это, а еще вон то и это для компании “Samarga”, что
          привело к этому и позволило это
        </CaseCard>

        <CaseCard
          row="row-start-2"
          col="col-start-2"
          tags={tags}
          logoPath="xxi_logo.png"
          className="border-t-[1px] border-l-[1px]"
        >
          Сделали то и это, а еще вон то и это для компании “Samarga”, что
          привело к этому и позволило это
        </CaseCard>

        <CaseCard
          row="row-start-2"
          col="col-start-3"
          tags={tags}
          logoPath="dv_logo.png"
          className="border-t-[1px] border-x-[1px]"
        >
          Сделали то и это, а еще вон то и это для компании “Samarga”, что
          привело к этому и позволило это
        </CaseCard>

        <CaseCard
          row="row-start-3"
          col="col-start-1"
          tags={tags}
          logoPath="sunlight_logo.svg"
          className="border-t-[1px] border-l-[1px]"
        >
          Сделали то и это, а еще вон то и это для компании “Samarga”, что
          привело к этому и позволило это
        </CaseCard>

        <CaseCard
          row="row-start-3"
          col="col-start-2"
          tags={tags}
          logoPath="onduline_logo.svg"
          className="border-y-[1px] border-l-[1px]"
        >
          Сделали то и это, а еще вон то и это для компании “Samarga”, что
          привело к этому и позволило это
        </CaseCard>

        <CaseCard
          row="row-start-3"
          col="col-start-3"
          tags={tags}
          logoPath="rusapai_logo.png"
          className="border-y-[1px] border-x-[1px]"
        >
          Сделали то и это, а еще вон то и это для компании “Samarga”, что
          привело к этому и позволило это
        </CaseCard>

        <ReviewCard
          row="row-start-2 row-end-4"
          col="col-start-4"
          reviewPaths={["test_review.png", "test_review.png"]}
        ></ReviewCard>

        <SecondaryButton row="row-start-4" col="col-start-1" variant="shaded">
          <p className="text-gray-400 text-base font-subtitle">Все кейсы</p>
        </SecondaryButton>
      </Section>
    </div>
  );
};

export default Cases;
