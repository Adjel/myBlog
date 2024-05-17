import { ArticlesContext } from "@/Providers/ArticleProvider";
import { notify } from "@/app/page";
import ArticleItem from "@/components/ArticleItem";
import HeaderComponent from "@/components/Header";
import { Timestamp } from "firebase/firestore";
import { useContext, useEffect } from "react";
import styled from "styled-components";

export default function Home() {
  const { articles, resetCurrentArticle } = useContext(ArticlesContext);

  useEffect(() => {
    resetCurrentArticle();
  }, []);

  return (
    <Wrapper>
      <HeaderComponent />
      <ArticleGrid>
        {articles.map(({ content, createdAt, title, subtitle, id }) => (
          <ArticleItem
            key={id}
            content={content}
            createdAt={new Date(createdAt).toLocaleDateString()}
            title={title}
            subtitle={subtitle}
            id={id}
          />
        ))}
      </ArticleGrid>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const ArticleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  gap: ${16 / 16}rem;
  padding: ${24 / 16}rem;
`;
