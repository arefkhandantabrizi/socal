"use client";

import useStack from "@/hooks/computer/useStack";
import { Express, MongoDB, Next, Node, React } from "../common/icons";
import Image from "next/image";

const Stack = () => {
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
          <h2 className="stack__frontend--header">
            Modern Web & Cloud Applications{" "}
          </h2>
          <p className="stack__frontend--body">
            We build fast, responsive web applications and digital tools
            tailored to your exact needs. From modern commercial platforms and
            internal business tools to sleek client portals, our software is
            built with{" "}
            <span className="stack__frontend--body--highlight">React</span>,{" "}
            <span className="stack__frontend--body--highlight">Next.js</span>,
            and modern web standards for immediate reliability, smooth
            performance, and effortless scalability.
          </p>
          <div className="stack__frontend--labels">
            <p className="stack__frontend--label">
              Web Apps & Customer Portals
            </p>
            <p className="stack__frontend--label">
              Clean Architecture & Fast Turnaround
            </p>
            <p className="stack__frontend--label">
              Intuitive UX & Responsive Design
            </p>
            <p className="stack__frontend--label">
              Custom Fluid Animations & Interactions
            </p>
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
          <h2 className="stack__backend--header">
            High-Scale Backend & Cloud Architecture
          </h2>
          <p className="stack__backend--body">
            Scalable{" "}
            <span className="stack__backend--body--highlight">Node.js</span> and{" "}
            <span className="stack__backend--body--highlight">Express</span>{" "}
            architectures built for extreme demand and rapid scale. Whether
            handling millions of concurrent consumers, secure payment flows, or
            real-time data streaming, our backends deliver immediate stability
            with zero compromises.
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
          <h2 className="stack__ai--header">AI & Smart Automation</h2>
          <p className="stack__ai--body">
            From smart commercial workflows to custom predictive models, we
            seamlessly integrate adaptive AI capabilities directly into your web
            applications and digital products. We engineer intelligent systems
            that automate complex operations, forecast trends, and drive
            real-time decision-making across diverse business and technical
            environments.
          </p>
          <p className="stack__ai--quote">{`"From commercial web applications to intelligent automation, if you can conceive it, we build it—fast, robust, and ready for immediate deployment."`}</p>
        </div>
        <div className="stack__ai--icon--wrapper" ref={aiIconRef}>
          <div className="stack__imagewrapper">
            <Image
              priority
              src={"/stack.webp"}
              alt="stack image"
              className="stack__image"
              width={670}
              height={383}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
