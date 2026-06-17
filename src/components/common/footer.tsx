"use client";
import useFooter from "@/hooks/common/useFooter";
import { Email, Github, Linkedin } from "./icons";
import Link from "next/link";
import menuItems from "@/utils/menuItems";

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
          {/* <div className="footer__department"> */}
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
        {/* <Link href={"/computer"} className="footer__department">
              COMPUTER
            </Link>
          </div>
          <div className="footer__department">
            <Link href={"/power"} className="footer__department">
              POWER
            </Link>
          </div>
          <div className="footer__department">
            <Link href={"/calibration"} className="footer__department">
              SYSTEM ENGINEERING & CALIBRATION
            </Link>
          </div>
        </div> */}
        <div className="footer__section footer__section--3">
          <div className="footer__title">PROTOCOL_LINKS</div>
          <div className="footer__protocol">TERMS OF SERVICES</div>
          <div className="footer__protocol">PRIVACY PROTOCOL</div>
          <div className="footer__protocol">GLOBAL SUPPORT</div>
          <div className="footer__protocol">SYSTEM STATUS</div>
        </div>
        <div className="footer__section footer__section--4">
          <div className="footer__title">GLOBAL_HEADQUARTERS</div>
          <div className="footer__address">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </div>
          <div className="footer__connection">
            <Linkedin className="footer__connection--icon" />
            <Github className="footer__connection--icon" />
            <Email className="footer__connection--icon" />
          </div>
        </div>
      </div>

      <div className="footer__copyright">
        <div>&copy; 2026 SOCAL POWER GRID. ALL RIGHT RESERVED.</div>
        <div className="footer__copyright--live" ref={containerRef}>
          <span ref={indicatorRef} className="footer__copyright--indicator" />
          SYSTEM IS LIVE
        </div>
      </div>
    </section>
  );
};

export default Footer;
