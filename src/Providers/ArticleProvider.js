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

  async function handleNewArticle({ title, content, subtitle }) {
    if (user) {
      const ref = collection(db, "users", user.uid, "articles");
      const articleRef = await addDoc(ref, {
        title: title,
        subtitle: subtitle,
        content: content,
        createdAt: serverTimestamp(),
        userId: user.uid,
      })
        .then(() => {
          notify("Bravo, Ton article a été créé !");
        })
        .then((error) => {
          notify(
            `Désolé, l'erreur "${error}" s'est produite, votre article n'a pas pu être crée `
          );
        });
    } else {
      notify("Désolé, vous devez être connecté pour écrire un article");
    }
  }

  return (
    <ArticlesContext.Provider value={{ articles, handleNewArticle }}>
      {children}
    </ArticlesContext.Provider>
  );
}
