import { useState } from "react";
import ServicesNavigationItem from "./ServicesNavigationItem";

const ServicesNavigation = ({ showMenu, items }) => {
  const [currentState, setCurrentState] = useState("consulting");

  return (
    <div
      className={
        showMenu ? "fixed start-0 top-90 w-full  bg-gray-400" : " hidden"
      }
    >
      <div className={"flex font-subtitle text-sm"}>
        <div className="h-[435px] w-[740px] pt-30 pl-120">
          <div
            className={`bg-${
              currentState === "consulting" ? "consulting" : "gray-400"
            }`}
          >
            <div className={`h-30 rounded-br-3xl bg-gray-400`}></div>
          </div>
          <ul>
            {items.map((item) => (
              <ServicesNavigationItem
                key={item.link}
                item={item}
                currentState={currentState}
                setCurrentState={setCurrentState}
              />
            ))}
          </ul>
        </div>
        <div className={`w-full bg-${currentState}`}></div>
      </div>
    </div>
  );
};

export default ServicesNavigation;
