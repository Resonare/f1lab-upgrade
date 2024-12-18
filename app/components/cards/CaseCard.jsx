import { useContext } from "react";

import ArrowURSecondary from "../misc/svg/ArrowURSecondary";
import TagContainer from "../../components/misc/TagContainer";

import { ThemeContext } from "../../store/theme-context";
import { LazyImage } from "../LazyImage";
import { NavLink } from "@remix-run/react";

const CaseCard = ({
  row = "",
  col = "",
  caseData,
  className = "",
  outerClassName = "",
  inverseColor = false,
}) => {
  const { bgColor } = useContext(ThemeContext);

  if (!caseData) return;

  return (
    <div className={`${row} ${col} ${outerClassName} group bg-gray-400`}>
      <div
        className={`${inverseColor ? `bg-gray-400` : bgColor} ${className} ${
          inverseColor && `border-gray-300`
        } cursor-pointer h-full border-dashed sm:rounded-xl`}
      >
        <NavLink
          to={String(caseData.id)}
          className={`hover:sm:striped hover:xl:pb-[40px] hover:sm:pb-[40px] gap-60 hover:sm:gap-[55px] sm:group h-full xl:p-30 p-15 flex flex-col transition-all duration-300`}
        >
          {caseData.client.logoPath && (
            <div className="flex justify-between">
              <LazyImage
                className={inverseColor ? `invert` : ``}
                src={`${caseData.client.logoPath}`}
                alt=""
              />
              <ArrowURSecondary
                className={`${
                  inverseColor ? `stroke-gray-200` : `stroke-gray-400`
                } py-5 group-hover:p-5 group-hover:self-start sm:opacity-0 group-hover:sm:p-0 group-hover:sm:opacity-100`}
              />
            </div>
          )}
          <div
            className={`group-hover:sm:gap-10 gap-15 flex flex-col transition-all duration-300`}
          >
            <div
              className={`${
                inverseColor ? `text-gray-100` : `text-gray-400`
              } sm:text-base sm:font-light font-[350] font-text sm:leading-relaxed leading-tight`}
            >
              {caseData.description}
            </div>

            <TagContainer title="Услуги в кейсе" inverseColor={inverseColor}>
              {caseData?.services.map((service) => service.tag)}
            </TagContainer>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default CaseCard;
