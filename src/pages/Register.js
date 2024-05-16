"use client";
import { useContext } from "react";
import { UserContext } from "@/Providers/UserProvider";

import LogForm from "@/components/LogForm";

export default function Register() {
  const { handleRegister } = useContext(UserContext);

  return (
    <LogForm
      logHandler={handleRegister}
      redirection="Home"
      loginOrRegister="Register"
    />
  );
}
