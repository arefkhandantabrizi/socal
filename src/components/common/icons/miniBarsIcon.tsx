import IIcons from "@/interfaces/common/icons";
import { useId } from "react";

export const MiniBarsIcon = ({ className }: IIcons) => {
  const gradientId = useId();

  return (
    <svg
      className={className}
      viewBox="0 0 52 98"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="0"
          x2="52"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#8DFFFF" />
          <stop offset="35%" stopColor="#5D9A9F" />
          <stop offset="70%" stopColor="#3E666D" />
          <stop offset="100%" stopColor="#263F46" />
        </linearGradient>
      </defs>

      <g fill={`url(#${gradientId})`}>
        <rect x="0" y="0" width="7" height="74" />
        <rect x="21" y="0" width="7" height="49" />
        <rect x="42" y="0" width="7" height="98" />
      </g>
    </svg>
  );
};

export default MiniBarsIcon;
