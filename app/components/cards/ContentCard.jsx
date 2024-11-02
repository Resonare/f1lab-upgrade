import { LazyImage } from "../LazyImage";

const ContentCard = ({
  row,
  col,
  bg,
  iconPath,
  inverseColor = false,
  notInGrid = false,
  hideIconOnMobile = true,
  className = "",
  children,
}) => {
  return (
    <div
      className={`${row} ${col} ${bg && bg} ${
        inverseColor && `border-gray-300 bg-gray-400`
      } ${iconPath ? `sm:min-h-[280px] sm:justify-start` : `justify-center`} ${
        !notInGrid && `sm:mx-[1.2px]`
      } xl:p-30 p-15 mt-[-1px] border-dashed flex flex-col sm:gap-60 gap-40 ${className}`}
    >
      {iconPath ? (
        <div className={`${hideIconOnMobile && `max-sm:hidden`}`}>
          <LazyImage src={`/images/${iconPath}`} alt="" />
        </div>
      ) : null}
      <div
        className={`${
          inverseColor ? `text-gray-100` : `text-gray-400`
        } sm:text-xl text-[16px] sm:font-light font-text sm:leading-relaxed leading-tight`}
      >
        {children}
      </div>
    </div>
  );
};

export default ContentCard;
