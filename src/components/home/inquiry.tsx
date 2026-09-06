"use client";

import useNavigateTo from "@/hooks/common/useNavigate";
import useInquiry from "@/hooks/home/useInquiry";

const Inquiry = () => {
  const { btnRef, containerRef, headerRef, labelRef, subheaderRef } =
    useInquiry();

  const { handleNavigate } = useNavigateTo();

  return (
    <div className="inquiry" ref={containerRef}>
      <div className="inquiry__label" ref={labelRef}>
        INNOVATION &nbsp; LABS
      </div>
      <h4 className="inquiry__header" ref={headerRef}>
        FUTURE-PROOFING
      </h4>
      <h4 className="inquiry__subheader" ref={subheaderRef}>
        INDUSTRIAL INFRASTRUCTURE
      </h4>
      <div className="inquiry__btnwrapper">
        <button
          className="btn btn--primary bold"
          ref={btnRef}
          onClick={() => handleNavigate("/about-us#transmission")}
        >
          TECHNICAL INQUIRY
        </button>
      </div>
    </div>
  );
};

export default Inquiry;
