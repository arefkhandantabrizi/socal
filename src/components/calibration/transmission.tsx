"use client";
import useInput from "@/hooks/calibration/useInput";
import useTransmissionAnimation from "@/hooks/calibration/useTransmissionAnimation";
import useCreate from "@/hooks/common/useCreate";
import useCreateValidation from "@/hooks/common/useCreateValidation";
import useHandleCreate from "@/hooks/common/useHandleCreate";
import IAddCalibration from "@/interfaces/calibration/IAddCalibration";
import ICalibration from "@/interfaces/calibration/ICalibration";
import { addCalibration } from "@/services/calibration";
import Button from "../common/Button";

const Transmission = () => {
  const { disable, errors, createData, clear, handleSubmit, register } =
    useInput();
  const { containerRef } = useTransmissionAnimation();

  const { createFunction, createdData, error, isLoading } = useCreate<
    ICalibration,
    IAddCalibration
  >({ addFn: addCalibration });

  const dataForClibration = createData();

  const { handleCreate } = useHandleCreate<IAddCalibration>({
    data: dataForClibration,
    createFn: createFunction,
  });

  useCreateValidation<ICalibration>({
    createdData,
    error,
    toastMessage: "We've received your message.",
    clear,
  });

  const loading = isLoading;

  return (
    <section className="calibration__transmission" ref={containerRef}>
      <div className="calibration__transmission--form--outer">
        <div className="calibration__transmission--text">
          <h5 className="calibration__transmission--header">Initialize</h5>
          <h5 className="calibration__transmission--header--accent">
            connection
          </h5>
          <p className="calibration__transmission--body">
            Deploy our calibration architecture to your facility. Secure, fast,
            and precise protocols for mission-critical hardware.
          </p>
          <div className="calibration__transmission--label--wrapper">
            <div className="calibration__transmission--label">
              <div className="calibration__transmission--label--header">
                Uplink Code
              </div>
              <div className="calibration__transmission--label--body">
                socal-7720
              </div>
            </div>
            <div className="calibration__transmission--label">
              <div className="calibration__transmission--label--header">
                Protocol
              </div>
              <div className="calibration__transmission--label--body">
                SECURE-QUANTUM
              </div>
            </div>
          </div>
        </div>
        <form
          className="calibration__transmission--form"
          onSubmit={handleSubmit(handleCreate)}
        >
          <div className="calibration__transmission--form--wrapper">
            <label
              htmlFor="email"
              className="calibration__transmission--form--label"
            >
              Access Key (Email)
            </label>
            <input
              id="email"
              type="email"
              className="input calibration__transmission--form--input"
              placeholder="operator@nexsus-ops.sh"
              {...register("email")}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <div className="calibration__transmission--form--error">
                {errors.email.message}
              </div>
            )}
          </div>
          <div className="calibration__transmission--form--wrapper">
            <label
              htmlFor="jobDesc"
              className="calibration__transmission--form--label"
            >
              Transmission Header
            </label>
            <textarea
              id="jobDesc"
              className="textArea calibration__transmission--form--text"
              placeholder="Outline specific hardware requirements..."
              {...register("jobDesc")}
              aria-invalid={!!errors.jobDesc}
              aria-describedby={errors.jobDesc ? "jobDesc-error" : undefined}
            />
            {errors.jobDesc && (
              <div className="calibration__transmission--form--error">
                {errors.jobDesc.message}
              </div>
            )}
          </div>
          <div className="calibration__transmission--form--wrapper">
            <Button
              type="submit"
              disabled={disable}
              label={!loading ? "Establish Link" : " Sending"}
              loadingCondition={!loading}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Transmission;
