const SwitchButton = ({ selected, onClick, children }) => {
  return (
    <div
      className={`${
        !selected
          ? `bg-gray-300 hover:bg-gray-250 cursor-pointer`
          : `bg-f1-light`
      } px-15 py-15 rounded-[5px] justify-center items-center inline-flex transition`}
      onClick={onClick}
    >
      <p
        className={`${
          !selected ? `text-gray-100` : `text-gray-400`
        } text-sm font-bold font-expanded leading-none select-none`}
      >
        {children}
      </p>
    </div>
  );
};

export default SwitchButton;
