import { UserContext } from "@/Providers/UserProvider";
import { ArticlesContext } from "@/Providers/ArticleProvider";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { FONTFAMILY, FONTSIZE } from "@/Constants";

function AuthorComponent() {
  const [author, setAuthor] = useState();

  const { currentArticle } = useContext(ArticlesContext);
  const { handleFetchProfile } = useContext(UserContext);

  useEffect(() => {
    async function getAuhor() {
      setAuthor(await handleFetchProfile(currentArticle?.userId));
    }

    getAuhor();
  }, [currentArticle]);

  return (
    <Section>
      <Author>{author?.name}</Author>
      <AuthorDesc>{author?.description}</AuthorDesc>
    </Section>
  );
}

const Author = styled.h3`
  font-size: ${FONTSIZE.author};
  font-family: ${FONTFAMILY.lato};
  margin: 0;
`;

const AuthorDesc = styled.p`
  font-size: ${FONTSIZE.parag};
  font-family: ${FONTFAMILY.lato};
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin: 0;
`;

export default AuthorComponent;
