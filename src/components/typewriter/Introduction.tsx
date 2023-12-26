import {
  Cursor,
  useTypewriter,
  TypewriterHelper,
} from "react-simple-typewriter";
import styled from "styled-components";

const Introduction = () => {
  const words: string[] = [
    "재사용가능한 코드에 진심인",
    "새로운 기술스택을 배우는데 두려움이 없는",
  ];
  const [text]: [string, TypewriterHelper] = useTypewriter({
    words,
    loop: 10,
  });
  return (
    <StCotainer>
      <StContent>
        저는
        <br />
        <span>{text}</span>
        <Cursor />
        <br />
        개발자가 되고싶습니다.
      </StContent>
    </StCotainer>
  );
};

export default Introduction;

const StCotainer = styled.section`
  width: 1200px;
  height: auto;
  margin: 0 auto;
`;

const StContent = styled.div`
  font-size: 60px;
  font-weight: bold;
  color: white;
`;
