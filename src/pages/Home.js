import Header from "@/components/Header";
import styled from "styled-components";

export default function Home() {
  return (
    <Wrapper>
      <Header />
      <>home</>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
