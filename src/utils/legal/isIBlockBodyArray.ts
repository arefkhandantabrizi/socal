import IBlockBody from "@/interfaces/privacy-policy/IBlockBody";

const isIBlockBodyArray = (
  body: string[] | IBlockBody[],
): body is IBlockBody[] => {
  return (
    body.length > 0 &&
    typeof body[0] === "object" &&
    "title" in body[0] &&
    "body" in body[0]
  );
};

export default isIBlockBodyArray;
