import { COLORS, FONTFAMILY, FONTWEIGHT, FONTSIZE } from "@/Constants";
import { useRouter } from "next/navigation";
import React from "react";
import styled from "styled-components";

function ArticleItem({ createdAt, title, subtitle, id }) {
  const router = useRouter();

  function handleOnReadMore(event) {
    event.preventDefault();
    router.push({
      pathname: "Article",
      query: { docId: id },
    });
  }

  return (
    <>
      <Wrapper>
        <article>
          <Header>
            <H1>{title}</H1>
            <SubtitleH2>{subtitle}</SubtitleH2>
            <DateWrapper>{createdAt}</DateWrapper>
          </Header>
        </article>
        <ButtonWrapper>
          <ReadMoreButton onClick={(event) => handleOnReadMore(event)}>
            Lire la suite
          </ReadMoreButton>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 90%;
  gap: ${8 / 16}rem;
  padding: ${24 / 16}rem;
  background: ${COLORS.Gray.articleBackground};
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: ${22 / 16}rem;
  text-align: center;
  padding: 0;
`;

const SubtitleH2 = styled.h2`
  font-size: ${16 / 16}rem;
  font-family: ${FONTFAMILY.lato};
  font-weight: ${FONTWEIGHT.one};
  text-align: start;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

const DateWrapper = styled.div`
  color: ${COLORS.primary};
  font-weight: ${FONTWEIGHT.one};
  font-family: ${FONTFAMILY.lato};
`;

const ButtonWrapper = styled.aside`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
`;

const ReadMoreButton = styled.button`
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
    color: ${COLORS.primary};
  }
`;

export default ArticleItem;
