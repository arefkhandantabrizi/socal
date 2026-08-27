import IBlockBody from "./IBlockBody";

export default interface IPrivacyBlock {
  number: string;
  title: string;
  head?: string;
  body: string | string[] | IBlockBody[];
  end?: string | string[];
  link?: { address: string; child: number };
  isProhibited?: boolean;
}
