import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserProvider";
import { addDoc, collection, db, onSnapshot } from "@/Firebase";
import { serverTimestamp } from "firebase/firestore";
import { notify } from "@/app/page";

export const ArticlesContext = createContext();

export default function ArticlesProvider({ children }) {
  const [articles, setArticles] = useState([]);

  const { user } = useContext(UserContext);

  useEffect(() => {
    const ref = collection(db, "articles");
    const unsubscribe = onSnapshot(ref, (querySnapshot) => {
      const articles = [];
      querySnapshot.forEach((doc) => {
        articles.push({
          id: doc.id,
          ...doc.data(),
        });
        setArticles(articles);
      });
    });

    return () => {
      unsubscribe();
    };
  }, []);

  async function handleNewArticle({ title, content, subtitle }) {
    if (user) {
      try {
        const ref = collection(db, "articles");
        await addDoc(ref, {
          title: title,
          subtitle: subtitle,
          content: content,
          createdAt: serverTimestamp(),
          id: user.uid,
        }).then(() => {
          notify("Bravo, Ton article a été créé !");
        });
      } catch (error) {
        notify(
          `Désolé, l'erreur "${error}" s'est produite, votre article n'a pas pu être crée `
        );
      }
    } else {
      notify("Désolé, tu dois être connecté pour écrire un article");
    }
  }

  return (
    <ArticlesContext.Provider value={{ articles, handleNewArticle }}>
      {children}
    </ArticlesContext.Provider>
  );
}
