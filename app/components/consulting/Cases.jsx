import Section from "../../layout/Section";
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
          col="md:col-start-2 col-start-1 lg:col-end-5 md:col-end-4 col-end-5"
        >
          Примеры кейсов с аудитом
        </SectionTitle>

        <CaseCard
          row="row-start-2"
          col="col-start-1 lg:col-end-1 col-end-3"
          tags={tags}
          logoPath="lg-logo.svg"
          className="border-t-[1px] border-l-[1px]"
        >
          Сделали то и это, а еще вон то и это для компании “Samarga”, что
          привело к этому и позволило это
        </CaseCard>

        <CaseCard
          row="row-start-2"
          col="lg:col-start-2 col-start-3 lg:col-end-2 col-end-5"
          tags={tags}
          logoPath="xxi-logo.png"
          className="border-t-[1px] lg:border-l-[1px] border-x-[1px]"
        >
          Сделали то и это, а еще вон то и это для компании “Samarga”, что
          привело к этому и позволило это
        </CaseCard>

        <CaseCard
          row="lg:row-start-2 row-start-3"
          col="lg:col-start-3 col-start-1 lg:col-end-3 col-end-3"
          tags={tags}
          logoPath="dv-logo.png"
          className="border-t-[1px] lg:border-x-[1px] border-l-[1px]"
        >
          Сделали то и это, а еще вон то и это для компании “Samarga”, что
          привело к этому и позволило это
        </CaseCard>

        <CaseCard
          row="row-start-3"
          col="lg:col-start-1 col-start-3 lg:col-end-1 col-end-5"
          tags={tags}
          logoPath="sunlight-logo.svg"
          className="border-t-[1px] lg:border-l-[1px] border-x-[1px]"
        >
          Сделали то и это, а еще вон то и это для компании “Samarga”, что
          привело к этому и позволило это
        </CaseCard>

        <CaseCard
          row="row-start-3"
          col="col-start-2"
          tags={tags}
          logoPath="onduline-logo.svg"
          className="max-lg:hidden border-y-[1px] border-l-[1px]"
          maxLgHidden={true}
        >
          Сделали то и это, а еще вон то и это для компании “Samarga”, что
          привело к этому и позволило это
        </CaseCard>

        <CaseCard
          row="row-start-3"
          col="col-start-3"
          tags={tags}
          logoPath="rusapai-logo.png"
          className="border-y-[1px] border-x-[1px]"
          maxLgHidden={true}
        >
          Сделали то и это, а еще вон то и это для компании “Samarga”, что
          привело к этому и позволило это
        </CaseCard>

        <ReviewCard
          row="row-start-2 row-end-4"
          col="col-start-4 col-end-4"
          reviewPaths={[
            "test-review.png",
            "test-review.png",
            "test-review.png",
            "test-review.png",
            "test-review.png",
            "test-review.png",
            "test-review.png",
          ]}
          className="max-lg:hidden"
        ></ReviewCard>

        <ReviewCard
          row="row-start-5"
          col="col-start-1 col-end-5"
          reviewPaths={[
            "test-review.png",
            "test-review.png",
            "test-review.png",
            "test-review.png",
            "test-review.png",
            "test-review.png",
            "test-review.png",
          ]}
          reviewsOnPage={2}
          className="lg:hidden"
        ></ReviewCard>

        <SecondaryButton
          row="row-start-4"
          col="col-start-1 max-lg:col-end-5"
          variant="shaded"
        >
          <p className="text-gray-400 text-base font-subtitle">Все кейсы</p>
        </SecondaryButton>
      </Section>
    </div>
  );
};

export default Cases;
