import { colors } from "../../../tailwind.config";

const ArrowBack = ({ color }) => {
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
          d="M18.2295 9.95557L1.31973 9.95547"
          stroke={colorMatch[color] || colorMatch.gray["400"]}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M9.78516 1.51465L1.29992 9.99988L9.7852 18.4852"
          stroke={colorMatch[color] || colorMatch.gray["400"]}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};

export default ArrowBack;
