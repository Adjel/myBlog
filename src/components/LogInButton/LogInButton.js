import React from "react";
import { useContext } from "react";
import { UserContext } from "@/Providers/UserProvider";
import Link from "next/link";
import styled from "styled-components";
import HamburgerButton from "../HamburgerButton";
import { COLORS, FONTFAMILY, FONTSIZE, FONTWEIGHT } from "@/Constants";

function LogInButton() {
  const { user } = useContext(UserContext);
  return user ? (
    <HamburgerButton />
  ) : (
    <Button>
      <LoginButton href="Login">Log in</LoginButton>{" "}
    </Button>
  );
}

const Button = styled.button`
  background: none;
  border: none;
`;

const LoginButton = styled(Link)`
  text-decoration: none;
  font-weight: ${FONTWEIGHT.one};
  font-family: ${FONTFAMILY.lato};
  letter-spacing: 0.1rem;
  font-size: ${FONTSIZE.buttonMenu};
  color: ${COLORS.Gray.buttonDarkGray};
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;

export default LogInButton;
