"use client";

import useTopNav from "@/hooks/common/useTopNav";
import { Setting, Terminal } from "./icons";

const TopNav = () => {
  const {
    activeIndex,
    menuItems,
    container,
    linesRef,
    handleEnter,
    handleLeave,
  } = useTopNav();

  return (
    <nav className="topnav">
      <ul className="topnav__items" ref={container}>
        <li className="topnav__item--first">SOCAL POWER GRID</li>
        {menuItems.map((text, i) => (
          <li
            key={i}
            className={`topnav__item ${
              i === activeIndex ? "topnav__item--active" : ""
            }`}
            onMouseEnter={() => handleEnter(i)}
            onMouseLeave={() => handleLeave(i)}
          >
            {text}

            <span
              ref={(el) => {
                linesRef.current[i] = el;
              }}
              className="topnav__line"
            />
          </li>
        ))}
        <li className="topnav__item">
          <input
            type="text"
            placeholder="search here"
            className="topnav__search--input"
          />
        </li>
        <li className="topnav__item">
          <div className="topnav__icons">
            <Terminal className="topnav__icons--icon-1 mr-2" />
            <Setting className="topnav__icons--icon-2 " />
          </div>
        </li>
        <li className="topnav__item">
          <button className="topnav__contact--btn">CONTACT US</button>
        </li>
      </ul>
      {/* <div className="topnav__search"> */}

      {/* </div> */}
      {/* <div className="topnav__icons"> */}
      {/* </div> */}
      {/* <div className="topnav__contact"> */}
      {/* </div> */}
    </nav>
  );
};

export default TopNav;
