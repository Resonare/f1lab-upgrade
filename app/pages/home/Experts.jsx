import ExpertsCarousel from "../../layout/ExpertsCarousel";
import Section from "../../layout/Section";
import SectionTitle from "../../layout/SectionTitle";
import Carousel from "../../components/misc/Carousel";
import ExpertCard from "../../components/cards/ExpertCard";
import SecondaryButton from "../../components/buttons/SecondaryButton";

const DUMMY_TAGS_DATA = [
  { id: 1, title: "ИТ-Аудит", color: "consulting" },
  { id: 2, title: "Техподдержка", color: "consulting" },
];

const DUMMY_EXPERTS_DATA = [
  {
    avatarPath: "/images/avatars/experts/test-avatar.jpg",
    name: "Мария Ивановна 1",
    subtitle: "Специалист по всем направлениям",
    description:
      "Провели комплексную проверку текущих процессов F1 Lab и систем, выявили проблемные зоны и возможности F1 LAB для оптимизации.",
    qualificationTags: DUMMY_TAGS_DATA,
  },
  {
    avatarPath: "/images/avatars/experts/test-avatar.jpg",
    name: "Мария Ивановна 2",
    subtitle: "Специалист по всем направлениям",
    description:
      "Провели комплексную проверку текущих процессов F1 Lab и систем, выявили проблемные зоны и возможности F1 LAB для оптимизации.",
    qualificationTags: DUMMY_TAGS_DATA,
  },
  {
    avatarPath: "/images/avatars/experts/test-avatar.jpg",
    name: "Мария Ивановна 3",
    subtitle: "Специалист по всем направлениям",
    description:
      "Провели комплексную проверку текущих процессов F1 Lab и систем, выявили проблемные зоны и возможности F1 LAB для оптимизации.",
    qualificationTags: DUMMY_TAGS_DATA,
  },
  {
    avatarPath: "/images/avatars/experts/test-avatar.jpg",
    name: "Мария Ивановна 4",
    subtitle: "Специалист по всем направлениям",
    description:
      "Провели комплексную проверку текущих процессов F1 Lab и систем, выявили проблемные зоны и возможности F1 LAB для оптимизации.",
    qualificationTags: DUMMY_TAGS_DATA,
  },
  {
    avatarPath: "/images/avatars/experts/test-avatar.jpg",
    name: "Мария Ивановна 5",
    subtitle: "Специалист по всем направлениям",
    description:
      "Провели комплексную проверку текущих процессов F1 Lab и систем, выявили проблемные зоны и возможности F1 LAB для оптимизации.",
    qualificationTags: DUMMY_TAGS_DATA,
  },
  {
    avatarPath: "/images/avatars/experts/test-avatar.jpg",
    name: "Мария Ивановна 6",
    subtitle: "Специалист по всем направлениям",
    description:
      "Провели комплексную проверку текущих процессов F1 Lab и систем, выявили проблемные зоны и возможности F1 LAB для оптимизации.",
    qualificationTags: DUMMY_TAGS_DATA,
  },
];

const Experts = ({ expertsData }) => {
  expertsData = DUMMY_EXPERTS_DATA; // <-------------------------------DELETE

  return (
    <Section inverseColor={true}>
      <SectionTitle
        className="text-gray-100 text-center w-full"
        col="col-start-1 col-end-5"
      >
        <span className="text-f1-light">Давайте знакомиться:</span> команда
        профессионалов F1 Lab
      </SectionTitle>

      <ExpertsCarousel
        className="max-lg:hidden col-start-1 col-end-5"
        expertsData={expertsData}
        cardsOnPage={4}
      />

      <ExpertsCarousel
        className="lg:hidden max-sm:hidden col-start-1 col-end-5"
        expertsData={expertsData}
        cardsOnPage={2}
      />

      <Carousel
        inverseColor={true}
        className="mt-30 w-full col-start-1 col-end-5 sm:hidden overflow-hidden"
      >
        {expertsData.map((expertData, index) => (
          <ExpertCard
            key={index}
            expertData={expertData}
            inverseColor={true}
            minimized={true}
            className={`${index != expertsData.length - 1 && `border-r`}`}
          />
        ))}
      </Carousel>

      <SecondaryButton
        className="sm:hidden border col-start-1 col-end-5"
        variant="info"
      >
        Все сотрудники
      </SecondaryButton>
    </Section>
  );
};

export default Experts;
