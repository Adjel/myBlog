import React from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { COLORS } from "@/Constants";

function MenuModal({ setIsShown }) {
  return (
    <PageBackground>
      <Modal>
        <CloseIconWrapper>
          <CloseIcon onClick={setIsShown} />
        </CloseIconWrapper>
        <ButtonsWrapper>
          <MenuButton>AJOUTER</MenuButton>
          <MenuButton>MODIFIER</MenuButton>
          <MenuButton>SUPPRIMER</MenuButton>
        </ButtonsWrapper>
      </Modal>
    </PageBackground>
  );
}

const PageBackground = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: ${COLORS.Gray.transparentBackground};
`;

const Modal = styled.aside`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 40%;
  height: 100%;
  background: white;
`;

const CloseIconWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
  align-items: center;
  padding-right: ${48 / 16}rem;
`;

const ButtonsWrapper = styled.div`
  flex: 8;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: ${64 / 16}rem;
  align-items: start;
  padding: ${64 / 16}rem 0 0 ${48 / 16}rem;
`;

const CloseIcon = styled(IoClose)`
  width: ${24 / 16}rem;
  height: ${24 / 16}rem;
  cursor: pointer;
`;

const MenuButton = styled.button``;

export default MenuModal;
