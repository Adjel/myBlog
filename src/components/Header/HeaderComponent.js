import React from "react";
import styled from "styled-components";
import LogInButton from "../LogInButton";
import HomeButton from "../HomeButton";
import { COLORS } from "@/Constants";

function HeaderComponent() {
  return (
    <Wrapper>
      <HomeButton />
      <LogInButton />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  max-width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: ${8 / 16}rem ${48 / 16}rem;
  border-bottom: 1px solid ${COLORS.Gray.lightGray};
`;

export default HeaderComponent;
