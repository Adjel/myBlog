import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserProvider";
import { addDoc, collection, db, onSnapshot } from "@/Firebase";
import { Timestamp, serverTimestamp } from "firebase/firestore";

export const ArticlesContext = createContext();

export default function ArticlesProvider({ children }) {
  const [articles, setArticles] = useState([]);

  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      const ref = collection(db, "users", user.uid, "articles");
      const unsubscribe = onSnapshot(ref, (querySnapshot) => {
        const articles = [];
        querySnapshot.forEach((doc) => {
          articles.push({
            id: doc.id,
            ...doc.data(),
          });

          console.log(articles);
          setArticles(articles);
        });
      });

      return () => {
        unsubscribe();
      };
    }
  }, [user]);

  async function handleNewArticle({ title, content }) {
    const ref = collection(db, "users", user.uid, "articles");
    const articleRef = await addDoc(ref, {
      title: title,
      content: content,
      createdAt: serverTimestamp(),
    });
    console.log("handleNewArticle in ArticleProvider", articleRef.id);
  }

  return (
    <ArticlesContext.Provider value={{ articles, handleNewArticle }}>
      {children}
    </ArticlesContext.Provider>
  );
}
