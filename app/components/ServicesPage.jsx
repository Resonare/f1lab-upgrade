import { useRef } from "react";

import BackgroundGrid from "./BackgroundGrid";
import Scenarios from "./consulting/Scenarios";
import Offers from "./consulting/Offers";
import Hero from "./consulting/Hero";

const ServicesPage = () => {
  const bgOwnerRef = useRef();

  return (
    <>
      <BackgroundGrid bgOwnerRef={bgOwnerRef} />
      <div className="" ref={bgOwnerRef}>
        <div className="text-5xl font-title p-5">Услуги</div>
        <Hero />
        <Scenarios />
        <Offers />
      </div>
    </>
  );
};

export default ServicesPage;
