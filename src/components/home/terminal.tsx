import useEthos from "@/hooks/home/useEthos";
import { ChevronRight } from "../common/icons";

const Terminal = () => {
  const {
    containerRef,
    linesRef,
    progressRef,
    commandRef,
    commandRef2,
    activeCursor,
  } = useEthos();
  return (
    <div className="ethos__terminal" ref={containerRef}>
      <div className="ethos__terminal--container">
        <div className="ethos__terminal--controler">
          <span className="ethos__terminal--red mr-1" />
          <span className="ethos__terminal--blue mr-1" />
          <span className="ethos__terminal--gray" />
        </div>
        <div className="ethos__terminal--command-container">
          <ChevronRight className="ethos__terminal--icon mr-2" />
          <div
            className={`ethos__terminal--command-text ${
              activeCursor === "cmd1" ? "has-cursor" : ""
            }`}
            ref={commandRef}
          />
        </div>
        <div
          className={`ethos__terminal--command ${
            activeCursor === 0 ? "has-cursor" : ""
          }`}
          ref={(el) => {
            if (el) linesRef.current[0] = el;
          }}
        />

        <div
          className={`ethos__terminal--command ${
            activeCursor === 0 ? "has-cursor" : ""
          }`}
          ref={(el) => {
            if (el) linesRef.current[1] = el;
          }}
        />

        <div className="ethos__terminal--command-container">
          <ChevronRight className="ethos__terminal--icon mr-2" />
          <div
            className={`ethos__terminal--command-text ${
              activeCursor === "cmd2" ? "has-cursor" : ""
            }`}
            ref={commandRef2}
          />
        </div>

        <div
          className={`ethos__terminal--command ${
            activeCursor === 0 ? "has-cursor" : ""
          }`}
          ref={(el) => {
            if (el) linesRef.current[2] = el;
          }}
        />

        <div className="ethos__terminal--progress-bar" ref={progressRef} />
      </div>
    </div>
  );
};

export default Terminal;
