"use client";
import styled from "styled-components";
import { COLORS, FONTFAMILY, FONTSIZE, FONTWEIGHT } from "@/Constants";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { ArticlesContext } from "@/Providers/ArticleProvider";
import HeaderComponent from "@/components/Header";
import { UserContext } from "@/Providers/UserProvider";
import { notify } from "@/app/page";
import BackHomeButton from "@/components/BackHomeButton";

export default function UpdateArticle() {
  const { fetchArticle, currentArticle, handleUpdateArticle } =
    useContext(ArticlesContext);

  const [article, setArticle] = useState({
    title: currentArticle?.title,
    subtitle: currentArticle?.subtitle,
    content: currentArticle?.content,
    createdAt: currentArticle?.createdAt,
    id: currentArticle?.id,
  });

  const { user } = useContext(UserContext);
  const router = useRouter();
  const { docId } = router.query;

  useEffect(() => {
    if (!user) router.push("Home");
    fetchArticle(docId);
  }, [user]);

  function handleOnChangeArticle(event) {
    const { name, value } = event.target;
    setArticle({
      ...article,
      [name]: value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (
      article.title === "" ||
      article.subtitle === "" ||
      article.content === ""
    )
      return notify("Il est impossible de sauvegarder un élément vide");
    await handleUpdateArticle(article);
  }

  return (
    <>
      <HeaderComponent />
      <CreateArticleHeader>
        <BackHomeButton />
        <ModifyArticleHeader>
          <H1>Modifie ton article</H1>
        </ModifyArticleHeader>
        <H1centerDiv />
      </CreateArticleHeader>
      <Section>
        <Label htmlFor="title">TON TITRE</Label>
        <Input
          type="text"
          id="title"
          name="title"
          value={article.title}
          onChange={(event) => handleOnChangeArticle(event)}
        ></Input>
        <Label htmlFor="subtitle">TON SOUS-TITRE</Label>
        <Input
          type="text"
          id="subtitle"
          name="subtitle"
          value={article?.subtitle}
          onChange={(event) => handleOnChangeArticle(event)}
        ></Input>
        <Label htmlFor="content">TON ARTICLE</Label>
        <ContentParagInput
          type="text"
          id="content"
          name="content"
          value={article?.content}
          onChange={(event) => handleOnChangeArticle(event)}
        ></ContentParagInput>
        <SubmitButton type="submit" onClick={(event) => handleSubmit(event)}>
          MODIFIER
        </SubmitButton>
      </Section>
    </>
  );
}

const ModifyArticleHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CreateArticleHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: baseline;
  width: 100%;
`;

const H1centerDiv = styled.div`
  flex: 1;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${24 / 16}rem;
`;

const H1 = styled.h1`
  font-weight: ${FONTWEIGHT.one};
  font-family: ${FONTFAMILY.lato};
  letter-spacing: 0.1rem;
  font-size: ${FONTSIZE.h1};
  color: black;
  text-transform: uppercase;
`;

const Label = styled.label`
  font-weight: ${FONTWEIGHT.one};
  font-family: ${FONTFAMILY.lato};
  letter-spacing: 0.1rem;
  font-size: ${FONTSIZE.h2};
  color: ${COLORS.Gray.buttonDarkGray};
  text-transform: uppercase;
`;

const Input = styled.input`
  border: 1px solid ${COLORS.Gray.mediumGray};
  border-radius: 4px;
  min-width: 80%;
  min-height: ${34 / 16}rem;
  overflow: auto;

  * {
    font-family: ${FONTFAMILY.lato};
    font-size: ${FONTSIZE.h2};
    font-weight: ${FONTWEIGHT.one};
    color: ${COLORS.Gray.mediumGray};
  }
`;

const ContentParagInput = styled.textarea`
  border: 1px solid ${COLORS.Gray.mediumGray};
  border-radius: 4px;
  min-height: ${286 / 16}rem;
  min-width: 80%;

  * {
    text-size: ${FONTSIZE.parag};
    font-family: ${FONTFAMILY.lato};
    font-weight: ${FONTWEIGHT.one};
    font-size: ${FONTSIZE.parag};
  }
`;

const SubmitButton = styled.button`
  min-width: ${72 / 16}rem;
  min-height: ${38 / 16}rem;
  background: black;
  border: none;
  font-weight: ${FONTWEIGHT.one};
  font-family: ${FONTFAMILY.lato};
  letter-spacing: 0.1rem;
  font-size: ${FONTSIZE.buttonMenu};
  color: ${COLORS.Gray.buttonLightGray};
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    color: black;
    background: ${COLORS.primary};
  }
`;
