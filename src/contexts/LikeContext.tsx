"use client";

import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

type LikeContextValue = {
  likes: number;
  setLikes: Dispatch<SetStateAction<number>>;
};

const LikeContext = createContext<LikeContextValue | undefined>(undefined);

export function LikeProvider({ children }: { children: ReactNode }) {
  const [likes, setLikes] = useState(0);

  return (
    <LikeContext.Provider value={{ likes, setLikes }}>
      {children}
    </LikeContext.Provider>
  );
}

export function useLikes() {
  const ctx = useContext(LikeContext);
  if (!ctx) {
    throw new Error("useLikes must be used within LikeProvider");
  }
  return ctx;
}
