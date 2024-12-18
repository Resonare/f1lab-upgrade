const BlurCurtain = ({ className, children }) => {
  return (
    <div className={`${className} overflow-x-hidden fixed h-full w-full duration-300 backdrop-blur-md z-40`}>
      {children}
    </div>
  );
};

export default BlurCurtain;
