import { COLORS, FONTFAMILY, FONTWEIGHT, FONTSIZE } from "@/Constants";
import { UserContext } from "@/Providers/UserProvider";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { notify } from "@/app/page";
import { CommentsContext } from "@/Providers/CommentsProvider";

function AddCommentForm() {
  const [comment, setComment] = useState();

  const { comments, handleNewComment } = useContext(CommentsContext);

  const { user } = useContext(UserContext);
  const router = useRouter();

  function handleOnLogInClicked(event) {
    event.preventDefault();
    router.push("Home");
  }

  function handleOncChange(event) {
    if (!user)
      return notify("Vous devez vous connecter pour poster un commentaire");
    setComment(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!user) {
      return notify("Vous devez vous connecter pour poster un commentaire");
    }
    if (comment === "") {
      return notify("Il est impossible de poster un commentaire vide");
    }
    // handle comment already exist ?
    handleNewComment(comment);
    setComment("");
    notify("Bravo, votre commentaire a été posté !");
  }

  return (
    <Wrapper>
      <CreateArticleHeader>
        <HeaderH1>Partage ton avis !</HeaderH1>
      </CreateArticleHeader>
      <BackgroundWrapper>
        <Form>
          <Label htmlFor="content">ton commentaire:</Label>
          <InputArea
            type="text"
            id="content"
            name="content"
            value={comment}
            onChange={(event) => handleOncChange(event)}
          ></InputArea>
          {user ? (
            <SubmitButton
              type="submit"
              onClick={(event) => handleSubmit(event)}
            >
              POSTER LE COMMENTAIRE
            </SubmitButton>
          ) : (
            <SubmitButton onClick={handleOnLogInClicked}>
              SE CONNECTER
            </SubmitButton>
          )}
        </Form>
      </BackgroundWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${24 / 16}rem;
`;

const BackgroundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: ${28 / 16}rem;
  width: 90%;
  padding: ${12 / 16}rem;
  background: ${COLORS.Gray.lightGray};
`;

const CreateArticleHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: baseline;
  width: 100%;
`;

const HeaderH1 = styled.h1`
  font-weight: ${FONTWEIGHT.one};
  font-family: ${FONTFAMILY.lato};
  letter-spacing: 0.1rem;
  font-size: ${FONTSIZE.h1};
  color: black;
  text-transform: uppercase;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${16 / 16}rem;
  min-width: 95%;
`;

const Label = styled.label`
  font-weight: ${FONTWEIGHT.one};
  font-family: ${FONTFAMILY.lato};
  letter-spacing: 0.1rem;
  font-size: ${FONTSIZE.h2};
  color: ${COLORS.Gray.buttonDarkGray};
  text-transform: uppercase;
`;

const InputArea = styled.textarea`
  border: 1px solid ${COLORS.Gray.mediumGray};
  border-radius: 4px;
  min-height: ${286 / 16}rem;
  min-width: 80%;
`;

const SubmitButton = styled.button`
  min-width: ${72 / 16}rem;
  min-height: ${38 / 16}rem;
  background: black;
  border: none;
  font-weight: ${FONTWEIGHT.one};
  font-family: ${FONTFAMILY.lato};
  letter-spacing: 0.1rem;
  font-size: ${FONTSIZE.buttonMenu};
  color: ${COLORS.Gray.buttonLightGray};
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    color: black;
    background: ${COLORS.primary};
  }
`;

export default AddCommentForm;
