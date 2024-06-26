import styled from "styled-components";
import { COLORS, FONTFAMILY, FONTSIZE, FONTWEIGHT } from "@/Constants";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { ArticlesContext } from "@/Providers/ArticleProvider";
import AuthorComponent from "@/components/AuthorComponent";
import CommentList from "@/components/CommentList";
import HeaderComponent from "@/components/Header";
import AddCommentForm from "@/components/AddCommentForm";
import Footer from "@/components/Footer";

export default function Article() {
  const router = useRouter();
  const { docId } = router.query;

  const { fetchArticle, currentArticle } = useContext(ArticlesContext);

  useEffect(() => {
    fetchArticle(docId);
  }, []);

  return (
    <>
      <HeaderComponent />
      <PageWrapper>
        <article>
          <ArticleHeader>
            <Title>{currentArticle?.title}</Title>
            <Subtitle>{currentArticle?.subtitle}</Subtitle>
          </ArticleHeader>
          <ContentParag>{currentArticle?.content}</ContentParag>
        </article>
        <Divider />
        <section>
          <AuthorComponent />
          <Divider />
          <CommentList />
          <AddCommentForm />
        </section>
      </PageWrapper>
      <Footer />
    </>
  );
}

const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${16 / 8}rem;
  padding: ${16 / 8}rem;
`;

const ArticleHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-family: ${FONTFAMILY.lato};
  font-size: ${FONTSIZE.h1};
  font-weight: ${FONTWEIGHT.bold};
  text-align: center;
`;

const Subtitle = styled.h2`
  font-family: ${FONTFAMILY.lato};
  font-size: ${FONTSIZE.h2};
  font-weight: ${FONTWEIGHT.one};
  color: ${COLORS.Gray.mediumGray};
`;

const ContentParag = styled.p`
  text-size: ${FONTSIZE.parag};
  font-family: ${FONTFAMILY.lato};
  font-weight: ${FONTWEIGHT.one};
  font-size: ${FONTSIZE.parag};
`;

const Divider = styled.hr`
  border-top: 0.5px solid ${COLORS.Gray.lightGray};
  width: 100%;
`;
