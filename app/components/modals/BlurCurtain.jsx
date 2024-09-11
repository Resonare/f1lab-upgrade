const BlurCurtain = ({ children }) => {
  return (
    <div className="fixed h-full w-full  backdrop-blur-md z-40">
      {children}
    </div>
  );
};

export default BlurCurtain;
