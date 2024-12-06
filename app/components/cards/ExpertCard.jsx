import { useContext } from "react";

import { LazyImage } from "../LazyImage";
import TagContainer from "../misc/TagContainer";

import { ThemeContext } from "../../store/theme-context";

const ExpertCard = ({
  expertData,
  inverseColor = false,
  minimized = false,
  col = "",
  row = "",
  style,
  className = "",
}) => {
  if (!expertData) return;

  const { bgColor } = useContext(ThemeContext);

  return (
    <div
      className={`${className} ${col} ${row} ${
        inverseColor
          ? `max-sm:bg-gray-400 border-gray-300`
          : `max-sm:${bgColor}`
      } border-dashed sm:p-30 p-10 flex flex-col gap-30`}
      style={style}
    >
      <div className="flex flex-col gap-30">
        <LazyImage
          className="w-full sm:h-[345px] aspect-square rounded-[30px] object-cover"
          src={expertData.avatarPath}
          alt=""
        />
        <div className="flex flex-col gap-5">
          <p
            className={`${
              inverseColor ? `text-gray-100` : `text-gray-400`
            } text-[22px] font-extended font-bold`}
          >
            {expertData.name}
          </p>
          <p
            className={`${
              inverseColor ? `text-gray-200` : `text-gray-300`
            } text-sm font-text font-bold uppercase tracking-wide`}
          >
            {expertData.subtitle}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-15">
        <p className={`${minimized && `hidden`}`}>{expertData.description}</p>
        <TagContainer title="Эксперт в услугах" inverseColor={inverseColor}>
          {expertData.qualificationTags}
        </TagContainer>
      </div>
    </div>
  );
};

export default ExpertCard;
