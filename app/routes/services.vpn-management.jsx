import Error from "../pages/in-development-alert/Error";

export const meta = () => {
  return [
    { title: "F1Lab | VPN-management" },
    {
      name: "VPN-management",
      content: "VPN-management",
    },
  ];
};

export default function ITAudit() {
  return (
    <div className="2xl:border-x border-gray-200 border-dashed flex flex-col lg:gap-200 sm:gap-[82px] lg:pt-90 pt-[70px]">
      <Error />
    </div>
  );
}