import { useCallback } from "react";
import IUseHandleCreate from "@/interfaces/common/IUseHandleCreate";

const useHandleCreate = <T,>({ data, createFn }: IUseHandleCreate<T>) => {
  const handleCreate = useCallback(() => {
    createFn(data);
  }, [data, createFn]);

  return { handleCreate };
};

export default useHandleCreate;
