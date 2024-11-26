import { useState } from "react";
import { useLoaderData } from "@remix-run/react";
import PropTypes from "prop-types";

const ImagePicker = ({ mobile, value, onSelect }) => {
  const { desktopIcons, mobileIcons } = useLoaderData();
  const icons = mobile ? mobileIcons : desktopIcons;

  const [selectedImage, setSelectedImage] = useState(
    value ? value.split("/")[value.split("/").length - 1] : null
  );

  const handleImageSelect = (imagePath) => {
    setSelectedImage(imagePath);
    onSelect(`/images/icon-pack/${imagePath}`);
  };

  return (
    <div className="w-full py-10">
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-5">
        {icons.map((imagePath, index) => (
          <button
            key={index}
            onClick={(event) => {
              event.preventDefault();
              handleImageSelect(imagePath);
            }}
            className={`
              relative aspect-square cursor-pointer rounded-lg p-2 w-60
              border-2 transition-all duration-200 ease-in-out
              hover:scale-105 hover:shadow-md
              ${
                selectedImage === imagePath
                  ? "border-gray-400 border-4"
                  : "border-gray-200 bg-white"
              }
            `}
          >
            <img
              src={`/images/icon-pack/${imagePath}`}
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
  mobile: PropTypes.bool,
  value: PropTypes.string,
  onSelect: PropTypes.func,
};

export default ImagePicker;
