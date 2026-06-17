const Validation = () => {
  return (
    <section className="validation">
      <div className="validation__text--wrapper">
        <h2 className="validation__text--label">MODULE 04 // VALIDATION</h2>
        <h2 className="validation__text--header">System Validation</h2>
        <p className="validation__text--body">
          Our protocols are audited daily against the highest standards of
          industrial safety and computational efficiency.
        </p>
      </div>
      <div className="validation__badge--wrapper">
        <div className="validation__badge validation__badge--1">
          <h3 className="validation__badge--header">99.9%</h3>
          <h4 className="validation__badge--body">Precision Rate</h4>
        </div>
        <div className="validation__badge validation__badge--2">
          <h3 className="validation__badge--header">500+</h3>
          <h4 className="validation__badge--body">Deployments</h4>
        </div>
        <div className="validation__badge validation__badge--3">
          <h3 className="validation__badge--header">12k</h3>
          <h4 className="validation__badge--body">Sensors Mapped</h4>
        </div>
        <div className="validation__badge validation__badge--4">
          <h3 className="validation__badge--header">&infin;</h3>
          <h4 className="validation__badge--body">Scalability</h4>
        </div>
      </div>
    </section>
  );
};

export default Validation;
