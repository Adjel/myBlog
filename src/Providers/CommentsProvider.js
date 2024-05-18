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
      // Get comments
      const ref = collection(db, "articles", currentArticle.id, "comments");
      const q = query(ref);

      // Get all comments from article
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const articleComments = [];
        querySnapshot.forEach((doc) => {
          // Set each comment
          articleComments.push({
            id: doc.id,
            auth: getComAuth(doc.data().authorId),
            ...doc.data(),
          });
        });
        console.log(articleComments);
        setComments(articleComments);
      });
      return () => {
        unsubscribe();
      };
    }
  });

  async function getComAuth(authorId) {
    // Get profile doc ref by comment authorId
    const docRef = doc(db, "profiles", authorId);
    await getDoc(docRef).then((docSnap) => {
      if (docSnap.exists()) {
        console.log(docSnap.data());
        return docSnap.data().name;
      }
    });
  }

  return (
    <CommentsContext.Provider value={{ comments }}>
      {children}
    </CommentsContext.Provider>
  );
}
