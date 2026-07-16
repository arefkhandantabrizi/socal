import Link from "next/link";
import { Menu } from "./icons";

const MobileNav = () => {
  return (
    <nav className="mobilenav">
      <ul className="mobilenav__items">
        <li className="mobilenav__item">
          <Menu className="mobilenav__icon" />
        </li>
        <li className="mobilenav__item">
          <Link href="/" className="mobilenav__item--link">
            SOCAL POWER GRID
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
