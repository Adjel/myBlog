import React from "react";
import { COLORS, FONTFAMILY, FONTSIZE, FONTWEIGHT } from "@/Constants";
import styled from "styled-components";
import DeleteCommentButton from "../DeleteCommentButton";

function CommentItem({ auth, id, createdAt, content, authorId }) {
  return (
    <Section>
      <DeleteCommentButton id={id} authorId={authorId} />
      <Auth>{auth}</Auth>
      <Date>{createdAt}</Date>
      <Content>{content}</Content>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${36 / 16}rem 0;
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

export default CommentItem;
