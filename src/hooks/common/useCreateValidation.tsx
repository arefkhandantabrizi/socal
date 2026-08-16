import IUseCreateValidation from "@/interfaces/common/IUseCreateValidation";
import IApiResponse from "@/interfaces/common/IApiResponse";
import IResult from "@/interfaces/common/IResult";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";

const useCreateValidation = <T,>({
  createdData,
  error,
  toastMessage,
  setSendFlag,
  clear,
  onSuccess,
  toggleModal,
}: IUseCreateValidation<T>) => {
  const lastHandledSuccess = useRef<IApiResponse<IResult<T>> | undefined>(
    undefined,
  );

  useEffect(() => {
    if (createdData?.success && createdData !== lastHandledSuccess.current) {
      lastHandledSuccess.current = createdData;
      toast(toastMessage, {
        icon: "✅",
        style: {
          fontSize: "14px",
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      setSendFlag?.(false);
      clear();
      onSuccess?.();
      toggleModal?.();
    }
  }, [createdData, toastMessage, setSendFlag, toggleModal, clear, onSuccess]);

  useEffect(() => {
    if (error) {
      toast(error, {
        icon: "❌",
        style: {
          fontSize: "14px",
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  }, [error]);
};

export default useCreateValidation;
