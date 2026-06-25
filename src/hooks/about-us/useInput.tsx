import { ChangeEvent, useState } from "react";

const useInput = () => {
  const [name, setName] = useState("");
  const [nameFlag, setNameFlag] = useState(false);
  const [select, setSelect] = useState("");
  const [selectFlag, setSelectFlag] = useState(false);
  const [jobDesc, setJobDesc] = useState("");
  const [jobDescFlag, setJobDescFlag] = useState(false);

  const disable =
    !name || nameFlag || !select || selectFlag || !jobDesc || jobDescFlag;

  const clear = () => {
    setName("");
    setNameFlag(false);
    setSelect("");
    setSelectFlag(false);
    setJobDesc("");
    setJobDescFlag(false);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    switch (id) {
      case "name":
        setName(value.trim());
        setNameFlag(value.trim().length === 0);
        break;

      case "select":
        setSelect(value);
        setSelectFlag(value === "0");
        break;

      case "jobDesc":
        setJobDesc(value.trim());
        setJobDescFlag(value.trim().length === 0);
        break;

      default:
        break;
    }
  };

  return { name, select, jobDesc, disable, handleChange, clear };
};

export default useInput;
