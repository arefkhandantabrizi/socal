import IMenuItem from "@/interfaces/common/menuItem";

export const menuItems: IMenuItem[] = [
  { text: "COMPUTER", slug: "/computer", department: true },
  { text: "POWER", slug: "/power", department: true },
  { text: "CALIBRATION", slug: "/calibration", department: true },
  { text: "ABOUT US", slug: "/about-us", department: false },
];

export const legalItems: IMenuItem[] = [
  { text: "TERMS OF SERVICES", slug: "/terms-of-services", department: false },
  { text: "PRIVACY POLICY", slug: "/privacy-policy", department: false },
];
