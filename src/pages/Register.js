import { useContext } from "react";
import { UserContext } from "@/Providers/UserProvider";
import LogForm from "@/components/LogForm";

export default function Register() {
  const { handleRegister } = useContext(UserContext);

  return (
    <LogForm
      logHandler={handleRegister}
      hrefDescription="Déjà membre ? Se connecter ici"
      href="Login"
      loginOrRegister="Register"
    />
  );
}
