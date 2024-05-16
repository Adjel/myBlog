import { UserContext } from "@/Providers/UserProvider";
import LogForm from "@/components/LogForm";
import { useContext } from "react";

export default function Login() {
  const { handleLogin } = useContext(UserContext);

  return (
    <LogForm
      logHandler={handleLogin}
      redirection="Register"
      loginOrRegister="Login"
    />
  );
}
