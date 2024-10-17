import { useContext } from "react";

import ArrowURSecondary from "../misc/svg/ArrowURSecondary";
import Tag from "../misc/Tag";

import { ThemeContext } from "../../store/theme-context";

const CaseCard = ({
  row = "",
  col = "",
  tags = [],
  logoPath,
  className = "",
  maxLgHidden = false,
  currentLocation = "",
  hoverDisabled = false,
  customBgColor = "",
  children,
}) => {
  const { bgColor } = useContext(ThemeContext);

  return (
    <div
      className={`${row} ${col} ${
        maxLgHidden ? `max-lg:hidden` : ``
      } group bg-gray-400`}
    >
      <div
        className={`${customBgColor ? customBgColor : bgColor} ${className} ${
          !hoverDisabled && `cursor-pointer`
        } h-full border-dashed sm:rounded-xl`}
      >
        <div
          className={`${
            !hoverDisabled &&
            `hover:sm:bg-striped hover:xl:pb-60 hover:sm:gap-40 hover:sm:pb-[45px]`
          } sm:group h-full xl:p-30 p-15 gap-60 flex flex-col max-sm:justify-between transition-all duration-300`}
        >
          {logoPath && (
            <div className="flex justify-between">
              <img src={`${logoPath}`} alt="" />
              <ArrowURSecondary className="py-5 group-hover:p-5 group-hover:self-start sm:opacity-0 group-hover:sm:p-0 group-hover:sm:opacity-100" />
            </div>
          )}
          <div
            className={`${
              !hoverDisabled && `group-hover:sm:gap-5`
            } gap-15 flex flex-col transition-all duration-300`}
          >
            <div className="sm:text-base text-gray-400 sm:font-light font-[350] font-text sm:leading-relaxed leading-tight">
              {children}
            </div>

            {tags.length != 0 && (
              <div className="flex flex-col gap-5">
                <p className="font-text font-normal text-sm leading-tight">
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
        </div>
      </div>
    </div>
  );
};

export default CaseCard;
