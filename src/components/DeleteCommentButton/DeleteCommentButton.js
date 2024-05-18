import { COLORS } from "@/Constants";
import { CommentsContext } from "@/Providers/CommentsProvider";
import { UserContext } from "@/Providers/UserProvider";
import React, { useContext } from "react";
import { RiChatDeleteLine } from "react-icons/ri";
import styled from "styled-components";

function DeleteCommentButton({ id, authorId }) {
  const { handleDelete } = useContext(CommentsContext);
  const { user } = useContext(UserContext);

  return (
    user?.uid === authorId && (
      <Button onClick={() => handleDelete(id)}>
        <Icon />
      </Button>
    )
  );
}

const Button = styled.button`
  display: flex;
  align-self: end;
  justify-content: center;
  align-items: center;
  width: ${28 / 16}rem;
  height: ${28 / 16}rem;
  padding: 0;
  border: none;
  background: none;
  cursor: none;
  color: ${COLORS.Gray.buttonDarkGray};

  &:hover {
    color: ${COLORS.primary};
  }
`;

const Icon = styled(RiChatDeleteLine)`
  width: ${28 / 16}rem;
  height: ${28 / 16}rem;
  cursor: pointer;
`;

export default DeleteCommentButton;
