const ArrowTertiary = ({ color }) => {
  const colorMatch = {
    gray: {
      100: "#F1F1F1",
      200: "#BDBDBD",
      300: "#606467",
      400: "#22282E",
    },
    "f1-light": "#00FFC5",
    "f1-dark": "#01CA9A",
    cloud: "#D2F3F3",
    consulting: "#FEFFE0",
    security: "#FBE3FF",
    alert: "#F24055",
  };

  return (
    <span
      className={`p-10 group-hover:px-5 group-hover:self-start transition-all duration-300`}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.95996 9.95557L18.8697 9.95547"
          stroke={colorMatch[color] || colorMatch.gray["400"]}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M10.4043 1.51465L18.8895 9.99988L10.4042 18.4852"
          stroke={colorMatch[color] || colorMatch.gray["400"]}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};

export default ArrowTertiary;
