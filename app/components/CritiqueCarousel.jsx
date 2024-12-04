import { useState, useContext } from "react";

import { ThemeContext } from "../../store/theme-context";

import { LazyImage } from "../LazyImage";
import SecondaryButton from "../buttons/SecondaryButton";
import ArrowPrev from "../misc/reviewButtons/ArrowPrev";
import ArrowNext from "../misc/reviewButtons/ArrowNext";
import Quote from "../misc/svg/Quote";

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

const CritiquesCarousel = ({
  critiquesData,
  row = "",
  col = "",
  minimized = false,
  inverseColor = false,
  className = "",
}) => {
  if (!critiquesData || critiquesData.length <= 0) return;

  const { bgColor } = useContext(ThemeContext);

  const [curPage, setCurPage] = useState(0);
  const pagesAmount = critiquesData.length;

  //Function makes counter equal to min if greater than max and equal to max if smaller than min
  const handleOverflow = (counter, min, max) =>
    counter > max ? min : counter < min ? max : counter;

  const handleNext = () => {
    setCurPage((prevPage) => handleOverflow(prevPage + 1, 0, pagesAmount - 1));
  };

  const handlePrev = () => {
    setCurPage((prevPage) => handleOverflow(prevPage - 1, 0, pagesAmount - 1));
  };

  const getPageIndicators = () => {
    const pageIndicators = [];

    for (let i = 0; i < pagesAmount; i++) {
      pageIndicators.push(
        <div
          key={i}
          className={`${
            i == curPage
              ? inverseColor
                ? `text-gray-100`
                : `text-gray-400`
              : inverseColor
              ? `text-gray-300`
              : `text-gray-200`
          } flex-1 flex justify-center max-w-[400px] text-[40px] transition-all duration-300 select-none`}
        >
          <p>•</p>
        </div>
      );
    }

    return pageIndicators;
  };

  return (
    <div
      className={`${row} ${col} ${className} ${
        inverseColor ? `border-gray-300` : `border-gray-200`
      } border-dashed max-lg:w-full`}
    >
      <div
        className={`${critiquesData.length != 1 && `border-b`} ${
          !minimized && `lg:border-l`
        } ${
          inverseColor ? `border-gray-300` : `border-gray-200`
        } border-dashed`}
      >
        <div className={`${minimized && `hidden`}`}>
          <p
            className={`${
              inverseColor && `text-gray-100`
            } pb-30 font-bold font-extended lg:text-[26px] sm:text-[22px] text-2xl max-sm:leading-[30px] lg:text-right max-sm:text-right`}
          >
            Что о нас говорят?
          </p>
          <SecondaryButton
            variant="shaded"
            className={`max-lg:hidden text-base font-subtitle`}
          >
            Все отзывы
          </SecondaryButton>
        </div>

        <div
          className={`${inverseColor ? `bg-gray-400` : bgColor} ${
            minimized ? `border-b` : `lg:border-b`
          } ${
            inverseColor ? `border-gray-300` : `border-gray-200`
          } max-lg:border-t gap-15 ml-[1px] max-sm:mr-[1px] sm:p-30 py-20 px-10 flex flex-col border-dashed`}
        >
          <ExpertCard
            key={index}
            className="border-b max-sm:ml-[1px]"
            col={`lg:col-start-${col} sm:col-start-${smCol} col-start-1 lg:col-end-${
              col + 1
            } sm:col-end-${smCol + 2} col-end-5`}
            row={`lg:row-start-${row + 2} sm:row-start-${index + 2}`}
            expertData={expertData}
          />
        </div>

        <SecondaryButton
          variant={inverseColor ? `info` : `shaded`}
          className={`${minimized ? `hidden` : `lg:hidden`} ${
            inverseColor && `max-sm:border border-gray-300 max-sm:text-gray-100`
          } text-base font-subtitle`}
        >
          Все отзывы
        </SecondaryButton>

        <div
          className={`${critiquesData.length == 1 && `hidden`} flex flex-col`}
        >
          <div className="w-full px-15 justify-between items-center inline-flex max-sm:order-last">
            {getPageIndicators()}
          </div>
          <div className={`flex max-sm:justify-between lg:gap-15 sm:gap-60`}>
            <ArrowNext
              className="p-15 lg:pl-40 pl-20 sm:hover:pl-15 sm:hover:pr-20 lg:hover:pr-40 sm:w-full w-1/3 max-sm:border-b max-sm:border-r border-dashed border-gray-300"
              inverseColor={inverseColor}
              onClick={handlePrev}
            />
            <ArrowPrev
              className="p-15 lg:pr-40 pr-20 sm:hover:pr-15 sm:hover:pl-20 lg:hover:pl-40 sm:w-full w-1/3 max-sm:border-b max-sm:border-l border-dashed border-gray-300"
              inverseColor={inverseColor}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CritiquesCarousel;
