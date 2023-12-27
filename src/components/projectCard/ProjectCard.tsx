import styled from "styled-components";

interface Project {
  key: number;
  project: {
    title: string;
    date: string;
    desc: string;
    link: string;
    image: string;
  };
}

const ProjectCard = (project: Project) => {
  const { title, date, desc, link, image } = project.project;
  return (
    <StContainer>
      <StImage src={image} alt="project" />
      <div>
        <StTitle>{title}</StTitle>
        <StDate>기간 : {date}</StDate>
        <StDesc>{desc}</StDesc>
        <StLink href={link}>GitHub</StLink>
      </div>
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

const StImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 1rem;
  overflow: hidden;
`;

const StTitle = styled.h2`
  width: 250px;
  height: 30px;
  margin: 10px 0 10px 0;
  padding: 5px;
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

const StLink = styled.a`
  color: black;
  margin-bottom: 5px;
`;
