import { LazyImage } from "../LazyImage";

const Condition = ({
  outerClassName = "",
  className = "",
  icon,
  iconClassName = "",
  onClick,
  onMouseEnter,
  onMouseLeave,
  children,
}) => {
  return (
    <div
      className={`${outerClassName} flex gap-10 justify-start`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <LazyImage
        className={`w-20 ${iconClassName}`}
        src={`/images/icons/${icon}`}
        alt=""
        draggable={false}
      />
      <p className={className}>{children}</p>
    </div>
  );
};

export default Condition;
