import { colors } from "../../../tailwind.config";

const ArrowTertiary = ({ color }) => {
  const colorMatch = colors;

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
