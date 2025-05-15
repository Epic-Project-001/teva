import { createStore } from "zustand/vanilla";
import createSlice from "./slice";

type FormState = {
  values: {
    firstname: string;
    lastname: string;
    email: string;
    zipCode: string;
  };
  errors: Record<string, string>;

  setField: (field: keyof FormState["values"], value: string) => void;
  validate: () => boolean;
  resetForm: () => void;
} & any;

export const createFormStore = (initialState?: any) => {
  const store = createStore<any>()((set, get, store) => {
    const initialStoreState: any = {
      ...createSlice(set, get, store),
    };

    return initialStoreState;
  });

  return store;
};
