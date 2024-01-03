import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../firebase";
import Loading from "../../components/loading/Loading";
import styled from "styled-components";
import { TbClick } from "react-icons/tb";

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
  retro: {
    [key: string]: string;
  };
}

const ProjectDetail = () => {
  const ProjectTitle = decodeURIComponent(useParams().id as string);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [retroOpen, setRetroOpen] = useState(false);
  const [roleOpen, setRoleOpen] = useState(false);
  const [techOpen, setTechOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [functionOpen, setFunctionOpen] = useState(false);
  const project = projects[0];
  const navigate = useNavigate();

  useEffect(() => {
    const projectRef = collection(db, "projects");
    const q = query(projectRef, where("title", "==", `${ProjectTitle}`));

    getDocs(q).then(async (querySnapshot) => {
      const fetchedProjects: Project[] = [];

      // Firestore에서 가져온 프로젝트 데이터를 배열에 저장합니다.
      querySnapshot.forEach((doc) => {
        const projectData = doc.data() as Project;
        fetchedProjects.push(projectData);
      });

      setProjects(fetchedProjects);
      setLoading(false);
    });
  }, []);

  const handleRetroOpen = () => {
    setRetroOpen(!retroOpen);
  };

  const handleRoleOpen = () => {
    setRoleOpen(!roleOpen);
  };

  const handleTechOpen = () => {
    setTechOpen(!techOpen);
  };

  const handleInfoOpen = () => {
    setInfoOpen(!infoOpen);
  };

  const handleFunctionOpen = () => {
    setFunctionOpen(!functionOpen);
  };

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
            <StLabel onClick={() => handleInfoOpen()}>
              프로젝트 개요
              <TbClick />
            </StLabel>
            {infoOpen && (
              <StUlSection>
                {Object.entries(project.info).map(([key, value], index) => (
                  <StLiSection key={index}>
                    <strong>{key}</strong> : {value}
                  </StLiSection>
                ))}
              </StUlSection>
            )}
          </StProjectRoleSection>
          <StProjectRoleSection>
            <StLabel onClick={() => handleFunctionOpen()}>
              프로젝트 주요 기능
              <TbClick />
            </StLabel>
            {functionOpen && (
              <StUlSection>
                {Object.entries(project.function).map(([key, value], index) => (
                  <StLiSection key={index}>
                    <strong>{key}</strong> : {value}
                  </StLiSection>
                ))}
              </StUlSection>
            )}
          </StProjectRoleSection>
          <StProjectRoleSection>
            <StLabel onClick={() => handleRoleOpen()}>
              맡은 역할
              <TbClick />
            </StLabel>
            {roleOpen && (
              <StUlSection>
                {project.role.map((role, index) => (
                  <StLiSection key={index}>{role}</StLiSection>
                ))}
              </StUlSection>
            )}
          </StProjectRoleSection>
          <StProjectRoleSection>
            <StLabel onClick={() => handleTechOpen()}>
              사용 기술
              <TbClick />
            </StLabel>
            {techOpen && (
              <StUlSection>
                {Object.entries(project.tech).map(([key, value], index) => (
                  <StLiSection key={index}>
                    <strong>{key}</strong>: {value}
                  </StLiSection>
                ))}
              </StUlSection>
            )}
          </StProjectRoleSection>
          <StProjectRoleSection>
            <StLabel onClick={() => handleRetroOpen()}>
              회고
              <TbClick />
            </StLabel>
            {retroOpen && (
              <StUlSection>
                {Object.entries(project.retro).map(([key, value], index) => (
                  <StLiSection key={index}>
                    <strong>{key}</strong>: {value}
                  </StLiSection>
                ))}
              </StUlSection>
            )}
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
  width: 50%;
  height: 460px;
  align-items: flex-start;
  justify-content: center;
  border: 2px solid lightgray;
  border-radius: 30px;
  margin-top: 15px;
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
`;

const StProjectLink = styled.a`
  color: black;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 1;
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
  width: 670px;
  line-height: 2rem;
`;
