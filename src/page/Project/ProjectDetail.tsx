import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../firebase";
import Loading from "../../components/loading/Loading";
import styled from "styled-components";
import { ProjectTypes } from "../../types";

const ProjectDetail = () => {
  const ProjectTitle = decodeURIComponent(useParams().id as string);
  const [projects, setProjects] = useState<ProjectTypes[]>([]);
  const [loading, setLoading] = useState(true);
  const project = projects[0];
  const navigate = useNavigate();

  useEffect(() => {
    const projectRef = collection(db, "projects");
    const q = query(projectRef, where("title", "==", `${ProjectTitle}`));

    getDocs(q).then(async (querySnapshot) => {
      const fetchedProjects: ProjectTypes[] = [];

      querySnapshot.forEach((doc) => {
        const projectData = doc.data() as ProjectTypes;
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
      <StLeftSection>
        <StProjectImage src={project.image} />
        <StTitleContainer>
          <StProjectTitle>{project.title}</StProjectTitle>
          <StButton onClick={() => navigate("/projects")}>돌아가기</StButton>
        </StTitleContainer>
      </StLeftSection>
      <StRightSection>
        <StMediaButton onClick={() => navigate("/projects")}>
          돌아가기
        </StMediaButton>
        <StArticlesSection>
          <StArticles>
            <StArticlesTitle>개발 기간</StArticlesTitle>
            <StArticlesContent>{project.date}</StArticlesContent>
          </StArticles>
          <StArticles>
            <StArticlesTitle>플랫폼</StArticlesTitle>
            <StArticlesContent>{project.platform}</StArticlesContent>
          </StArticles>
          <StArticles>
            <StArticlesTitle>개발 인원</StArticlesTitle>
            <StArticlesContent>{project.members}</StArticlesContent>
          </StArticles>
          <StArticles>
            <StArticlesTitle>담당 역할</StArticlesTitle>
            <StArticlesContent>
              <p>{project.role.join(", ")}</p>
            </StArticlesContent>
          </StArticles>
        </StArticlesSection>
        <StProjectDetail>
          <div>
            <StDevEnv>개발 환경</StDevEnv>
          </div>
          <StProjectInfo>
            <StLabel>프로젝트 개요</StLabel>
            {Object.entries(project.info).map(([key, value], index) => (
              <StLiSection key={index}>
                <strong>{key}</strong> : {value}
              </StLiSection>
            ))}
            <StLabel>사용 기술</StLabel>
            {Object.entries(project.tech).map(([key, value], index) => (
              <StLiSection key={index}>
                <strong>{key}</strong>: {value}
              </StLiSection>
            ))}
            <StLabel>주요 기술</StLabel>
            {Object.entries(project.function).map(([key, value], index) => (
              <StLiSection key={index}>
                <strong>{key}</strong> : {value}
              </StLiSection>
            ))}
            <StLabel>프로젝트 회고</StLabel>
            <StLiSection>
              <strong>잘된 점</strong> : {project.memoir[0]}
            </StLiSection>
            <StLiSection>
              <strong>잘못된 점</strong> : {project.memoir[1]}
            </StLiSection>
            <StLiSection>
              <strong>앞으로</strong> : {project.memoir[2]}
            </StLiSection>
          </StProjectInfo>
        </StProjectDetail>
      </StRightSection>
    </StContainer>
  );
};

export default ProjectDetail;

const StContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: black;
  overflow: hidden;
`;

const StLeftSection = styled.section`
  width: 30%;
  height: 100vh;
  background-color: #6e787d;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 500px) {
    display: none;
  }
`;
const StTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StProjectTitle = styled.h1`
  position: relative;
`;

const StArticlesSection = styled.div`
  margin-left: 15px;
  margin-top: 15px;
`;

const StArticles = styled.article`
  width: 90%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin-left: 20px;
`;

const StArticlesTitle = styled.h2`
  width: 105px;
  @media (max-width: 500px) {
    font-size: 1.25rem;
  }
`;

const StArticlesContent = styled.span`
  margin-left: 15px;
  width: 80%;
`;

const StDevEnv = styled.h2`
  color: gray;
`;

const StProjectDetail = styled.div`
  display: flex;
  margin-left: 35px;
  flex-direction: column;
  height: 60%;
`;

const StProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
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

const StLabel = styled.label`
  font-size: 1.25rem;
  font-weight: bold;
`;

const StRightSection = styled.section`
  width: 69%;
  height: 100vh;
  background-color: white;
  border-radius: 30px;
  position: relative;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const StMediaButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-weight: bold;
  background-color: transparent;
  color: black;
  height: 50px;
  box-sizing: border-box;
  display: none;
  &:hover,
  &:focus,
  &:focusout {
    outline: none;
    border: none;
  }
  @media (max-width: 500px) {
    display: block;
  }
`;

const StProjectImage = styled.img`
  width: 80%;
  height: auto;
  border-radius: 30px;
`;

const StButton = styled.button`
  font-weight: bold;
  background-color: transparent;
  color: black;
  height: 50px;
  box-sizing: border-box;
  &:hover,
  &:focus,
  &:focusout {
    outline: none;
    border: none;
  }
`;

const StLiSection = styled.li`
  margin-bottom: 10px;
  padding-left: 10px;
  width: 95%;
  line-height: 2rem;
`;
