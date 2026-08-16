"use client";

import useInput from "@/hooks/about-us/useInput";
import useCreate from "@/hooks/common/useCreate";
import useCreateValidation from "@/hooks/common/useCreateValidation";
import useHandleCreate from "@/hooks/common/useHandleCreate";
import data from "@/services/departments";
import ControlledSelect from "../common/controlledSelect";
import useAboutUsAnimation from "@/hooks/about-us/useAboutUsAnimation";
import { addAboutUs } from "@/services/aboutUs";
import Button from "../common/Button";

const Transmission = () => {
  const {
    register,
    control,
    errors,
    disable,
    handleSubmit,
    createData,
    clear,
  } = useInput();
  const { divContainer, formContainer, indicatorRef } = useAboutUsAnimation();

  const { createFunction, createdData, error, isLoading } = useCreate({
    addFn: addAboutUs,
  });

  const payload = createData();

  const { handleCreate } = useHandleCreate({
    data: payload,
    createFn: createFunction,
  });

  useCreateValidation({
    createdData,
    error,
    toastMessage: "We've received your message.",
    clear,
  });

  return (
    <section className="transmission" ref={divContainer} id="transmission">
      <h4 className="transmission__label">Transmission Portal</h4>
      <h4 className="transmission__header">Connect Systems</h4>
      <div className="transmission__divider" />
      <form
        className="transmission__form"
        ref={formContainer}
        onSubmit={handleSubmit(handleCreate)}
      >
        <div className="transmission__form--row">
          <div className="transmission__form--wrapper">
            <label htmlFor="email" className="transmission__form--label">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="input transmission__form--input"
              placeholder="EMAIL_ADDRESS_REQUIRED"
              {...register("email")}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <div className="transmission__form--error">
                {errors.email.message}
              </div>
            )}
          </div>
          <div className="transmission__form--wrapper">
            <label htmlFor="select" className="transmission__form--label">
              Department Selection
            </label>
            <ControlledSelect
              control={control}
              name="select"
              data={data}
              dataField="name"
              desiredValue="name"
              optionText="PLEASE SELECT YOUR DESIRED DEPARTMENT"
            />
            {errors.select && (
              <div className="transmission__form--error">
                {errors.select.message}
              </div>
            )}
          </div>
        </div>
        <div className="transmission__form--row">
          <div className="transmission__form--wrapper">
            <label htmlFor="jobDesc" className="transmission__form--label">
              Project Brief / Message
            </label>
            <textarea
              id="jobDesc"
              className="textArea transmission__form--text"
              placeholder="DESCRIBE_SYSTEM_REQUIREMENT..."
              {...register("jobDesc")}
              aria-invalid={!!errors.jobDesc}
            />
            {errors.jobDesc && (
              <div className="transmission__form--error">
                {errors.jobDesc.message}
              </div>
            )}
          </div>
        </div>
        <div className="transmission__form--row">
          <div className="transmission__form--wrapper transmission__form--wrapper--indicator">
            <span
              className="transmission__form--indicator"
              ref={indicatorRef}
            />
            <label className="transmission__form--label transmission__form--label--indicator">
              ENCRYPTED_UPLINK_READY
            </label>
          </div>
          <div className="transmission__form--wrapper">
            <Button
              type="submit"
              extraClassName="transmission__form--btn"
              disabled={disable}
              label={!isLoading ? "secure_transmit" : " Sending"}
              loadingCondition={!isLoading}
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default Transmission;
