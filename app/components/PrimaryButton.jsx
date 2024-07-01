import { useRef } from "react";

const PrimaryButton = ({ cardData, children }) => {
  //Rewrite via pure css
  const arrowContainerRef = useRef();

  const handleMouseEnter = () => {
    arrowContainerRef.current.style.padding = "0 0 16px 16px"; //hover:pt-0 hover:pr-0 hover:pl-[16px] hover:pb-[16px]
  };

  const handleMouseLeave = () => {
    arrowContainerRef.current.style.padding = "8px";
  };

  return (
    <button
      className="flex justify-between py-15 pl-30 pr-15 bg-gray-100 w-full text-gray-400 text-xl font-subtitle leading-normal transition-all duration-[400ms] hover:bg-f1-light"
      style={{
        "grid-column": `${(cardData.position % 4) + 1}`,
        "grid-row": `${Math.floor(cardData.position / 4) + 1}`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <div className="h-full p-[8px] transition-all duration-500" ref={arrowContainerRef}>
        <img
          className="h-full aspect-square"
          src="/images/arrow-icon-gray.svg"
          alt=""
        />
      </div>
    </button>
  );
};

export default PrimaryButton;
