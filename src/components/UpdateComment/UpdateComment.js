import { COLORS } from "@/Constants";
import { UserContext } from "@/Providers/UserProvider";
import React, { useContext } from "react";
import { LuPencil } from "react-icons/lu";
import styled from "styled-components";

function UpdateComment({ id, authorId, handleIsUpdating }) {
  const { user } = useContext(UserContext);

  return (
    user?.uid === authorId && (
      <Button onClick={handleIsUpdating}>
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

const Icon = styled(LuPencil)`
  width: ${28 / 16}rem;
  height: ${28 / 16}rem;
  cursor: pointer;
`;

export default UpdateComment;
