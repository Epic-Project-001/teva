import { z } from "zod";
import { useRef } from "react";

const formSchema = z.object({
  firstname: z.string().min(1, "First Name is required"),
  lastname: z.string().min(1, "Last Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  zipCode: z.string().min(1, "Zip Code is required"),
  acknowledged: z.literal(true, {
    errorMap: () => ({ message: "Acknowledgment is required." }),
  }),
});

export default function createSlice(set: any, get: any, store: any): any {
  return {
    refs: useRef<{ [key: string]: HTMLInputElement | null }>({}),
    show_errors: false,
    values: {
      acknowledged: false,
      authorized: false,
      firstname: "",
      lastname: "",
      email: "",
      zipCode: "",
    },
    getFormStatus: () => {
      const { show_errors, values } = get();
      const { error, success } = formSchema.safeParse(values);
      let errors =
        success || !show_errors
          ? []
          : error.errors.map((err) => ({
              path: err.path.join("."),
              message: err.message,
            }));

      return {
        id: "edit-video",
        success,
        errors,
      };
    },
    setField: (field: string, value: any) =>
      set((state: any) => ({
        ...state,
        values: { ...state.values, [field]: value },
      })),
    resetForm: () =>
      set({
        values: {
          firstname: "",
          lastname: "",
          email: "",
          zipCode: "",
        },
        errors: {},
      }),
    setShowErrors: (show_errors: boolean) =>
      set((state: any) => ({
        ...state,
        show_errors,
      })),
  };
}
