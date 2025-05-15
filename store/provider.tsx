"use client";

import React, {
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { useStore } from "zustand";
import { createFormStore } from "@/store";

export type StoreApi = ReturnType<typeof createFormStore>;

export const StoreContext = React.createContext<StoreApi | undefined>(
  undefined
);

export interface StoreProviderProps {
  children: ReactNode;
  initialState?: any;
}

export const StoreProvider = ({
  children,
  initialState,
}: StoreProviderProps) => {
  const store = createFormStore(initialState);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const useBoundStore = <T,>(selector: (state: any) => T): T => {
  const store = useContext(StoreContext);

  if (!store) {
    throw new Error("useBoundStore must be used within a StoreProvider");
  }

  return useStore(store, selector);
};
