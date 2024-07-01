import { useRef } from "react";

import BackgroundGrid from "./BackgroundGrid";
import Scenarios from "./Scenarios";
import Offers from "./Offers";

const ServicesPage = () => {
  const bgOwnerRef = useRef();

  return (
    <>
      <BackgroundGrid bgOwnerRef={bgOwnerRef} />
      <div className="" ref={bgOwnerRef}>
        <div className="text-5xl font-title p-5">Услуги</div>
        <Scenarios />
        <Offers />
      </div>
    </>
  );
};

export default ServicesPage;
