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
          <ChevronRight className="ethos__terminal--icon chevron-1 mr-2" />
          <div
            ref={commandRef}
            className={`ethos__terminal--command-text ${
              activeCursor === "cmd1" ? "has-cursor" : ""
            }`}
          />
        </div>

        <div
          ref={(el) => {
            if (el) {
              linesRef.current[0] = el;
            }
          }}
          className={`ethos__terminal--command ${
            activeCursor === 0 ? "has-cursor" : ""
          }`}
        />

        <div
          ref={(el) => {
            if (el) linesRef.current[1] = el;
          }}
          className={`ethos__terminal--command ${
            activeCursor === 1 ? "has-cursor" : ""
          }`}
        />

        <div className="ethos__terminal--command-container">
          <ChevronRight className="ethos__terminal--icon chevron-2 mr-2" />
          <div
            ref={commandRef2}
            className={`ethos__terminal--command-text ${
              activeCursor === "cmd2" ? "has-cursor" : ""
            }`}
          />
        </div>

        <div
          ref={(el) => {
            if (el) linesRef.current[2] = el;
          }}
          className={`ethos__terminal--command ${
            activeCursor === 2 ? "has-cursor" : ""
          }`}
        />

        <div className="ethos__terminal--progress-bar" ref={progressRef} />
      </div>
    </div>
  );
};

export default Terminal;
