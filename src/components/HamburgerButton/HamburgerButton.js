import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import styled from "styled-components";
import MenuModal from "../MenuModal";

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
`;

export default HamburgerButton;
