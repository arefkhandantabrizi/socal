"use client";
// import StackCard from "./stackCard";
// import Image from "next/image";
import useStack from "@/hooks/computer/useStack";
import { Express, MongoDB, Next, Node, React } from "../common/icons";
import Image from "next/image";
// import useStackCard from "@/hooks/computer/useStackCard";

const Stack = () => {
  // const { stacks } = useStackCard();
  const {
    containerRef,
    aiIconRef,
    aiRef,
    backendIconRef,
    backendIconRef2,
    backendIconRef3,
    backendIconWrapperRef,
    backendRef,
    webIconRef1,
    webIconRef,
    webIconWrapperRef,
    webRef,
  } = useStack();
  return (
    <section className="stack" ref={containerRef}>
      <div className="stack__frontend">
        <div className="stack__frontend--text--wrapper" ref={webRef}>
          <h2 className="stack__frontend--header">Industrial Web Systems</h2>
          <p className="stack__frontend--body">
            Engineering robust digital interfaces that handle massive industrial
            data streams. We leverage{" "}
            <span className="stack__frontend--body--highlight">React</span> and{" "}
            <span className="stack__frontend--body--highlight">Next.js</span> to
            create high-performance frontends.
          </p>
          <div className="stack__frontend--labels">
            <p className="stack__frontend--label">
              Hyper-optimized rendering pipelines
            </p>
            <p className="stack__frontend--label">
              Real-time WebSocket integration
            </p>
            <p className="stack__frontend--label">Cinematic animations</p>
          </div>
        </div>
        <div className="stack__frontend--icon--wrapper" ref={webIconWrapperRef}>
          <div className="stack__frontend--icon" ref={webIconRef}>
            <React className="stack__frontend--icon--fill" />
          </div>
          <div className="stack__frontend--icon" ref={webIconRef1}>
            <Next className="stack__frontend--icon--fill" />
          </div>
        </div>
      </div>
      <div className="stack__backend">
        <div
          className="stack__backend--icon--wrapper"
          ref={backendIconWrapperRef}
        >
          <div
            className="stack__backend--icon stack__backend--icon-1"
            ref={backendIconRef}
          >
            <Node className="stack__backend--icon--fill" />
          </div>
          <div
            className="stack__backend--icon stack__backend--icon-2"
            ref={backendIconRef2}
          >
            <Express className="stack__backend--icon--fill" />
          </div>
          <div
            className="stack__backend--icon stack__backend--icon-3"
            ref={backendIconRef3}
          >
            <MongoDB className="stack__backend--icon--fill" />
          </div>
        </div>
        <div className="stack__backend--text--wrapper" ref={backendRef}>
          <h2 className="stack__backend--header">Mission-Critical Backends</h2>
          <p className="stack__backend--body">
            Scalable{" "}
            <span className="stack__backend--body--highlight">Node.js</span> and{" "}
            <span className="stack__backend--body--highlight">Express</span>{" "}
            microservices designed for 99.999% uptime. We build the backbone for
            mission-critical industrial automation, where latency is measured in
            microseconds.
          </p>
          <div className="stack__backend--badge--wrapper">
            <div className="stack__backend--badge">
              <p className="stack__backend--badge--header">0.02ms</p>
              <p className="stack__backend--badge--body">avg latency</p>
            </div>
            <div className="stack__backend--badge">
              <p className="stack__backend--badge--header">10,000+</p>
              <p className="stack__backend--badge--body">avg rps</p>
            </div>
          </div>
        </div>
      </div>
      <div className="stack__ai">
        <div className="stack__ai--text--wrapper" ref={aiRef}>
          <h2 className="stack__ai--header">The Neural Synthesis</h2>
          <p className="stack__ai--body">
            Transitioning from standard commercial AI to specialized{" "}
            <span className="stack__ai--body--highlight">
              {" "}
              Industrial Logic{" "}
            </span>
            . Our neural models predict machine fatigue, optimize power
            distribution, and enable autonomous robotics across global
            manufacturing hubs.
          </p>
          <p className="stack__ai--quote">{`"We are no longer just building software; we are engineering the cognitive layer of physical industry."`}</p>
        </div>
        <div className="stack__ai--icon--wrapper" ref={aiIconRef}>
          <div className="stack__imagewrapper">
            <Image
              fill
              preload
              src={"/stack.webp"}
              alt="stack image"
              className="stack__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
