import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserProvider";
import { ArticlesContext } from "./ArticleProvider";
import {
  collection,
  onSnapshot,
  doc,
  getDoc,
  db,
  query,
  addDoc,
  serverTimestamp,
  deleteDoc,
  updateDoc,
} from "@/Firebase";
import { notify } from "@/app/page";

export const CommentsContext = createContext();

export default function CommentsProvider({ children }) {
  const [comments, setComments] = useState([]);

  const { currentArticle } = useContext(ArticlesContext);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (currentArticle) {
      // Get all comments from the article ref
      const ref = collection(db, "articles", currentArticle.id, "comments");
      const q = query(ref);

      // Get all comments from article
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const articleComments = [];
        querySnapshot.forEach((doc) => {
          // Set each comment
          articleComments.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        // We have comments, but we need comments auth;
        getComsWithAuth(articleComments);
      });
      return () => {
        // Avoid memory leaks
        unsubscribe();
      };
    }
  }, [currentArticle]);

  async function getComsWithAuth(articleComments) {
    // we will wait all promise ended before setting commentsWithAuth
    const commentsWithAuth = await Promise.all(
      // for each com, get the auth calling getComAuth in an asynchronous context/thread
      articleComments.map(async (com) => {
        // waiting for result from getComAuth
        const name = await getComAuth(com);
        return {
          ...com,
          auth: name,
        };
      })
    );

    setComments(commentsWithAuth);
  }
  /*
  async function getComsWithAuth(articleComments) {
    const commentsWithAuth = [];

    // For each comment, we will fetch the auth
    await articleComments.forEach((com) => {
      // After retrieve auth, we set each comments and add auth name
      getComAuth(com).then((name) => {
        commentsWithAuth.push({
          ...com,
          auth: name,
        });
      });
    });
    // Now we can set comments state with all data
    setComments(commentsWithAuth);
  }
  */

  // Return the auth for a com
  async function getComAuth(com) {
    const docRef = doc(db, "profiles", com.authorId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return await docSnap.data().name;
    } else {
      // The have to never happen
      console.log("this com don't have any auth");
    }
  }

  async function handleNewComment(content) {
    if (user) {
      const ref = collection(db, "articles", currentArticle.id, "comments");
      await addDoc(ref, {
        content: content,
        createdAt: serverTimestamp(),
        authorId: user.uid,
      });
    } else {
      return notify("Vous devez vous connecter pour poster un commentaire");
    }
  }

  async function handleDelete(id) {
    if (!user)
      return notify("Vous devez être connecté pour supprimer un article");
    if (!currentArticle)
      return notify("Impossible de supprimer un commentaire non défini");
    if (!id)
      return notify(
        "Impossible de supprimer l'article car celui-ci n'existe pas"
      );
    try {
      const ref = doc(db, "articles", currentArticle.id, "comments", id);
      await deleteDoc(ref).then(() => {
        notify("Le commentaire à bien été supprimé");
      });
    } catch (e) {
      return notify(`L'erreur ${e} s'est produite`);
    }
  }

  async function handleUpdate(updatedContent, id) {
    if (!currentArticle)
      return notify(
        "Modification impossible car le commentaire ou l'article n'est pas disponible"
      );
    if (!user)
      return notify("Vous devez être connecté pour modifier un commentaire");
    if (!id)
      return notify(
        "Impssible de modifier le commentaire car il n'existe pas ou plus"
      );
    const ref = doc(db, "articles", currentArticle.id, "comments", id);

    try {
      await updateDoc(ref, {
        content: updatedContent,
      });
    } catch (e) {
      notify(`L'erreur ${e} est survenue :/`);
    }
  }

  return (
    <CommentsContext.Provider
      value={{ comments, handleNewComment, handleDelete, handleUpdate }}
    >
      {children}
    </CommentsContext.Provider>
  );
}
