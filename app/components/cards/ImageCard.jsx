import { LazyImage } from "../LazyImage";

const ImageCard = ({
  row = "",
  col = "",
  imagePath,
  inverseColor = false,
  className,
}) => {
  return (
    <div
      className={`${row} ${col} ${
        inverseColor ? "border-gray-300" : ""
      } ${className} p-10 border-dashed flex`}
    >
      <LazyImage src={`/images/${imagePath}`} alt="" />
    </div>
  );
};

export default ImageCard;
