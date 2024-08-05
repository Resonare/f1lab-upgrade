import { useState } from "react";

const BurgerMenu = () => {
  const [image, setImage] = useState("images/burger-menu.svg");

  const imageChangeHandler = () => {
    image === "images/burger-menu.svg"
      ? setImage("images/burger-menu-close.svg")
      : setImage("images/burger-menu.svg");
  };
  return (
    <button
      className="border-dashed border-r hover:bg-f1-light border-gray-200 h-[100%] hidden max-lg:flex lg:hidden shrink-0 items-center"
      onClick={imageChangeHandler}
    >
      <div className="px-[30px]">
        <img src={image} alt="" />
      </div>
    </button>
  );
};

export default BurgerMenu;
