import { COLORS, FONTWEIGHT, FONTFAMILY, FONTSIZE } from "@/Constants";
import { ArticlesContext } from "@/Providers/ArticleProvider";
import { UserContext } from "@/Providers/UserProvider";
import { notify } from "@/app/page";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import BackHomeButton from "@/components/BackHomeButton";

export default function CreatArticle() {
  const [article, setArticle] = useState({
    title: "",
    subtitle: "",
    content: "",
  });

  const { user } = useContext(UserContext);
  const { handleNewArticle } = useContext(ArticlesContext);

  const router = useRouter();

  function handleOncChange(event) {
    const { value, name } = event.target;
    setArticle({
      ...article,
      [name]: value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!user)
      return notify("Désolé, tu dois être connecté pour écrire un article");
    await handleNewArticle(article);
  }

  useEffect(() => {
    if (!user) {
      router.push("Home");
      // Il faudrait ici sauvergader les donées en cours pour que l'utilisateur n'aie pas à tout recommencer
      // Have to save current inputs to preserve user to have to write all again
      return notify("Vous devez être connecté pour écrire un article");
    }
  }, [user]);

  return (
    <Wrapper>
      <CreateArticleHeader>
        <BackHomeButton />
        <HeaderH1>Ecris ton article ici</HeaderH1>
        <H1centerDiv />
      </CreateArticleHeader>
      <BackgroundWrapper>
        <Form>
          <Label htmlFor="title">ton titre:</Label>
          <Input
            type="text"
            id="title"
            name="title"
            value={article.title}
            onChange={(event) => handleOncChange(event)}
          ></Input>
          <Label htmlFor="subtitle">ton sous-titre (optionnel):</Label>
          <Input
            type="text"
            id="subtitle"
            name="subtitle"
            value={article.subtitle}
            onChange={(event) => handleOncChange(event)}
          ></Input>
          <Label htmlFor="content">ton article:</Label>
          <InputArea
            type="text"
            id="content"
            name="content"
            value={article.content}
            onChange={(event) => handleOncChange(event)}
          ></InputArea>
          <SubmitButton type="submit" onClick={(event) => handleSubmit(event)}>
            POSTER
          </SubmitButton>
        </Form>
      </BackgroundWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${24 / 16}rem;
`;

const BackgroundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: ${28 / 16}rem;
  width: 90%;
  min-height: 90vh;
  padding: ${12 / 16}rem;
  background: ${COLORS.Gray.lightGray};
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

const HeaderH1 = styled.h1`
  flex: 1;
  font-weight: ${FONTWEIGHT.one};
  font-family: ${FONTFAMILY.lato};
  letter-spacing: 0.1rem;
  font-size: ${FONTSIZE.h1};
  color: black;
  text-transform: uppercase;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${16 / 16}rem;
  min-width: 95%;
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
  min-height: ${64 / 16}rem;
  overflow: auto;
`;

const InputArea = styled.textarea`
  border: 1px solid ${COLORS.Gray.mediumGray};
  border-radius: 4px;
  min-height: ${286 / 16}rem;
  min-width: 80%;
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
