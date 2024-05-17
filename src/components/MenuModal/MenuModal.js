import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { COLORS, FONTFAMILY, FONTSIZE, FONTWEIGHT } from "@/Constants";
import { useRouter } from "next/navigation";
import { UserContext } from "@/Providers/UserProvider";
import { ArticlesContext } from "@/Providers/ArticleProvider";
import { notify } from "@/app/page";

function MenuModal({ setIsShown }) {
  const { user, handleDisconnect } = useContext(UserContext);
  const { currentArticle, handleDeleteArticle } = useContext(ArticlesContext);

  const router = useRouter();

  async function handleOnDisconnect() {
    await handleDisconnect();
  }

  const HandleAddArtcicleClick = (e) => {
    e.preventDefault();
    router.push("CreateArticle");
  };

  function handleModifyArticle(event) {
    event.preventDefault();
    router.push({
      pathname: "UpdateArticle",
      query: { docId: currentArticle.id },
    });
  }

  async function onDeleteArticle(event) {
    event.preventDefault();
    if (await handleDeleteArticle()) router.push("Home");
  }

  return (
    <PageBackground>
      <Modal>
        <CloseIconWrapper>
          <CloseIcon onClick={setIsShown} />
        </CloseIconWrapper>
        <ButtonsWrapper>
          {user && (
            <MenuButton onClick={(e) => HandleAddArtcicleClick(e)}>
              ajouter un article
            </MenuButton>
          )}
          {user?.uid === currentArticle?.userId && (
            <>
              <MenuButton onClick={(event) => handleModifyArticle(event)}>
                MODIFIER l'article
              </MenuButton>
              <MenuButton onClick={(event) => onDeleteArticle(event)}>
                SUPPRIMER l'article
              </MenuButton>
            </>
          )}
        </ButtonsWrapper>
        <ButtonsWrapper style={{ flex: 2 }}>
          <MenuButton onClick={() => handleOnDisconnect()}>
            Se déconnecter
          </MenuButton>
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
  flex: 1.5;
  display: flex;
  justify-content: end;
  align-items: center;
  padding-right: ${48 / 16}rem;
`;

const ButtonsWrapper = styled.div`
  flex: 6;
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
  color: ${COLORS.Gray.buttonDarkGray};

  &:hover {
    color: black;
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
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

export default MenuModal;
