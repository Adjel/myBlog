import { UserContext } from "@/Providers/UserProvider";
import LogForm from "@/components/LogForm";
import { useContext } from "react";

export default function Login() {
  const { handleLogin } = useContext(UserContext);

  return (
    <LogForm
      logHandler={handleLogin}
      hrefDescription="Pas encore de compte ? Créez un compte"
      href="Register"
      loginOrRegister="Login"
    />
  );
}
