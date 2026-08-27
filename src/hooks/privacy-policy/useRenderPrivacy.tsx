import privacyPolicy from "@/data/legal/privacyPolicy";

const useRenderPrivacy = () => {
  const {
    changesToThisPolicy,
    childrenPrivacy,
    contactUs,
    cookiesAndTrackingTechnologies,
    dataRetention,
    dataSecurity,
    howWeShareYourInformation,
    howWeUseYourInformation,
    informationWeCollect,
    legalBasisForProcessingEU_UKVisitors,
    yourRights,
  } = privacyPolicy;

  const renderPrivacy = [
    {
      type: "multipleBodiesPrivacy",
      data: informationWeCollect,
    },
    {
      type: "multipleBodiesPrivacy",
      data: howWeUseYourInformation,
    },
    {
      type: "multipleBodiesPrivacy",
      data: legalBasisForProcessingEU_UKVisitors,
    },
    {
      type: "simplePrivacy",
      data: cookiesAndTrackingTechnologies,
    },
    {
      type: "multipleBodiesPrivacy",
      data: howWeShareYourInformation,
    },
    {
      type: "simplePrivacy",
      data: dataRetention,
    },
    {
      type: "simplePrivacy",
      data: dataSecurity,
    },
    {
      type: "multipleBodiesPrivacy",
      data: yourRights,
    },
    {
      type: "simplePrivacy",
      data: childrenPrivacy,
    },
    {
      type: "simplePrivacy",
      data: changesToThisPolicy,
    },
    {
      type: "multipleBodiesPrivacy",
      data: contactUs,
    },
  ];
  return { renderPrivacy };
};

export default useRenderPrivacy;
