import { useState } from "react";
import { useLoaderData } from "@remix-run/react";
import PropTypes from "prop-types";

const ImagePicker = ({ path, mobile, value, onSelect }) => {
  const { desktopIcons, mobileIcons, logos } = useLoaderData();

  let images = [];

  if (logos) {
    images = logos;
  } else {
    images = mobile ? mobileIcons : desktopIcons;
  }

  const [selectedImage, setSelectedImage] = useState(
    value ? value.split("/")[value.split("/").length - 1] : null
  );

  const handleImageSelect = (imagePath) => {
    setSelectedImage(imagePath);
    onSelect(`${path}/${imagePath}`);
  };

  return (
    <div className="w-full py-10">
      <div className="inline-grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-15">
        {images.map((imagePath, index) => (
          <button
            key={index}
            onClick={(event) => {
              event.preventDefault();
              handleImageSelect(imagePath);
            }}
            className={`
              cursor-pointer p-2 w-60
              transition-all duration-200 ease-in-out
              hover:scale-105 hover:shadow-md
              ${selectedImage === imagePath ? "border-gray-400 border-4" : ""}
            `}
          >
            <img
              src={`${path}/${imagePath}`}
              alt={`Service icon ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

ImagePicker.propTypes = {
  path: PropTypes.string,
  mobile: PropTypes.bool,
  value: PropTypes.string,
  onSelect: PropTypes.func,
};

export default ImagePicker;
