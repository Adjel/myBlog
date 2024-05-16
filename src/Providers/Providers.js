"use client";
import UserProvider from "./UserProvider";
import ArticlesProvider from "./ArticleProvider";
import CommentsProvider from "./CommentsProvider";

export default function Providers({ children }) {
  return (
    <UserProvider>
      <ArticlesProvider>
        <CommentsProvider>{children}</CommentsProvider>
      </ArticlesProvider>
    </UserProvider>
  );
}
