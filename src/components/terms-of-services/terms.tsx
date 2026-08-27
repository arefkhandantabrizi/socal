"use client";
import termsOfServices from "@/data/legal/termsOfServices";
import {
  Calendar,
  Caution,
  Document,
  LeftArrow,
  Update,
} from "../common/icons";

import useNavigateTo from "@/hooks/common/useNavigate";
import useRenderTerms from "@/hooks/terms-of-services/useRenderTerms";
import RenderLegal from "../common/renderLegal";

const Terms = () => {
  const { disclaimers, effectiveDate, introduction, lastUpdated } =
    termsOfServices;

  const { handleNavigate } = useNavigateTo();
  const { renderTerms } = useRenderTerms();

  return (
    <section className="legal">
      <div className="legal__body">
        <div className="legal__intro">
          <Document className="legal__icon" />
          <div className="legal__intro--text">document specification</div>
        </div>
        <h1 className="legal__header">terms of services</h1>
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

        {renderTerms.map((terms, index) => {
          return (
            <RenderLegal data={terms.data} type={terms.type} key={index} />
          );
        })}

        <div className="legal__disclaimers">
          <div className="legal__disclaimers--header">
            <Caution className="legal__icon" />
            <h3 className="legal__disclaimers--header--text">
              {disclaimers.title}
            </h3>
          </div>
          <div className="legal__disclaimers--body">{disclaimers.body}</div>
        </div>
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

export default Terms;
