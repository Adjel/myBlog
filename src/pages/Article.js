import styled from "styled-components";

export default function Article() {
  return <>article</>;
}

const ContentParag = styled.p`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-size: ${FONTSIZE.parag};
`;
