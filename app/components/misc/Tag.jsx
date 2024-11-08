const Tag = ({ className = "", inverseColor = false, children }) => {
  return (
    <div
      className={`group p-5 rounded-[5px] shadow hover:text-gray-400 hover:bg-f1-light transition-all ${className}`}
    >
      <p
        className={`${
          inverseColor ? "text-gray-100" : ""
        } group-hover:text-gray-400 font-normal font-text leading-tight text-sm transition-all`}
      >
        {children}
      </p>
    </div>
  );
};

export default Tag;
