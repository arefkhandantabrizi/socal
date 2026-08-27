import termsOfServices from "@/data/legal/termsOfServices";

const useRenderTerms = () => {
  const {
    descriptionOfService,
    eligibility,
    governingLaw,
    indemnification,
    intellectualProperty,
    limitationOfLiability,
    modificationsToTheseTerms,
    prohibitedUses,
    severability,
    submissionsThroughOurForms,
    termination,
    thirdPartyLinksAndServices,
  } = termsOfServices;

  const renderTerms = [
    {
      type: "simpleTerms",
      data: eligibility,
    },
    {
      type: "simpleTerms",
      data: descriptionOfService,
    },
    {
      type: "multipleBodiesTerms",
      data: submissionsThroughOurForms,
    },
    {
      type: "simpleTerms",
      data: intellectualProperty,
    },
    {
      type: "multipleBodiesTerms",
      data: prohibitedUses,
    },
    {
      type: "simpleTerms",
      data: thirdPartyLinksAndServices,
    },
    {
      type: "simpleTerms",
      data: limitationOfLiability,
    },
    {
      type: "simpleTerms",
      data: indemnification,
    },
    {
      type: "simpleTerms",
      data: modificationsToTheseTerms,
    },
    {
      type: "simpleTerms",
      data: termination,
    },
    {
      type: "simpleTerms",
      data: governingLaw,
    },
    {
      type: "simpleTerms",
      data: severability,
    },
  ];
  return { renderTerms };
};

export default useRenderTerms;
