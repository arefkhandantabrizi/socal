"use client";
import privacyPolicy from "@/data/legal/privacyPolicy";
import { Auction, Calendar, LeftArrow, Update } from "../common/icons";
import useRenderPrivacy from "@/hooks/privacy-policy/useRenderPrivacy";
import RenderLegal from "../common/renderLegal";
import useNavigateTo from "@/hooks/common/useNavigate";

const Privacy = () => {
  const { effectiveDate, lastUpdated, introduction } = privacyPolicy;
  const { renderPrivacy } = useRenderPrivacy();
  const { handleNavigate } = useNavigateTo();

  return (
    <section className="legal">
      <div className="legal__body">
        <div className="legal__intro">
          <Auction className="legal__icon" />
          <div className="legal__intro--text">legal protocols</div>
        </div>
        <h1 className="legal__header">privacy policy</h1>
        <div className="legal__date">
          <div className="legal__date--effective">
            <Calendar className="legal__icon" />
            <div className="legal__date--text">
              Effective Date: {effectiveDate}
            </div>
          </div>
          <div className="legal__date--effective">
            <Update className="legal__icon" />
            <div className="legal__date--text">Last Update: {lastUpdated}</div>
          </div>
        </div>
        <p className="legal__introduction">{introduction}</p>

        {renderPrivacy.map((terms, index) => {
          return (
            <RenderLegal data={terms.data} type={terms.type} key={index} />
          );
        })}

        <div className="legal__btnwrapper">
          <button
            className="legal__homebtn"
            onClick={() => handleNavigate("/")}
          >
            <LeftArrow className="legal__icon" />
            back to home
          </button>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
