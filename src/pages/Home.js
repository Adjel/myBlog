import { ArticlesContext } from "@/Providers/ArticleProvider";
import { notify } from "@/app/page";
import ArticleItem from "@/components/ArticleItem";
import Header from "@/components/Header";
import { Timestamp } from "firebase/firestore";
import { useContext, useEffect } from "react";
import styled from "styled-components";

export default function Home() {
  const { articles } = useContext(ArticlesContext);

  useEffect(() => {
    // this must be never happen
    if (articles.length === 0) notify("Il n'a pas d'articles à lire");
  }, [articles]);

  return (
    <Wrapper>
      <Header />
      <ArticleGrid>
        {articles.map(({ content, createdAt, title, uid }) =>
          /*
        (
          <div key={id}>
            {content}
            {new Date(createdAt).toLocaleDateString()}
            {title}
          </div>
          //<ArticleItem/>
        )
        */
          {
            console.log(uid);
          }
        )}
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
