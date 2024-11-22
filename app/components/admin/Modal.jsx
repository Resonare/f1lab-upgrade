const AdminModal = ({ children, closeModal, title = "" }) => {
  return (
    <div className="overflow-y-scroll fixed inset-0 z-50 flex justify-center ">
      <div className="flex flex-col border border-dashed h-fit border-gray-200 bg-gray-100 z-50 w-screen m-120">
        <button onClick={closeModal} className="place-self-end m-10">
          Закрыть
        </button>
        <div className="items-center justify-center px-100 pt-60 pb-90">
          <div className="font-title text-5xl mb-40">{title}</div>
          {children}
        </div>
      </div>
      <button
        className={`fixed start-0 top-0 w-full h-full bg-gray-400 bg-opacity-80 cursor-default`}
        onClick={closeModal}
      ></button>
    </div>
  );
};

export default AdminModal;
