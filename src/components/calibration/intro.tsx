"use client";
import Image from "next/image";
import { Bars, Timer } from "../common/icons";
import useIntroAnimation from "@/hooks/calibration/useIntroAnimation";

const Intro = () => {
  const { containerRef, imageRef, textRef } = useIntroAnimation();
  return (
    <section className="calibration__intro" ref={containerRef}>
      <div className="calibration__intro--text" ref={textRef}>
        <h1 className="calibration__intro--label">DEPARTMENT_03</h1>
        <h1 className="calibration__intro--header calibration__intro--header-1">
          system engineering &
        </h1>
        <h1 className="calibration__intro--header calibration__intro--header-2">
          calibration_core
        </h1>
        <p className="calibration__intro--body">
          Precision baseline synchronization for high-velocity hardware
          environments. We engineer the benchmarks that define global
          operational excellence.
        </p>
        <div className="calibration__intro--badge--wrapper">
          <div className="calibration__intro--badge">
            <Bars className="calibration__intro--badge--icon" />
            <div className="calibration__intro--badge--header">
              tolerance level
            </div>
            <div className="calibration__intro--badge--body">± 0.00001μm</div>
          </div>
          <div className="calibration__intro--badge">
            <Timer className="calibration__intro--badge--icon" />
            <div className="calibration__intro--badge--header">
              latency floor
            </div>
            <div className="calibration__intro--badge--body">0.002ms</div>
          </div>
        </div>
      </div>
      <div className="calibration__intro--image--wrapper" ref={imageRef}>
        <Image
          className="calibration__intro--image"
          src="/calibration.webp"
          alt="calibration"
          width={500}
          height={500}
          priority={true}
        />
      </div>
    </section>
  );
};

export default Intro;
