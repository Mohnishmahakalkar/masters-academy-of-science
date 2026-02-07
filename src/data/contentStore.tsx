import { createContext, useContext, useMemo, useState } from "react";
import baseContent from "./content.json";

export type Content = typeof baseContent;


type ContentContextValue = {
  content: Content;
  setContent: (next: Content) => void;
  baseContent: Content;
};

const ContentContext = createContext<ContentContextValue | null>(null);

export const ContentProvider = ({ children }: { children: React.ReactNode }) => {
  const [content, setContentState] = useState<Content>(baseContent);

  const setContent = (next: Content) => {
    setContentState(next);
  };

  const value = useMemo(
    () => ({
      content,
      setContent,
      baseContent,
    }),
    [content]
  );

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
};

export const useContent = () => {
  const ctx = useContext(ContentContext);
  if (!ctx) {
    throw new Error("useContent must be used within ContentProvider");
  }
  return ctx;
};
