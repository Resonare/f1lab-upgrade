import PrimaryButton from "../../components/buttons/PrimaryButton";
import Section from "../../layout/Section";
import SectionTitle from "../../layout/SectionTitle";
import ExpertCard from "../../components/cards/ExpertCard";

const DUMMY_TAGS_DATA = [
  { id: 1, title: "ИТ-Аудит", color: "consulting" },
  { id: 2, title: "Техподдержка", color: "consulting" },
];

const DUMMY_EXPERTS_DATA = [
  {
    avatarPath: "/images/avatars/experts/test-avatar.jpg",
    name: "Мария Ивановна",
    subtitle: "Специалист по всем направлениям",
    description:
      "Провели комплексную проверку текущих процессов F1 Lab и систем, выявили проблемные зоны и возможности F1 LAB для оптимизации.",
    qualificationTags: DUMMY_TAGS_DATA,
  },
  {
    avatarPath: "/images/avatars/experts/test-avatar.jpg",
    name: "Мария Ивановна",
    subtitle: "Специалист по всем направлениям",
    description:
      "Провели комплексную проверку текущих процессов F1 Lab и систем, выявили проблемные зоны и возможности F1 LAB для оптимизации.",
    qualificationTags: DUMMY_TAGS_DATA,
  },
  {
    avatarPath: "/images/avatars/experts/test-avatar.jpg",
    name: "Мария Ивановна",
    subtitle: "Специалист по всем направлениям",
    description:
      "Провели комплексную проверку текущих процессов F1 Lab и систем, выявили проблемные зоны и возможности F1 LAB для оптимизации.",
    qualificationTags: DUMMY_TAGS_DATA,
  },
  {
    avatarPath: "/images/avatars/experts/test-avatar.jpg",
    name: "Мария Ивановна",
    subtitle: "Специалист по всем направлениям",
    description:
      "Провели комплексную проверку текущих процессов F1 Lab и систем, выявили проблемные зоны и возможности F1 LAB для оптимизации.",
    qualificationTags: DUMMY_TAGS_DATA,
  },
  {
    avatarPath: "/images/avatars/experts/test-avatar.jpg",
    name: "Мария Ивановна",
    subtitle: "Специалист по всем направлениям",
    description:
      "Провели комплексную проверку текущих процессов F1 Lab и систем, выявили проблемные зоны и возможности F1 LAB для оптимизации.",
    qualificationTags: DUMMY_TAGS_DATA,
  },
  {
    avatarPath: "/images/avatars/experts/test-avatar.jpg",
    name: "Мария Ивановна",
    subtitle: "Специалист по всем направлениям",
    description:
      "Провели комплексную проверку текущих процессов F1 Lab и систем, выявили проблемные зоны и возможности F1 LAB для оптимизации.",
    qualificationTags: DUMMY_TAGS_DATA,
  },
];

const Experts = () => {
  return (
    <Section className="pb-200" hero={true}>
      <SectionTitle
        row="row-start-1"
        col="col-start-1 col-end-5 border-b border-dashed"
      >
        Команда F1 Lab
      </SectionTitle>

      {DUMMY_EXPERTS_DATA.map((expertData, index) => {
        const row = Math.floor(index / 2);
        const col = (index % 2) + (index % 2 != 0) + (row % 2 == 0) + 1;
        const smCol =
          Math.ceil(((index % 2) + (index % 2 != 0) + 1) / 2) +
          (index % 2 != 0);

        return (
          <>
            <ExpertCard
              key={index}
              className="border-b max-sm:ml-[1px]"
              col={`lg:col-start-${col} sm:col-start-${smCol} col-start-1 lg:col-end-${
                col + 1
              } sm:col-end-${smCol + 2} col-end-5`}
              row={`lg:row-start-${row + 2} sm:row-start-${index + 2}`}
              expertData={expertData}
            />
            <div
              className={`max-sm:hidden lg:row-start-${row + 2} sm:row-start-${
                index + 2
              } max-lg:col-span-2 border-b border-dashed border-gray-200`}
            ></div>
          </>
        );
      })}

      <PrimaryButton type="dark" col="col-start-1 md:col-end-3 col-end-5">
        Начать сотрудничество
      </PrimaryButton>
    </Section>
  );
};

export default Experts;
