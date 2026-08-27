"use client";
import useFooter from "@/hooks/common/useFooter";
import { Email, Github, Linkedin } from "./icons";
import Link from "next/link";
import { menuItems, legalItems } from "@/data/common/menuItems";

const Footer = () => {
  const { containerRef, indicatorRef, pathname } = useFooter();
  return (
    <section className="footer">
      <div className="footer__items">
        <div className="footer__section footer__section--1">
          <div className="footer__name">SOCAL POWER GRID</div>
          <div className="footer__description">
            ADVANCED SYSTEMS ARCHITECTURE FOR GLOBAL INFRASTRUCTURE. SHAPE THE
            LUMINANCE OF TOMORROW THROUGH PRECISION.
          </div>
        </div>
        <div className="footer__section footer__section--2">
          <div className="footer__title">DEPARTMENTAL_NODES</div>
          {menuItems.map((menu) => {
            const isActive = pathname === menu.slug;
            return (
              menu.department && (
                <li
                  key={menu.slug}
                  className={`footer__department ${
                    isActive ? "footer__department--active" : ""
                  }`}
                >
                  <Link
                    href={menu.slug}
                    className={`footer__department ${
                      isActive ? "footer__department--active" : ""
                    }`}
                  >
                    {menu.text}
                  </Link>
                </li>
              )
            );
          })}
        </div>
        <div className="footer__section footer__section--3">
          <div className="footer__title">PROTOCOL_LINKS</div>
          {legalItems.map((menu) => {
            const isActive = pathname === menu.slug;
            return (
              <li
                key={menu.slug}
                className={`footer__protocol ${
                  isActive ? "footer__protocol--active" : ""
                }`}
              >
                <Link
                  href={menu.slug}
                  className={`footer__protocol ${
                    isActive ? "footer__protocol--active" : ""
                  }`}
                >
                  {menu.text}
                </Link>
              </li>
            );
          })}
        </div>
        <div className="footer__section footer__section--4">
          <div className="footer__title">GLOBAL_HEADQUARTERS</div>
          <div className="footer__address">To be announced soon.</div>
          <div className="footer__connection">
            {/* <Linkedin className="footer__connection--icon" /> */}
            <a href="https://github.com/socalpowergrid" target="_blank">
              <Github className="footer__connection--icon" />
            </a>
            <a href="mailto: contact@socalpowergrid.com">
              <Email className="footer__connection--icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer__copyright">
        <div>&copy; 2026 SOCAL POWER GRID. ALL RIGHTS RESERVED.</div>
        <div className="footer__copyright--live" ref={containerRef}>
          <span ref={indicatorRef} className="footer__copyright--indicator" />
          SYSTEM IS LIVE
        </div>
      </div>
    </section>
  );
};

export default Footer;
