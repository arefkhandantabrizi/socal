import IButtonWithSearch from "@/interfaces/common/IButtonWithSearch";
import Spinner from "./spinner";

const Button = ({
  disabled,
  loadingCondition,
  label,
  type,
  extraClassName,
  cta,
}: IButtonWithSearch) => {
  return loadingCondition ? (
    <button
      className={
        typeof extraClassName === "undefined"
          ? "calibration__transmission--form--btn"
          : extraClassName
      }
      type={type ? type : "button"}
      disabled={disabled}
      onClick={cta}
    >
      {label}
    </button>
  ) : (
    <button
      type="button"
      className={
        typeof extraClassName === "undefined"
          ? "calibration__transmission--form--btn"
          : extraClassName
      }
      disabled
    >
      <Spinner text={label} />
    </button>
  );
};

export default Button;
