import styled from "styled-components";
import { useContext, useEffect } from "react";
import { CommentsContext } from "@/Providers/CommentsProvider";
import { ArticlesContext } from "@/Providers/ArticleProvider";
import CommentItem from "../CommentItem";

export default function CommentList() {
  const { comments } = useContext(CommentsContext);

  return (
    <Section>
      {comments.map(({ auth, authorId, createdAt, content, id }) => (
        <CommentItem
          auth={auth}
          authorId={authorId}
          createdAt={new Date(createdAt).toLocaleDateString()}
          content={content}
        />
      ))}
    </Section>
  );
}

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr;
`;
