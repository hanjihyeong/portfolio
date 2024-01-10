import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaSquareGithub } from "react-icons/fa6";
import { SiBloglovin } from "react-icons/si";
import { SiNotion } from "react-icons/si";
import ProfileCard from "../../profileCard/ProfileCard";
import { useRecoilState } from "recoil";
import { activeLickState } from "../../../atoms";

const SideBar = () => {
  const [activeLink, setActiveLink] = useRecoilState(activeLickState);

  const handleNavLickClick = (path: string) => {
    setActiveLink(path);
  };

  return (
    <StSideBar>
      <StContainer>
        <Link to="/">
          {activeLink === "/" ? (
            <StContentActive>Home</StContentActive>
          ) : (
            <StContent onClick={() => handleNavLickClick("/")}>Home</StContent>
          )}
        </Link>
        <Link to="/about">
          {activeLink === "/about" ? (
            <StContentActive>About</StContentActive>
          ) : (
            <StContent onClick={() => handleNavLickClick("/about")}>
              About
            </StContent>
          )}
        </Link>
        <Link to="/projects">
          {activeLink === "/projects" ? (
            <StContentActive>Projects</StContentActive>
          ) : (
            <StContent onClick={() => handleNavLickClick("/projects")}>
              Projects
            </StContent>
          )}
        </Link>
        <Link to="/tech">
          {activeLink === "/tech" ? (
            <StContentActive>Tech</StContentActive>
          ) : (
            <StContent onClick={() => handleNavLickClick("/tech")}>
              Tech
            </StContent>
          )}
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
  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
    margin: 10px 10px 10px 10px;
  }
`;

const StContentActive = styled.h1`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  color: white;
  width: 120%;
  text-decoration: underline;
  cursor: pointer;
  @media (max-width: 800px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    width: 100%;
    text-decoration: underline;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
    margin: 10px 10px 10px 10px;
  }
`;

const StContect = styled.section`
  width: auto;
  height: auto;
  margin-bottom: 15px;
`;

const StContectContent = styled.p`
  color: white;
  @media (max-width: 800px) {
    display: none;
  }
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
  @media (max-width: 800px) {
    width: auto;
    height: auto;
    gap: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
  }
`;
