"use client";

import useInput from "@/hooks/about-us/useInput";
import data from "@/services/departments";
import CustomSelect from "../common/customSelect";
import useAboutUsAnimation from "@/hooks/about-us/useAboutUsAnimation";

const Transmission = () => {
  const { select, disable, jobDesc, name, handleChange } = useInput();
  const { divContainer, formContainer, indicatorRef } = useAboutUsAnimation();

  return (
    <section className="transmission" ref={divContainer} id="transmission">
      <h4 className="transmission__label">Transmission Portal</h4>
      <h4 className="transmission__header">Connect Systems</h4>
      <div className="transmission__divider" />
      <div className="transmission__form" ref={formContainer}>
        <div className="transmission__form--row">
          <div className="transmission__form--wrapper">
            <label htmlFor="name" className="transmission__form--label">
              Lead Engineer / Name
            </label>
            <input
              id="name"
              type="text"
              className="input transmission__form--input"
              placeholder="AUTH_NAME_REQUIRED"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="transmission__form--wrapper">
            <label htmlFor="select" className="transmission__form--label">
              Department Selection
            </label>

            <CustomSelect
              {...{
                data,
                handleChange,
                name: "select",
                value: select,
                dataField: "name",
                desiredValue: "name",
                optionText: "PLEASE SELECT YOUR DESIRED DEPARTMENT",
              }}
            />
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
              value={jobDesc}
              onChange={handleChange}
            />
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
            <button className="transmission__form--btn" disabled={disable}>
              secure_transmit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transmission;
