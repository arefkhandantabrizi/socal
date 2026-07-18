"use client";

import useNavigateTo from "@/hooks/common/useNavigate";
import useInquiry from "@/hooks/home/useInquiry";

const Inquiry = () => {
  const { btn1Ref, btn2Ref, containerRef, headerRef, labelRef, subheaderRef } =
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
        <button className="inquiry__meetingbtn" ref={btn1Ref}>
          SCHEDULE A MEETING
        </button>
        <button
          className="inquiry__technicalbtn"
          ref={btn2Ref}
          onClick={() => handleNavigate("/about-us#transmission")}
        >
          TECHNICAL INQUIRY
        </button>
      </div>
    </div>
  );
};

export default Inquiry;
