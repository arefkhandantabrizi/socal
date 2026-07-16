import Intro from "@/components/calibration/intro";
import Protocols from "@/components/calibration/protocols";
import Services from "@/components/calibration/services";
import Specs from "@/components/calibration/specs";
import Transmission from "@/components/calibration/transmission";

const Calibration = () => {
  return (
    <>
      <Intro />
      <Services />
      <Specs />
      <Protocols />
      <Transmission />
    </>
  );
};

export default Calibration;
