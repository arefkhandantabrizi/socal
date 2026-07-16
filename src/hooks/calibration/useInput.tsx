import { ChangeEvent, useState } from "react";

const useInput = () => {
  const [email, setEmail] = useState("");
  const [emailFlag, setEmailFlag] = useState(false);
  const [jobDesc, setJobDesc] = useState("");
  const [jobDescFlag, setJobDescFlag] = useState(false);

  const disable = !email || emailFlag || !jobDesc || jobDescFlag;

  const clear = () => {
    setEmail("");
    setEmailFlag(false);
    setJobDesc("");
    setJobDescFlag(false);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    switch (id) {
      case "email":
        setEmail(value.trim());
        setEmailFlag(value.trim().length === 0);
        break;

      case "jobDesc":
        setJobDesc(value.trim());
        setJobDescFlag(value.trim().length === 0);
        break;

      default:
        break;
    }
  };

  return { email, jobDesc, disable, handleChange, clear };
};

export default useInput;
