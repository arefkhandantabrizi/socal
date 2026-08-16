"use client";

import Link from "next/link";
import useTopNav from "@/hooks/common/useTopNav";
import useNavigateTo from "@/hooks/common/useNavigate";

const TopNav = () => {
  const {
    activeIndex,
    menuItems,
    containerRef,
    linesRef,
    pathname,
    handleEnter,
    handleLeave,
  } = useTopNav();

  const { handleNavigate } = useNavigateTo();

  return (
    <nav className="topnav">
      <ul className="topnav__items" ref={containerRef}>
        <li className="topnav__brand">
          <Link href="/" className="topnav__brand-link">
            SOCAL POWER GRID
          </Link>
        </li>

        {menuItems.map((menu, index) => {
          const isActive = activeIndex === index || pathname === menu.slug;

          return (
            <li
              key={menu.slug}
              className={`topnav__item ${
                isActive ? "topnav__item--active" : ""
              }`}
              onMouseEnter={() => handleEnter(index)}
              onMouseLeave={() => handleLeave(index)}
            >
              <Link href={menu.slug} className="topnav__item-link">
                {menu.text}
              </Link>

              <span
                ref={(el) => {
                  linesRef.current[index] = el;
                }}
                className="topnav__line"
              />
            </li>
          );
        })}

        <li className="topnav__item topnav__search">
          {/* <input
            type="text"
            placeholder="search here"
            className="topnav__search--input"
          /> */}
        </li>

        <li className="topnav__item">
          <div className="topnav__icons">
            {/* <Terminal className="topnav__icons--icon" />
            <Setting className="topnav__icons--icon" /> */}
          </div>
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

export default TopNav;
