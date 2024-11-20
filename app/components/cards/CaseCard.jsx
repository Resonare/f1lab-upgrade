import { useContext } from "react";

import ArrowURSecondary from "../misc/svg/ArrowURSecondary";
import Tag from "../misc/Tag";

import { ThemeContext } from "../../store/theme-context";
import { LazyImage } from "../LazyImage";
import { NavLink } from "@remix-run/react";

const CaseCard = ({
  row = "",
  col = "",
  tags = [],
  caseDataId,
  logoPath,
  className = "",
  outerClassName = "",
  currentLocation = "",
  inverseColor = false,
  children,
}) => {
  const { bgColor } = useContext(ThemeContext);

  console.log(caseDataId);

  return (
    <div className={`${row} ${col} ${outerClassName} group bg-gray-400`}>
      <div
        className={`${inverseColor ? `bg-gray-400` : bgColor} ${className} ${
          inverseColor && `border-gray-300`
        } cursor-pointer h-full border-dashed sm:rounded-xl`}
      >
        <NavLink
          to={String(caseDataId)}
          className={`hover:sm:bg-striped hover:xl:pb-60 hover:sm:gap-40 hover:sm:pb-[45px] sm:group h-full xl:p-30 p-15 gap-60 flex flex-col max-sm:justify-between transition-all duration-300`}
        >
          {logoPath && (
            <div className="flex justify-between">
              <LazyImage
                className={inverseColor ? `invert` : ``}
                src={`${logoPath}`}
                alt=""
              />
              <ArrowURSecondary
                hoverColor={
                  inverseColor ? "stroke-gray-200" : "stroke-gray-400"
                }
                className="py-5 group-hover:p-5 group-hover:self-start sm:opacity-0 group-hover:sm:p-0 group-hover:sm:opacity-100"
              />
            </div>
          )}
          <div
            className={`group-hover:sm:gap-5 gap-15 flex flex-col transition-all duration-300`}
          >
            <div
              className={`${
                inverseColor ? `text-gray-100` : `text-gray-400`
              } sm:text-base sm:font-light font-[350] font-text sm:leading-relaxed leading-tight`}
            >
              {children}
            </div>

            {tags.length != 0 && (
              <div className="flex flex-col gap-5">
                <p
                  className={`${
                    inverseColor && `text-gray-100`
                  } font-text font-normal text-sm leading-tight`}
                >
                  Услуги в кейсе
                </p>
                <div className="flex flex-wrap gap-5">
                  {tags.map((tag) => (
                    <Tag
                      key={tag.id}
                      className={
                        tag.link === currentLocation ? "bg-f1-light" : bgColor
                      }
                    >
                      {tag.title}
                    </Tag>
                  ))}
                </div>
              </div>
            )}
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default CaseCard;
