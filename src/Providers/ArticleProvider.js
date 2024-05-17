import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserProvider";
import {
  addDoc,
  collection,
  db,
  onSnapshot,
  getDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "@/Firebase";
import { serverTimestamp } from "firebase/firestore";
import { notify } from "@/app/page";

export const ArticlesContext = createContext();

export default function ArticlesProvider({ children }) {
  const [articles, setArticles] = useState([]);
  const [currentArticle, setCurrentArticle] = useState();

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

        if (articles.length === 0)
          return notify("Il n'a pas d'articles à lire");

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
          userId: user.uid,
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

  async function fetchArticle(id) {
    const ref = doc(db, "articles", id);
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {
      return setCurrentArticle({
        id: docSnap.id,
        ...docSnap.data(),
      });
    } else {
      return notify("Ce document n'existe pas");
    }
  }

  function resetCurrentArticle() {
    setCurrentArticle();
  }

  async function handleDeleteArticle() {
    try {
      if (currentArticle) {
        await deleteDoc(doc(db, "articles", currentArticle.id));
        setCurrentArticle();
        notify("L'article à bien été supprimé");
        return true;
      }
    } catch (e) {
      notify(`L'article n'a pas pu être supprimé, ${e} est survenu`);
      return false;
    }
  }

  async function handleUpdateArticle({ title, subtitle, content, id }) {
    try {
      if (id === currentArticle.id) {
        const docRef = doc(db, "articles", id);
        await updateDoc(docRef, {
          title,
          subtitle,
          content,
        });
        return notify("L'article à été modifié avec succès !");
      } else {
        return notify(
          "Impossible de modifier l'article car un problème est survenue"
        );
      }
    } catch (e) {
      return notify(`Désolé, ${e} est survenue`);
    }
  }

  return (
    <ArticlesContext.Provider
      value={{
        articles,
        handleNewArticle,
        fetchArticle,
        currentArticle,
        resetCurrentArticle,
        handleDeleteArticle,
        handleUpdateArticle,
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
}
