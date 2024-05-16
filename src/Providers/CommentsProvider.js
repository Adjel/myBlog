import { createContext } from "react";

export const CommentsContext = createContext();

export default function CommentsProvider({ children }) {
  return <CommentsContext.Provider>{children}</CommentsContext.Provider>;
}
