import { ArticlesContext } from "@/Providers/ArticleProvider";
import ArticleItem from "@/components/ArticleItem";
import Header from "@/components/Header";
import { Timestamp } from "firebase/firestore";
import { useContext } from "react";
import styled from "styled-components";

export default function Home() {
  const { articles } = useContext(ArticlesContext);

  return (
    <Wrapper>
      <Header />
      <ArticleGrid>
        {articles.map(({ content, createdAt, title }) => (
          <div>
            {content}
            {new Date(createdAt).toLocaleDateString()}
            {title}
          </div>
          //<ArticleItem/>
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
`;
