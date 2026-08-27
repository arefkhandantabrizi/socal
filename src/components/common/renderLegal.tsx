import IRenderLegal from "@/interfaces/common/IRenderLegal";
import TermsBlock from "../terms-of-services/termsBlock";
import TermsBlockWithMultipleBodies from "../terms-of-services/termsBlockWithMultipleBodies";
import PrivacyBlock from "../privacy-policy/privacyBlock";
import PrivacyBlockWithMultipleBodies from "../privacy-policy/privacyBlockWithMultipleBodies";

const RenderLegal = ({ type, data }: IRenderLegal) => {
  switch (type) {
    case "simpleTerms":
      return (
        <TermsBlock
          number={data.number}
          title={data.title}
          head={data?.head}
          body={data.body}
          end={data?.end}
        />
      );

    case "multipleBodiesTerms":
      return (
        <TermsBlockWithMultipleBodies
          number={data.number}
          title={data.title}
          head={data?.head}
          body={data.body}
          link={data?.link}
          end={data?.end}
          isProhibited={data?.isProhibited}
        />
      );

    case "simplePrivacy":
      return (
        <PrivacyBlock
          number={data.number}
          title={data.title}
          head={data?.head}
          body={data.body}
          end={data?.end}
        />
      );

    case "multipleBodiesPrivacy":
      return (
        <PrivacyBlockWithMultipleBodies
          number={data.number}
          title={data.title}
          head={data?.head}
          body={data.body}
          link={data?.link}
          end={data?.end}
          isProhibited={data?.isProhibited}
        />
      );

    default:
      break;
  }
};

export default RenderLegal;
