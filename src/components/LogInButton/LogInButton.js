import React from "react";
import { useContext } from "react";
import { UserContext } from "@/Providers/UserProvider";
import Link from "next/link";
import styled from "styled-components";
import HamburgerButton from "../HamburgerButton";

function LogInButton() {
  const { user } = useContext(UserContext);
  return user ? (
    <HamburgerButton />
  ) : (
    <Button>
      <Link href="Login">Log in</Link>{" "}
    </Button>
  );
}

const Button = styled.button``;

const LoginButton = styled.div``;

export default LogInButton;
