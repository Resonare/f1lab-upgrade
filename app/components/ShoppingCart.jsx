import { useState } from 'react';

const ShoppingCart = () => {
  const [dummyNumber, setDummyNumber] = useState(0);

  const dummyNumberHandler = () => {
    setDummyNumber((prev) => prev + 1);
  };
  return (
    <div className='border-dashed border-r border-l border-grey h-[100%] grid'>
      <div className='place-self-center px-[30px]' onClick={dummyNumberHandler}>
        <img src='/images/shopping-cart.svg' />
      </div>
      <div className='min-w-5 h-5 absolute place-self-end self-start border-dashed border-b border-l border-grey flex justify-center items-center '>
        <div className='font-title text-sm'>{dummyNumber}</div>
      </div>
    </div>
  );
};

export default ShoppingCart;
