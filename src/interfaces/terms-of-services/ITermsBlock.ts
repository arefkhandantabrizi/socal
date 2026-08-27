import IBlockBody from "../privacy-policy/IBlockBody";

export default interface ITermsBlock {
  number: string;
  title: string;
  head?: string;
  body: string | string[] | IBlockBody[];
  link?: { address: string; child: number };
  end?: string | string[];
  isProhibited?: boolean;
  isItTitled?: boolean;
}
