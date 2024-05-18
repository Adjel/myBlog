import React from "react";
import { FONTFAMILY, FONTSIZE, FONTWEIGHT } from "@/Constants";
import styled from "styled-components";

function CommentItem({ auth, authorId, createdAt, content }) {
  return (
    <Section>
      <Auth>{auth}</Auth>
      <div>{createdAt}</div>
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

const Auth = styled.h2`
  font-weight: ${FONTWEIGHT.one};
  font-family: ${FONTFAMILY.lato};
`;

const Content = styled.p`
  font-weight: ${FONTWEIGHT.one};
  font-family: ${FONTFAMILY.lato};
  font-size: ${FONTSIZE.comments};
`;

export default CommentItem;
