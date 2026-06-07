"use client";

import useInquiry from "@/hooks/home/useInquiry";

const Inquiry = () => {
  const { btn1Ref, btn2Ref, containerRef, headerRef, labelRef, subheaderRef } =
    useInquiry();
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
        <button className="inquiry__technicalbtn" ref={btn2Ref}>
          TECHNICAL INQUIRY
        </button>
      </div>
    </div>
  );
};

export default Inquiry;
