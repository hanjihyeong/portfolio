import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../firebase";
import Loading from "../../components/loading/Loading";
import styled from "styled-components";

interface Project {
  title: string;
  date: string;
  desc: string;
  link: string;
  image: string;
  role: [];
  tech: {
    [key: string]: string;
  };
  info: {
    [key: string]: string;
  };
  function: {
    [key: string]: string;
  };
  memoir: string[];
}

const ProjectDetail = () => {
  const ProjectTitle = decodeURIComponent(useParams().id as string);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const project = projects[0];
  const navigate = useNavigate();

  useEffect(() => {
    const projectRef = collection(db, "projects");
    const q = query(projectRef, where("title", "==", `${ProjectTitle}`));

    getDocs(q).then(async (querySnapshot) => {
      const fetchedProjects: Project[] = [];

      querySnapshot.forEach((doc) => {
        const projectData = doc.data() as Project;
        fetchedProjects.push(projectData);
      });

      setProjects(fetchedProjects);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <StContainer>
      <StProjectSection>
        <StButton onClick={() => navigate("/projects")}>돌아가기</StButton>
        <StProjectInfo>
          <StProjectImg src={project.image} alt="projectImg" />
          <StProjectInfoSection>
            <StProjectTitle>{project.title}</StProjectTitle>
            <StProjectDate>기간 : {project.date}</StProjectDate>
            <StProjectDesc>{project.desc}</StProjectDesc>
            <StProjectLinkSection>
              <strong>GitHub</strong>
              <StProjectLink href={project.link}>{project.link}</StProjectLink>
            </StProjectLinkSection>
          </StProjectInfoSection>
        </StProjectInfo>
        <StBottomSection>
          <StProjectRoleSection>
            <StLabel>프로젝트 개요</StLabel>
            <StUlSection>
              {Object.entries(project.info).map(([key, value], index) => (
                <StLiSection key={index}>
                  <strong>{key}</strong> : {value}
                </StLiSection>
              ))}
            </StUlSection>
          </StProjectRoleSection>
          <StProjectRoleSection>
            <StLabel>프로젝트 주요 기능</StLabel>
            <StUlSection>
              {Object.entries(project.function).map(([key, value], index) => (
                <StLiSection key={index}>
                  <strong>{key}</strong> : {value}
                </StLiSection>
              ))}
            </StUlSection>
          </StProjectRoleSection>
          <StProjectRoleSection>
            <StLabel>맡은 역할</StLabel>
            <StUlSection>
              {project.role.map((role, index) => (
                <StLiSection key={index}>{role}</StLiSection>
              ))}
            </StUlSection>
          </StProjectRoleSection>
          <StProjectRoleSection>
            <StLabel>사용 기술</StLabel>
            <StUlSection>
              {Object.entries(project.tech).map(([key, value], index) => (
                <StLiSection key={index}>
                  <strong>{key}</strong>: {value}
                </StLiSection>
              ))}
            </StUlSection>
          </StProjectRoleSection>
          <StProjectRoleSection>
            <StLabel>회고</StLabel>
            <StUlSection>
              <StLiSection>
                <strong>잘된 점</strong> : {project.memoir[0]}
              </StLiSection>
              <StLiSection>
                <strong>잘못된 점</strong> : {project.memoir[1]}
              </StLiSection>
              <StLiSection>
                <strong>앞으로</strong> : {project.memoir[2]}
              </StLiSection>
            </StUlSection>
          </StProjectRoleSection>
        </StBottomSection>
      </StProjectSection>
    </StContainer>
  );
};

export default ProjectDetail;

const StContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6e787d;
  color: black;
  overflow: hidden;
`;

const StButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-weight: bold;
  background-color: white;
  &:hover,
  &:focus {
    outline: none;
    border: none;
  }
`;

const StBottomSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #6e787d;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: none;
  }
`;

const StProjectSection = styled.section`
  display: flex;
  gap: 10px;
  width: 55%;
  height: 100vh;
  align-items: flex-start;
  justify-content: flex-start;
  border: 2px solid lightgray;
  background-color: white;
  flex-direction: column;
  position: relative;
`;

const StProjectInfo = styled.div`
  display: flex;
  border-bottom: 2px solid lightgray;
  padding-bottom: 10px;
  width: 100%;
`;

const StProjectInfoSection = styled.section`
  margin-left: 15px;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const StProjectImg = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 30px;
  overflow: hidden;
  margin-left: 20px;
  margin-top: 20px;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const StProjectTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 0;
`;

const StProjectDate = styled.p`
  margin: 15px 0 0 0;
  font-weight: bold;
`;

const StProjectDesc = styled.p`
  width: 90%;
  margin: 10px 0 0 0;
  font-weight: bold;
`;

const StProjectLinkSection = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0 0 0;
  width: 100%;
  overflow: hidden;
`;

const StProjectLink = styled.a`
  width: 90%;
  overflow: hidden;
  color: black;
  font-weight: bold;
  &:hover {
    color: black;
  }
`;

const StProjectRoleSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

const StLabel = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const StUlSection = styled.ul`
  margin: 0 0 10px 0;
`;

const StLiSection = styled.li`
  margin-bottom: 10px;
  width: 100%;
  line-height: 2rem;
`;
