import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const inputSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .pipe(z.email("Please enter a valid email address")),
  jobDesc: z
    .string()
    .trim()
    .min(1, "Job description is required")
    .min(10, "Job description must contain at least 10 characters"),
});

type InputForm = z.infer<typeof inputSchema>;

const useInput = () => {
  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<InputForm>({
    resolver: zodResolver(inputSchema),
    mode: "onChange",
    defaultValues: { email: "", jobDesc: "" },
  });

  const email = useWatch({ control, name: "email", defaultValue: "" });
  const jobDesc = useWatch({ control, name: "jobDesc", defaultValue: "" });

  const disable =
    !email.trim() || !jobDesc.trim() || !!errors.email || !!errors.jobDesc;

  const clear = () => {
    reset({ email: "", jobDesc: "" });
  };

  const createData = () => {
    return { email, message: jobDesc };
  };

  return {
    errors,
    email,
    jobDesc,
    disable,
    register,
    handleSubmit,
    createData,
    clear,
  };
};

export default useInput;
