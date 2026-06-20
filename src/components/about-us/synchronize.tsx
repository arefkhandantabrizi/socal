import { Radar } from "../common/icons";

const Synchronize = () => {
  return (
    <section className="synchronize">
      <Radar className="synchronize__icon" />
      <h4 className="synchronize__header synchronize__header--1">Ready to</h4>
      <h4 className="synchronize__header synchronize__header--2">
        Synchronize?
      </h4>
      <p className="synchronize__body">
        Begin the system initialization protocol. Connect with our architects to
        define the blueprint for your next-generation infrastructure.
      </p>
      <button className="synchronize__btn">initiate_project_</button>
    </section>
  );
};

export default Synchronize;
