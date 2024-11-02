import { LazyImage } from "../LazyImage";

const Condition = ({ className = "", icon, iconClassName = "", children }) => {
  return (
    <div className="flex gap-10 justify-start">
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
