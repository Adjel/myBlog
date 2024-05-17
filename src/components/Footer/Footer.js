import React from "react";
import styled from "styled-components";
import { COLORS, FONTFAMILY, FONTSIZE } from "@/Constants";
import HomeButton from "../HomeButton";

function Footer() {
  return (
    <FooterWrapper>
      <HomeButton />
      <InfoWrapper>
        <Content>
          Influenceur Automobile Moto Blog Automobile, Moto et Lifestyle Top
          instagram car accounts Drainage lymphatique Renata França Strasbourg
          Praticienne certifiée Renata França : drainage lymphatique, soin
          remodelant. Tout savoir sur la méthode Renata França et ses
          bienfaits... méthode Renata França et ses bienfaits... Drainage
          lymphatique Strasbourg
        </Content>
        <Content>TWITTER Mentions légales</Content>
      </InfoWrapper>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 90%;
  gap: ${16 / 16}rem;
  padding: ${36 / 16}rem;
  overflow: hidden;
`;

const InfoWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  gap: ${16 / 16}rem;
`;

const Content = styled.p`
  font-size: ${FONTSIZE.button};
  font-family: ${FONTFAMILY.lato};
  color: ${COLORS.Gray.darkGray};
  text-transform: uppercase;
  line-height: 1.3rem;
`;

export default Footer;
