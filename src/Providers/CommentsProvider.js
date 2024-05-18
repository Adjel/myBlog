import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserProvider";
import { ArticlesContext } from "./ArticleProvider";
import {
  QuerySnapshot,
  collection,
  onSnapshot,
  doc,
  getDoc,
  db,
} from "@/Firebase";
import { query } from "firebase/firestore";

export const CommentsContext = createContext();

export default function CommentsProvider({ children }) {
  const [comments, setComments] = useState([]);

  const { currentArticle } = useContext(ArticlesContext);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (currentArticle) {
      const ref = collection(db, "articles", currentArticle.id, "comments");
      const q = query(ref);
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const articleComments = [];
        querySnapshot.forEach((doc) => {
          articleComments.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setComments(articleComments);
      });
      return () => {
        unsubscribe();
      };
    }
  });

  return (
    <CommentsContext.Provider value={{ comments }}>
      {children}
    </CommentsContext.Provider>
  );
}
