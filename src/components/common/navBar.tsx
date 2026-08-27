"use client";
import useNavigateTo from "@/hooks/common/useNavigate";
import Link from "next/link";

const NavBar = () => {
  const { handleNavigate } = useNavigateTo();

  return (
    <nav className="topnav">
      <ul className="topnav__items">
        <li className="topnav__brand">
          <Link href="/" className="topnav__brand-link">
            SOCAL POWER GRID
          </Link>
        </li>
        <li className="topnav__item topnav__contact">
          <button
            className="topnav__contact--btn"
            onClick={() => handleNavigate("/about-us#transmission")}
          >
            CONTACT US
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
