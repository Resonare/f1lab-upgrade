import { useState } from "react";

const ShoppingCart = () => {
  const [dummyNumber, setDummyNumber] = useState(0);

  const dummyNumberHandler = () => {
    setDummyNumber((prev) => prev + 1);
  };
  return (
    <div className="border-dashed border-r border-l border-gray-200 h-[100%] grid shrink-0 hover:bg-f1-light">
      <button
        className="place-self-center px-20 lg:px-30"
        onClick={dummyNumberHandler}
      >
        <img src="/images/shopping-cart.svg" alt="" />
      </button>
      <div className="min-w-20 h-20 lg:min-w-[25px] lg:h-[25px] absolute place-self-end self-start border-dashed border-b border-l border-gray-200 flex justify-center items-center ">
        <div className="font-title text-gray-400 text-[0.7rem]">
          {dummyNumber}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
