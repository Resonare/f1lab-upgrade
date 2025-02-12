import { LazyImage } from "../LazyImage";

const Condition = ({
  outerClassName = "",
  className = "",
  icon,
  iconClassName = "",
  onClick,
  children,
}) => {
  return (
    <div className={`${outerClassName} flex gap-10 justify-start`} onClick={onClick}>
      <LazyImage
        className={`w-20 ${iconClassName}`}
        src={`/images/icons/${icon}`}
        alt=""
      />
      <p className={className}>{children}</p>
    </div>
  );
};

export default Condition;
