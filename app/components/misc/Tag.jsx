const Tag = ({
  className = "",
  hoverable = true,
  inverseColor = false,
  children,
}) => {
  return (
    <div
      className={`${
        hoverable && `group hover:text-gray-400 hover:bg-f1-light cursor-pointer`
      } p-5 rounded-[5px] shadow transition-all ${className}`}
    >
      <p
        className={`${inverseColor && `text-gray-100`} ${
          hoverable && `group-hover:text-gray-400`
        } font-normal font-text leading-tight text-sm transition-all`}
      >
        {children}
      </p>
    </div>
  );
};

export default Tag;
