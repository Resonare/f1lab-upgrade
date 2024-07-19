const Tag = ({ className, children }) => {
  return (
    <div className={`p-5 rounded-[5px]  ${className}`}>
      <p className="font-normal font-text leading-tight text-sm">{children}</p>
    </div>
  );
};

export default Tag;
