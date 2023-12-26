import { Link } from "react-router-dom";
import styled from "styled-components";

const SideBar = () => {
  const lastUpdated = "2023/12/26";
  return (
    <StSideBar>
      <StContainer>
        <Link to="/">
          <StContent>Home</StContent>
        </Link>
        <Link to="/about">
          <StContent>About</StContent>
        </Link>
        <Link to="/projects">
          <StContent>Projects</StContent>
        </Link>
        <Link to="/tech">
          <StContent>Tech</StContent>
        </Link>
      </StContainer>
      <StContect>
        <StContectContent>devscott6685@gmail.com</StContectContent>
        <StContectContent>Last update: {lastUpdated}</StContectContent>
      </StContect>
    </StSideBar>
  );
};

export default SideBar;

const StSideBar = styled.section`
  width: 25vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #202224;
`;

const StContainer = styled.section`
  margin-top: 50px;
  width: auto;
  height: auto;
`;

const StContent = styled.h1`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  color: white;
  width: 120%;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const StContect = styled.section`
  width: auto;
  height: auto;
  margin-bottom: 15px;
`;

const StContectContent = styled.p`
  color: white;
`;
