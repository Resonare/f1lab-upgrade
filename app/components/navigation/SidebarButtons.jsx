import PropTypes from "prop-types";
import { Link } from "@remix-run/react";

const SidebarWhyButton = ({ background }) => {
  const sideButtons = [
    { text: "Зачем?", to: "#why" },
    { text: "Как?", to: "#how" },
    { text: "Примеры", to: "#examples" },
    { text: "Сколько?", to: "#how-much" },
  ];

  return (
    <>
      {sideButtons.map((button) => (
        <Link
          key={button.text}
          to={button.to}
          className="lg:justify-items-start justify-items-end"
        >
          <div
            style={{ writingMode: "vertical-rl" }}
            className={`left-0 top-90 z-40 p-10 lg:rotate-0 rotate-180 border-r border-b border-dashed justify-center items-center ${background} font-subtitle text-gray-400 transition ease-in-out hover:bg-gray-400 hover:text-gray-100 duration-150`}
          >
            {button.text}
          </div>
        </Link>
      ))}
    </>
  );
};

SidebarWhyButton.propTypes = {
  background: PropTypes.string,
};

export default SidebarWhyButton;
