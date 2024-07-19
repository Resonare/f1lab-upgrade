const Tag = ({ className, inverseColor = false, children }) => {
  return (
    <div className={`p-5 rounded-[5px] shadow ${className}`}>
      <p
        className={`${
          inverseColor ? "text-gray-100" : ""
        } font-normal font-text leading-tight text-sm`}
      >
        {children}
      </p>
    </div>
  );
};

export default Tag;
