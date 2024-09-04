import { useState } from "react";

const ShoppingCart = ({ className = "", addHandler }) => {
  //ShoppingCart works in two modes: as add product button or as indication of already added products
  //If it has addHandler it will work as add product button

  const [dummyNumber, setDummyNumber] = useState(0);

  const dummyNumberHandler = () => {
    setDummyNumber((prev) => prev + 1);
  };

  return (
    <div
      className={`${className} relative border-dashed border-gray-200 h-full grid hover:bg-f1-light cursor-pointer transition-all select-none`}
      onClick={addHandler ? addHandler : dummyNumberHandler}
    >
      <button className="place-self-center">
        <img
          className="max-sm:w-[24px]"
          src="/images/shopping-cart.svg"
          alt=""
        />
      </button>
      <div className="sm:min-w-20 sm:h-20 max-sm:p-5 absolute top-0 right-0 border-dashed border-b border-l border-gray-200 flex justify-center items-center ">
        <div className="font-title text-gray-400 text-[0.7rem]">
          {addHandler ? (
            <img className="w-[6px]" src="/images/icons/plus-icon.svg"></img>
          ) : (
            dummyNumber
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
