export default function GreenArrow({ title }) {
  return (
    <button className="flex items-center gap-2 text-sm text-redMain transition-all duration-200 hover:gap-4">
      <p className="whitespace-nowrap font-bold text-[16px] mdx:text-[18px]">{title}</p>
      <svg
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.46875 1.375L14.0937 7L8.46875 12.625M13.3125 7L1.90625 7"
          stroke="#E31E24"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
