import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import styled from "styled-components";
import MenuModal from "../MenuModal";
import { COLORS } from "@/Constants";

function HamburgerButton() {
  const [isShowingModal, setIsShowingModal] = useState(false);

  return (
    <>
      <IconButton
        onClick={() => setIsShowingModal(!isShowingModal)}
      ></IconButton>
      {isShowingModal ? (
        <MenuModal setIsShown={() => setIsShowingModal(!isShowingModal)} />
      ) : undefined}
    </>
  );
}

const IconButton = styled(RxHamburgerMenu)`
  width: ${24 / 16}rem;
  height: ${24 / 16}rem;
  cursor: pointer;
  color: ${COLORS.Gray.buttonDarkGray};

  &:hover {
    color: black;
  }
`;

export default HamburgerButton;
