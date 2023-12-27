import styled from "styled-components";
import HTML from "../../techStack/html5.png";
import CSS from "../../techStack/css.png";
import JS from "../../techStack/js.png";
import REACT from "../../techStack/react.png";
import STYLED from "../../techStack/styled-component.png";
import REDUX from "../../techStack/redux.png";
import AXIOS from "../../techStack/axios-icon.svg";
import GITHUB from "../../techStack/github.png";
import QUERY from "../../techStack/react-query.png";
import TS from "../../techStack/ts.png";
import VSCODE from "../../techStack/vscode.jpg";
import VITE from "../../techStack/vite.jpg";
import VERCEL from "../../techStack/vercel.png";

const Tech = () => {
  return (
    <StContainer>
      <StTitle>🛠️Tech Stack🛠️</StTitle>
      <StFamilierSection>
        <StImgContainer>
          <StImg src={HTML} />
          <StImgText>Familier</StImgText>
        </StImgContainer>
        <StImgContainer>
          <StImg src={CSS} />
          <StImgText>Familier</StImgText>
        </StImgContainer>
        <StImgContainer>
          <StImg src={JS} />
          <StImgText>Familier</StImgText>
        </StImgContainer>
        <StImgContainer>
          <StImg src={REACT} />
          <StImgText>Familier</StImgText>
        </StImgContainer>
      </StFamilierSection>
      <StFamilierSection>
        <StImgContainer>
          <StImg src={STYLED} />
          <StImgText>Familier</StImgText>
        </StImgContainer>
        <StImgContainer>
          <StImg src={AXIOS} />
          <StImgText>Familier</StImgText>
        </StImgContainer>
        <StImgContainer>
          <StImg src={GITHUB} />
          <StImgText>Familier</StImgText>
        </StImgContainer>
        <StImgContainer>
          <StImg src={VSCODE} />
          <StImgText>Familier</StImgText>
        </StImgContainer>
      </StFamilierSection>
      <StFamilierSection>
        <StImgContainer>
          <StImg src={QUERY} />
          <StImgText>Less Familier</StImgText>
        </StImgContainer>
        <StImgContainer>
          <StImg src={TS} />
          <StImgText>Less Familier</StImgText>
        </StImgContainer>
        <StImgContainer>
          <StImg src={VITE} />
          <StImgText>Less Familier</StImgText>
        </StImgContainer>
        <StImgContainer>
          <StImg src={VERCEL} />
          <StImgText>Less Familier</StImgText>
        </StImgContainer>
        <StImgContainer>
          <StImg src={REDUX} />
          <StImgText>Less Familier</StImgText>
        </StImgContainer>
      </StFamilierSection>
    </StContainer>
  );
};

export default Tech;

const StContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #6e787d;
`;

const StTitle = styled.section`
  font-size: 40px;
  font-weight: bold;
  width: 70%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 2px solid white;
  color: white;
`;

const StImgContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const StImgText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;
`;

const StImg = styled.img`
  min-width: 100%;
  min-height: 100%;
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 1rem;
  border: 1px solid black;
  &:hover {
    cursor: pointer;
    filter: brightness(20%);
    & ~ ${StImgText} {
      opacity: 1;
    }
  }
`;

const StFamilierSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  gap: 20px;
`;
