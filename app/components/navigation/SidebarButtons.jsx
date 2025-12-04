import PropTypes from "prop-types";
import { Link } from "@remix-run/react";

import { ThemeContext } from "../../store/theme-context";
import { useContext } from "react";

const SidebarWhyButton = ({ inverseColor = false }) => {
  const { bgColor } = useContext(ThemeContext);

  const sideButtons = [
    { text: "Зачем?", to: "#scenarios" },
    { text: "Как?", to: "#offers" },
    { text: "Примеры", to: "#cases" },
    { text: "Сколько?", to: "#prices" },
  ];

  const handleScroll = (elementId) => {
    let scrollMargin = window.matchMedia("(max-width: 1300px)").matches
      ? 70
      : 90;

    let elementPosition = document
      .querySelector(elementId)
      .getBoundingClientRect();

    window.scrollTo(
      elementPosition.left,
      elementPosition.top + window.scrollY - scrollMargin
    );
  };

  return (
    <div className={`border-gray-200 max-sm:hidden 2xl:border-l border-dashed fixed top-[70px] z-[9] lg:top-90 max-lg:right-0 grid lg:justify-items-start justify-items-end`}>
      {sideButtons.map((button) => (
        <div
          key={button.text}
          className="grid lg:justify-items-start justify-items-end text-center"
        >
          <div
            className={`${inverseColor ? "bg-gray-400 border-gray-300 text-gray-100 hover:bg-gray-300 hover:text-gray-200" : `${bgColor} text-gray-400 hover:bg-gray-400 hover:text-gray-100`}   select-none cursor-pointer left-0 top-90 p-10 lg:rotate-0 rotate-180 border-r lg:border-b max-lg:border-t  border-dashed font-subtitle transition-colors ease-in-out duration-600`}
            style={{ writingMode: "vertical-rl" }}
            onClick={() => {
              handleScroll(button.to);
            }}
          >
            {button.text}
          </div>
        </div>
      ))}
    </div>
  );
};

SidebarWhyButton.propTypes = {
  background: PropTypes.string,
};

export default SidebarWhyButton;
