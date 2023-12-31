import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaSquareGithub } from "react-icons/fa6";
import { SiBloglovin } from "react-icons/si";
import { SiNotion } from "react-icons/si";
import ProfileCard from "../../profileCard/ProfileCard";

const SideBar = () => {
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
        <StProfileSection>
          <ProfileCard
            title={
              <>
                <FaSquareGithub />
              </>
            }
            content="https://github.com/hanjihyeong"
          />
          <ProfileCard
            title={
              <>
                <SiBloglovin />
              </>
            }
            content="https://blog.naver.com/scott_0801"
          />
          <ProfileCard
            title={
              <>
                <SiNotion />
              </>
            }
            content="https://devscott.notion.site/DevScott-d486455de6fd42e0ad1e195c9f3c2b67?pvs=4"
          />
        </StProfileSection>
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
  &.active {
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

const StProfileSection = styled.section`
  width: auto;
  height: auto;
  gap: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  margin-right: 15px;
`;
