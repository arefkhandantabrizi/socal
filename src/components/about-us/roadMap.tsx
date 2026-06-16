const RoadMap = () => {
  return (
    <section className="roadMap">
      <h2 className="roadMap--label">MODULE 03 // INITIALIZATION ROADMAP</h2>
      <h2 className="roadMap--header">Strategic Commencement</h2>
      <div className="roadMap__timeline">
        <div className="roadMap__timeline--phase--wrapper">
          <div className="roadMap__timeline--content">
            <div className="roadMap__timeline--indicator roadMap__timeline--indicator--active" />
            <div className="roadMap__timeline--wrapper">
              <h3 className="roadMap__timeline--phase">Phase 01</h3>
              <h4 className="roadMap__timeline--text">
                Core Infrastructure Establishment
              </h4>
            </div>
          </div>
        </div>
        <div className="roadMap__timeline--phase--wrapper">
          <div className="roadMap__timeline--content">
            <div className="roadMap__timeline--indicator" />
            <div className="roadMap__timeline--wrapper">
              <h3 className="roadMap__timeline--phase">Phase 02</h3>
              <h4 className="roadMap__timeline--text">
                Multi-Disciplinary Integration
              </h4>
            </div>
          </div>
        </div>
        <div className="roadMap__timeline--phase--wrapper">
          <div className="roadMap__timeline--content">
            <div className="roadMap__timeline--indicator" />
            <div className="roadMap__timeline--wrapper">
              <h3 className="roadMap__timeline--phase">Phase 03</h3>
              <h4 className="roadMap__timeline--text">
                Global Operational Deployment
              </h4>
            </div>
          </div>
        </div>
        <div className="roadMap__timeline--phase--wrapper">
          <div className="roadMap__timeline--content">
            <div className="roadMap__timeline--indicator" />
            <div className="roadMap__timeline--wrapper">
              <h3 className="roadMap__timeline--phase">Phase 04</h3>
              <h4 className="roadMap__timeline--text">System Autonomy V1</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadMap;
