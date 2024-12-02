import { LazyImage } from "../LazyImage";

const CritiqueCard = ({
  row = "",
  col = "",
  avatarPath,
  title,
  subtitle,
  className = "",
  children,
}) => {
  const quoteSvgEl = (
    <svg
      width="24"
      height="17"
      viewBox="0 0 24 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.768 0.891671V16.2357H0.304V10.6917L5.68 0.891671H9.768ZM23.544 0.891671V16.2357H14.08V10.6917L19.4 0.891671H23.544Z"
        fill="#22282E"
      />
    </svg>
  );

  return (
    <div className={`${row} ${col}`}>
      <div
        className={`${className} gap-15 p-30 flex flex-col border-dashed border-gray-200`}
      >
        <div className="flex gap-30">
          <LazyImage className="lg:w-90 w-60 lg:h-90 h-60 rounded-[15px]" src={avatarPath} alt="" />
          <div className="flex flex-col justify-center gap-5">
            <p className="text-gray-400 text-[22px] font-extended font-bold">
              {title}
            </p>
            <p className="text-gray-300 text-sm font-text font-bold uppercase tracking-wide">
              {subtitle}
            </p>
          </div>
        </div>
        <div className="flex gap-10">
          <div>{quoteSvgEl}</div>

          <p className="sm:text-xl text-base text-gray-400 font-text font-light">
            {children}
          </p>

          <div className="flex flex-col justify-end">{quoteSvgEl}</div>
        </div>
      </div>
    </div>
  );
};

export default CritiqueCard;
