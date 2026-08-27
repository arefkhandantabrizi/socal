import IIcons from "@/interfaces/common/icons";

export const Menu = ({ className }: IIcons) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      viewBox="0 0 32 32"
    >
      <path d="M2 6h28v6h-28zM2 14h28v6h-28zM2 22h28v6h-28z" />
    </svg>
  );
};

export default Menu;
