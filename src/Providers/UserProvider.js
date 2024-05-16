import { auth, createUserWithEmailAndPassword } from "../Firebase";
import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState();
  const [isAuth, setIsAuth] = useState(false);

  async function handleRegister({ email, password }, notify) {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        setUser(user);
        setIsAuth(true);
        // ...
      })
      .catch((error) => {
        console.log(error);
        if (error.message === "auth/invalid-email") {
          notify("L'email renseigné est invalide");
        }
        if (error.message === "auth/missing-password") {
          notify("Vous devez renseigner un mot de passe");
        }
        if (error.message === "auth/already-use-email") {
          notify("Cet email est déjà associé à un compte");
        }
        if (error.message === "auth/weak-password") {
          notify(
            "Votre mote de passe doit se composer au moins d'une majuscule, un caractère spécial, d'une minuscule,  d'un chiffre et d'au moins 8 caractères au total"
          );
        }
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  return (
    <UserContext.Provider value={{ user, isAuth, handleRegister }}>
      {children}
    </UserContext.Provider>
  );
}
