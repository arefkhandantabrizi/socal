"use client";
import { useRadarJamEffect } from "@/hooks/notFound/useJamEffect";

const DIGITS = ["4", "0", "4"];

const Text = () => {
  const {
    containerRef,
    sharpLayerRef,
    scanLineRef,
    setBlurCharRef,
    setSharpCharRef,
  } = useRadarJamEffect(DIGITS.join(""));

  return (
    <div className="page">
      <div ref={containerRef} className="digitStack">
        <div className="layerBlurred">
          {DIGITS.map((digit, i) => (
            <span key={i} ref={setBlurCharRef(i)} className="digit">
              {digit}
            </span>
          ))}
        </div>

        <div ref={sharpLayerRef} className="layerSharp">
          {DIGITS.map((digit, i) => (
            <span key={i} ref={setSharpCharRef(i)} className="digit">
              {digit}
            </span>
          ))}
        </div>

        <div ref={scanLineRef} className="scanLine" />
      </div>
    </div>
  );
};

export default Text;
