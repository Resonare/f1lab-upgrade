import PrimaryButton from "../buttons/PrimaryButton";

const PriceCard = ({ row, col, title, price, children }) => {
  return (
    <div
      className={`${row} ${col} xl:p-30 p-15 border-y border-dashed flex flex-col gap-60`}
    >
      <div className="flex flex-col gap-30">
        <div className="flex flex-col gap-15">
          <p className="font-subtitle text-gray-400 text-[26px] leading-[30px]">
            {title}
          </p>
          <p className="font-subtitle text-gray-400 text-[40px] leading-[44px]">
            {price}
          </p>
        </div>
        <div className="flex flex-col gap-30">{children}</div>
      </div>
      <PrimaryButton type="dark">
        Консультация
      </PrimaryButton>

      <div className="absolute top-0 right-0">{/* for cart */}</div>
    </div>
  );
};

export default PriceCard;
