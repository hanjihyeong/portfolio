import styled from "styled-components";
import Project3Th from "../../assets/3thProject.png";
import Project2Th from "../../assets/2thProject.jpg";
import Portfolio from "../../assets/portfolio.png";
import ProjectCard from "../../components/projectCard/ProjectCard";

const Projects = [
  {
    title: "모임?모임!",
    date: "2023.11.27 - 12.22",
    desc: "사람들과 모임을 형성하여 서로의 목표 달성을 지원하고 의지를 다질 수 있는 플랫폼",
    link: "https://github.com/FE02-3ThProject/FrontEnd",
    image: Project3Th,
  },
  {
    title: "NewShop",
    date: "2023.11.13 - 11.27",
    desc: "백엔드와 협업연습을 위한 쇼핑몰 프로젝트",
    link: "https://github.com/Project02-SHOP/FrontEnd/tree/develop",
    image: Project2Th,
  },
  {
    title: "Han's Portfolio",
    date: "2023.12.26 -",
    desc: "취업을 위한 포트폴리오 작성",
    link: "https://github.com/hanjihyeong/portfolio",
    image: Portfolio,
  },
];

const Project = () => {
  return (
    <StContainer>
      {Projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </StContainer>
  );
};

export default Project;

const StContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(110, 120, 125, 0.5);
`;
