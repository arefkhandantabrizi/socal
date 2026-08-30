"use client";
import Link from "next/link";
import { Cancel, Menu } from "./icons";
import useMobileNav from "@/hooks/common/useMobileNav";
import useMobileNavAnimation from "@/hooks/common/useMobileNavAnimation";
import { menuItems } from "@/data/common/menuItems";

const MobileNav = () => {
  const { toggle, isOpen } = useMobileNav();
  const { shouldRender, overlayRef, closeButtonRef, setItemRef } =
    useMobileNavAnimation(isOpen);

  return (
    <nav className="mobilenav">
      {!shouldRender ? (
        <ul className="mobilenav__items">
          <li className="mobilenav__item" onClick={toggle}>
            <Menu className="mobilenav__icon" />
          </li>
          <li className="mobilenav__item">
            <Link href="/" className="mobilenav__item--link">
              SOCAL POWER GRID
            </Link>
          </li>
        </ul>
      ) : (
        <div ref={overlayRef} className="mobilenav__toggled">
          <div
            ref={closeButtonRef}
            className="mobilenav__close"
            onClick={toggle}
            aria-label="Close menu"
          >
            <Cancel className="mobilenav__toggled--icon" />
          </div>
          <ul className="mobilenav__items--toggled">
            {menuItems.map((menu, i) => {
              return (
                <li
                  key={menu.slug}
                  ref={setItemRef(i)}
                  className="mobilenav__item"
                  onClick={toggle}
                >
                  <Link href={menu.slug} className="mobilenav__item--link">
                    {menu.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MobileNav;
