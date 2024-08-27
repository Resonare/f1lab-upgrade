import PropTypes from "prop-types";
import { Link } from "@remix-run/react";

import { ThemeContext } from "../../store/theme-context";
import { useContext } from "react";

const SidebarWhyButton = () => {
  const { bgColor } = useContext(ThemeContext);

  const sideButtons = [
    { text: "Зачем?", to: "#why" },
    { text: "Как?", to: "#how" },
    { text: "Примеры", to: "#examples" },
    { text: "Сколько?", to: "#how-much" },
  ];

  return (
    <div className="fixed top-[70px] z-50 lg:top-90 max-lg:right-0 grid lg:justify-items-start justify-items-end">
      {sideButtons.map((button) => (
        <div
          key={button.text}
          className="grid lg:justify-items-start justify-items-end text-center"
        >
          <Link
            to={button.to}
            style={{ writingMode: "vertical-rl" }}
            className={`left-0 top-90 p-10 lg:rotate-0 rotate-180 border-r lg:border-b max-lg:border-t  border-dashed ${bgColor} font-subtitle text-gray-400 transition-colors ease-in-out hover:bg-gray-400 hover:text-gray-100 duration-600`}
          >
            {button.text}
          </Link>
        </div>
      ))}
    </div>
  );
};

SidebarWhyButton.propTypes = {
  background: PropTypes.string,
};

export default SidebarWhyButton;
