import React, { useContext, useState } from "react";
import { COLORS, FONTFAMILY, FONTSIZE, FONTWEIGHT } from "@/Constants";
import styled from "styled-components";
import DeleteCommentButton from "../DeleteCommentButton";
import UpdateComment from "../UpdateComment";
import { CommentsContext } from "@/Providers/CommentsProvider";
import { notify } from "@/app/page";

function CommentItem({ auth, id, createdAt, content, authorId }) {
  const [updatedContent, setUpdateContent] = useState(content);
  const [isUpdating, setIsUpdating] = useState(false);

  const { handleUpdate } = useContext(CommentsContext);

  function handleOncChange(event) {
    setUpdateContent(event.target.value);
  }

  function handleOnSubmitUpdate(event) {
    event.preventDefault();
    if (updatedContent === "")
      return notify("Vous ne pouvez pas enregistrer un commentaire vide");
    handleUpdate(updatedContent, id);
    notify("Votre commentaire à été modifié avec succès");
    setIsUpdating(!isUpdating);
  }

  return (
    <Section>
      {!isUpdating && (
        <ButtonsWrapper>
          <UpdateComment
            id={id}
            authorId={authorId}
            handleIsUpdating={() => setIsUpdating(!isUpdating)}
          />
          <DeleteCommentButton id={id} authorId={authorId} />
        </ButtonsWrapper>
      )}
      <Auth>{auth}</Auth>
      <Date>{createdAt}</Date>
      {!isUpdating ? (
        <Content>{content}</Content>
      ) : (
        <UpdateWrapper>
          {/* form ?*/}
          <textarea
            id="content"
            name="content"
            value={updatedContent}
            onChange={(event) => handleOncChange(event)}
          />
          <UpdateButtonWrapper>
            <UpdateButton onClick={() => setIsUpdating(!isUpdating)}>
              ANNULER
            </UpdateButton>
            <UpdateButton
              type="submit"
              onClick={(event) => handleOnSubmitUpdate(event)}
            >
              CONFIRMER
            </UpdateButton>
          </UpdateButtonWrapper>
        </UpdateWrapper>
      )}
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${12 / 16}rem;
  padding: ${1 / 16}rem 0;
`;

const ButtonsWrapper = styled.section`
  display: flex;
  justify-content: end;
  width: 100%;
  gap: ${12 / 16}rem;
  padding: ${8 / 16}rem 0;
`;

const Date = styled.div`
  font-weight: ${FONTWEIGHT.one};
  font-family: ${FONTFAMILY.lato};
  font-size: ${FONTSIZE.comments.content};
  color: ${COLORS.primary};
`;

const Auth = styled.h2`
  font-weight: ${FONTWEIGHT.three};
  font-family: ${FONTFAMILY.lato};
  font-size: ${FONTSIZE.comments.user};
`;

const Content = styled.p`
  font-weight: ${FONTWEIGHT.one};
  font-family: ${FONTFAMILY.lato};
  font-size: ${FONTSIZE.comments.content};
`;

const UpdateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${24 / 16}rem;
`;

const UpdateButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: ${48 / 16}rem;
`;

const UpdateButton = styled.button`
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

export default CommentItem;
