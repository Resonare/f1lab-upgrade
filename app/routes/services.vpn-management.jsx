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
    <div>
      <Error />
    </div>
  );
}