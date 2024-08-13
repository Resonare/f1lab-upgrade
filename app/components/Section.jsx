import { useRef } from "react";

import BackgroundGrid from "./BackgroundGrid";

const Section = ({ rowsAmount = 1, inverseColor = false, children }) => {
  //Ref for BackgroundGrid
  const bgOwnerRef = useRef();

  return (
    <div className="relative">
      {inverseColor ? <BackgroundGrid inverseColor={inverseColor} /> : null}
      <div
        className={`grid grid-cols-4 grid-rows-${rowsAmount} py-120 xl:px-120 lg:px-60 px-[44.1px]`}
        ref={bgOwnerRef}
      >
        {children}
      </div>
    </div>
  );
};

export default Section;
