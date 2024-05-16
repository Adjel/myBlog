import { auth, createUserWithEmailAndPassword } from "../Firebase";
import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState();
  const [isAuth, setIsAuth] = useState(false);

  async function handleRegister({ email, password }) {
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
