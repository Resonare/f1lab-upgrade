const SwitchButton = ({
  className,
  selected,
  selectedColor = "bg-f1-light",
  textColor = "text-gray-100",
  onClick,
  children,
}) => {
  return (
    <div
      className={`${className} ${
        !selected
          ? `bg-gray-300 hover:bg-gray-250 cursor-pointer`
          : selectedColor
      } px-15 py-15 sm:rounded-[5px] rounded-[10px] items-center flex transition`}
      onClick={onClick}
    >
      <p
        className={`${
          !selected ? textColor : `text-gray-400`
        } text-nowrap text-sm font-bold font-expanded leading-none select-none`}
      >
        {children}
      </p>
    </div>
  );
};

export default SwitchButton;
