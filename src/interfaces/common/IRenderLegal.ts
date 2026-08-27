import IPrivacyBlock from "../privacy-policy/IPrivacyBlock";
import ITermsBlock from "../terms-of-services/ITermsBlock";
import ITermsBlockWithArrayBody from "../terms-of-services/ITermsBlockWithArrayBody";

export default interface IRenderLegal {
  type: string;
  data: ITermsBlock | ITermsBlockWithArrayBody | IPrivacyBlock;
}
