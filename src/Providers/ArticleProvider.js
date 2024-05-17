import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserProvider";
import { collection, db, onSnapshot } from "@/Firebase";

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

  return (
    <ArticlesContext.Provider value={{ articles }}>
      {children}
    </ArticlesContext.Provider>
  );
}
