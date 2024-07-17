import { useState } from "react";

const ShoppingCart = () => {
  const [dummyNumber, setDummyNumber] = useState(0);

  const dummyNumberHandler = () => {
    setDummyNumber((prev) => prev + 1);
  };
  return (
    <div className="border-dashed border-r border-l border-gray-200 h-[100%] grid shrink-0">
      <button className="place-self-center px-30" onClick={dummyNumberHandler}>
        <img src="/images/shopping-cart.svg" alt="" />
      </button>
      <div className="min-w-[25px] h-[25px] absolute place-self-end self-start border-dashed border-b border-l border-gray-200 flex justify-center items-center ">
        <div className="font-title text-gray-400 text-sm">{dummyNumber}</div>
      </div>
    </div>
  );
};

export default ShoppingCart;
