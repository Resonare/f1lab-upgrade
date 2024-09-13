const BlurCurtain = ({ className, children }) => {
  return (
    <div className={`${className} fixed h-full w-full transition-all duration-300 backdrop-blur-md z-40`}>
      {children}
    </div>
  );
};

export default BlurCurtain;
