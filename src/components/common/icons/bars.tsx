import IIcons from "@/interfaces/common/icons";

export const Bars = ({ className }: IIcons) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      viewBox="0 0 32 32"
    >
      <path d="M24 0h8v32h-8zM12 8h8v24h-8zM0 16h8v16h-8z"></path>
    </svg>
  );
};

export default Bars;
