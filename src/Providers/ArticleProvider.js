import { createContext } from "react";

export const ArticlesContext = createContext();

export default function ArticlesProvider({ children }) {
  return (
    <ArticlesContext.Provider value="">{children}</ArticlesContext.Provider>
  );
}
