import IMenuItem from "@/interfaces/common/menuItem";

const menuItems: IMenuItem[] = [
  { text: "COMPUTER", slug: "/computer", department: true },
  { text: "POWER", slug: "/power", department: true },
  { text: "CALIBRATION", slug: "/calibration", department: true },
  { text: "ABOUT US", slug: "/about-us", department: false },
];

export default menuItems;
