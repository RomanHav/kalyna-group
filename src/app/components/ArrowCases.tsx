import React from 'react';
interface ArrowCasesProps {
  expanded?: boolean;
  className?: string;
}
const ArrowCases: React.FC<ArrowCasesProps> = ({ className }) => {
  return (
    <div
      className={`py-1 px-4 border border-white rounded-full ${className} md:py-2 md:px-[15px] rotate-90`}
    >
      <svg
        width="26"
        height="38"
        viewBox="0 0 26 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-4 md:w-auto `}
      >
        <path
          d="M1 13.1951C7.73781 13.1951 13.1951 7.73781 13.1951 1"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.1953 1C13.1953 7.73781 18.6526 13.1951 25.3904 13.1951"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.1953 36.6707V1"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default ArrowCases;
