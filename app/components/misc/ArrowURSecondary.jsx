const ArrowURSecondary = ({ className }) => {
  return (
    <span
      className={`p-[14px] group-hover:p-5 group-hover:self-start transition-all duration-300 ${className}`}
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.3516 1.4397L1.35156 13.3535"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M1.35156 1.4397H13.3515V13.4397"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};

export default ArrowURSecondary;
