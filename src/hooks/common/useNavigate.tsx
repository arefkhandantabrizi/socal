import { useRouter } from "next/navigation";

const useNavigateTo = () => {
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return { handleNavigate };
};

export default useNavigateTo;
