import styled from "styled-components";
import { COLORS } from "@/Constants";
import { useContext } from "react";
import { CommentsContext } from "@/Providers/CommentsProvider";
import CommentItem from "../CommentItem";

export default function CommentList() {
  const { comments } = useContext(CommentsContext);

  return (
    <Section>
      <header>
        {comments.length <= 1 ? (
          <h1>{comments.length} commentaire</h1>
        ) : (
          <h1>{comments.length} commentaires</h1>
        )}
      </header>
      {comments.map(({ auth, createdAt, content, authorId, id }) => (
        <>
          <Divider />
          <CommentItem
            key={id}
            auth={auth}
            createdAt={new Date(createdAt).toLocaleDateString()}
            content={content}
            onClickDelete={() => handleDelete(id)}
            authorId={authorId}
            id={id}
          />
        </>
      ))}
    </Section>
  );
}

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  border: 2px sloid blue;
`;

const Divider = styled.hr`
  border-top: 0.5px solid ${COLORS.Gray.lightGray};
  width: 100%;
`;
