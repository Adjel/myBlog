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

export const CommentsContext = createContext();

export default function CommentsProvider({ children }) {
  const [comments, setComments] = useState([]);

  const { currentArticle } = useContext(ArticlesContext);
  const { user } = useContext(UserContext);

  useEffect(() => {
    let unsubscribe;

    if (currentArticle) {
      fetchComments();
    }

    async function fetchComments() {
      if (currentArticle) {
        const ref = collection(db, "comments");
        const docRef = doc(db, "profiles", currentArticle.userId);
        const docSnap = await getDoc(docRef);
        unsubscribe = onSnapshot(ref, (querySnapshot) => {
          const allComments = [];
          querySnapshot.forEach((doc) => {
            if (docSnap.exists()) {
              allComments.push({
                id: doc.id,
                ...doc.data(),
                auth: docSnap.data().name,
              });
            }
          });

          setComments(allComments);
        });
      }
    }

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [currentArticle]);

  return (
    <CommentsContext.Provider value={{ comments }}>
      {children}
    </CommentsContext.Provider>
  );
}
