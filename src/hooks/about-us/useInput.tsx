import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const inputSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .pipe(z.email("Please enter a valid email address")),
  select: z
    .string()
    .min(1, "Please choose a department")
    .refine((val) => val !== "0", "Please choose a department"),
  jobDesc: z
    .string()
    .trim()
    .min(1, "Message is required")
    .min(10, "Message must contain at least 10 characters"),
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
    defaultValues: { email: "", select: "", jobDesc: "" },
  });

  const email = useWatch({ control, name: "email", defaultValue: "" });
  const select = useWatch({ control, name: "select", defaultValue: "" });
  const jobDesc = useWatch({ control, name: "jobDesc", defaultValue: "" });

  const disable =
    !email.trim() ||
    !select.trim() ||
    !jobDesc.trim() ||
    !!errors.email ||
    !!errors.select ||
    !!errors.jobDesc;

  const clear = () => {
    reset({ email: "", select: "", jobDesc: "" });
  };

  const createData = () => {
    return { email, department: select, message: jobDesc };
  };

  return {
    errors,
    control,
    disable,
    register,
    handleSubmit,
    createData,
    clear,
  };
};

export default useInput;
