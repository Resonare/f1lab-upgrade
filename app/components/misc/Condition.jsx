const Condition = ({className, icon, children }) => {
  return (
    <div className="flex gap-10">
      <img src={`/images/icons/${icon}`} alt="" />
      <p className={className}>{children}</p>
    </div>
  );
};

export default Condition;
