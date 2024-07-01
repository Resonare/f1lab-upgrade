import { useRef } from "react";

import ContentCard from "./ContentCard";
import PrimaryButton from "./PrimaryButton";
import BackgroundGrid from "./BackgroundGrid";

const Section = ({
  sectionTitle,
  cardsData,
  inverseColor = false,
  titleShifted = false,
}) => {
  const bgOwnerRef = useRef();

  return (
    <>
      {inverseColor ? (
        <BackgroundGrid bgOwnerRef={bgOwnerRef} inverseColor={inverseColor} />
      ) : null}
      <div className={`p-[120px] flex flex-col gap-[100px]`} ref={bgOwnerRef}>
        <p
          className={`${
            inverseColor ? "text-f1-light" : "text-gray-400"
          } font-bold text-[40px] font-subtitle ${
            titleShifted ? "ml-[21.4vw]" : ""
          }`}
        >
          {sectionTitle}
        </p>
        <div
          className={`grid grid-cols-4 grid-rows-${Math.ceil(
            cardsData[Object.keys(cardsData)[Object.keys(cardsData).length - 1]]
              .position / 4
          )}`}
        >
          {cardsData.map((card, index) =>
            card.button ? (
              <PrimaryButton key={index} cardData={card}>{card.text}</PrimaryButton>
            ) : (
              <ContentCard key={index} cardData={card} inverseColor={inverseColor} />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Section;
