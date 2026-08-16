import { useState } from "react";
import IResult from "@/interfaces/common/IResult";
import IUseCreate from "@/interfaces/common/IUseCreate";
import IApiResponse from "@/interfaces/common/IApiResponse";

const useCreate = <T, K>({ addFn }: IUseCreate<T, K>) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>("");
  const [createdData, setCreatedData] = useState<IApiResponse<IResult<T>>>();

  const createFunction = async (data: K) => {
    setError("");
    setIsLoading(true);
    const result = await addFn(data);
    if (result.success) {
      setCreatedData(result);
    } else {
      setError(result.message);
    }

    setIsLoading(false);
  };

  return { isLoading, error, createdData, setError, createFunction };
};

export default useCreate;
