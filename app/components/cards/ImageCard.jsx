const ImageCard = ({ row = "", col = "", imagePath, className }) => {
  return (
    <div className={`${row} ${col} ${className} p-10 border-dashed`}>
      <img src={`/images/${imagePath}`} alt="" />
    </div>
  );
};

export default ImageCard;
