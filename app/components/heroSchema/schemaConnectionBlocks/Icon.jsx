import { LazyImage } from "../../LazyImage";

const Icon = ({ name }) => {
  return (
    <div className="">
      <LazyImage src={`/images/schema-icons/${name}.svg`} alt="" />
    </div>
  );
};

export default Icon;
