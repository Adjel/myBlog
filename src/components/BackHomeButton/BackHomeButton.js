import React from "react";
import { COLORS, FONTWEIGHT, FONTFAMILY, FONTSIZE } from "@/Constants";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";

function BackHomeButton() {
  const router = useRouter();

  return (
    <HomeButton onClick={() => router.push("Home")}>
      <IoIosArrowBack />
      <Button>Retour à l`&aposacceuil</Button>
    </HomeButton>
  );
}

const HomeButton = styled.aside`
  flex: 1;
  display: flex;
  jsutify-content: start;
  align-items: center;
  color: ${COLORS.Gray.buttonDarkGray};
  cursor: pointer;

  &: hover {
    * {
      color: black;
    }
  }
`;

const Button = styled.div`
  background: none;
  border: none;
  font-weight: ${FONTWEIGHT.one};
  font-family: ${FONTFAMILY.lato};
  letter-spacing: 0.1rem;
  font-size: ${FONTSIZE.buttonMenu};

  text-transform: uppercase;
  cursor: pointer;
`;

export default BackHomeButton;
