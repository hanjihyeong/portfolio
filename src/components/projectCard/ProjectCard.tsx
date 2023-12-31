import { Link } from "react-router-dom";
import styled from "styled-components";

interface Project {
  key: string;
  project: {
    title: string;
    date: string;
    desc: string;
    link: string;
    image: string;
    role: string;
  };
}

const ProjectCard = (project: Project) => {
  const { title, date, desc, link, image, role } = project.project;
  const encodedTitle = encodeURIComponent(title);
  return (
    <StContainer>
      <Link to={`/project/${encodedTitle}`}>
        <StImage src={image} alt="project" />
      </Link>
      <StSection>
        <StTitle>{title}</StTitle>
        <StDate>기간 : {date}</StDate>
        <StDesc>{desc}</StDesc>
        <StRole>{role}</StRole>
        <StLink href={link}>GitHub</StLink>
      </StSection>
    </StContainer>
  );
};

export default ProjectCard;

const StContainer = styled.main`
  width: 600px;
  height: 300px;
  border: 2px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  flex-direction: row;
  background-color: white;
  gap: 20px;
`;

const StSection = styled.section`
  width: 250px;
  height: 250px;
`;

const StImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 1rem;
  overflow: hidden;
`;

const StTitle = styled.h2`
  width: 250px;
  height: 30px;
  margin: 0;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgray;
`;

const StDate = styled.p`
  width: 250px;
  height: 20px;
  margin: 0 0 10px 0;
  font-size: 12px;
`;

const StDesc = styled.p`
  width: 250px;
  height: auto;
`;

const StRole = styled.p`
  width: 250px;
  height: auto;
`;

const StLink = styled.a`
  color: black;
  margin-bottom: 5px;
`;
