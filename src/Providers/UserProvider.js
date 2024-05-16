import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../Firebase";
import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState();
  const [isAuth, setIsAuth] = useState(false);

  async function handleRegister({ email, password }, notify) {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        setUser(userCredential.user);
        setIsAuth(true);
      })
      .catch((error) => {
        console.log(error);
        if (error.message === "auth/invalid-email") {
          return notify("L'email renseigné est invalide");
        }
        if (error.message === "auth/missing-password") {
          return notify("Vous devez renseigner un mot de passe");
        }
        if (error.message === "auth/email-already-in-use") {
          return notify("Cet email est déjà associé à un compte");
        }
        if (error.message === "auth/weak-password") {
          return notify(
            "Votre mote de passe doit se composer au moins d'une majuscule, un caractère spécial, d'une minuscule,  d'un chiffre et d'au moins 8 caractères au total"
          );
        }
        return notify(error.code);
      });
  }

  async function handleLogin({ email, password }, notify) {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        setIsAuth(true);
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/mssing-email") {
          return notify("Vous devez renseigner email");
        }
        if (error.code === "auth/missing-password") {
          return notify("Vous devez renseigner un mot de passe");
        }
        if (error.code === "auth/invalid-credential") {
          return notify("L'email ou le mot de passe est invalide");
        }
        return notify(error.code);
      });
  }

  return (
    <UserContext.Provider value={{ user, isAuth, handleRegister, handleLogin }}>
      {children}
    </UserContext.Provider>
  );
}
