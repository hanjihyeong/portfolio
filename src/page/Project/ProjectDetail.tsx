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
      {/* <StProjectSection>
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
      </StProjectSection> */}
      <StLeftSection>
        <StButton onClick={() => navigate("/projects")}>돌아가기</StButton>
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
      </StLeftSection>
      <StRightSection>
        <StProjectImage src={project.image} />
        <h1>{project.title}</h1>
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
  width: 60%;
  height: 100vh;
  background-color: white;
  border-radius: 30px;
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
  width: 39%;
  height: 100vh;
  background-color: #6e787d;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StProjectImage = styled.img`
  width: 80%;
  height: auto;
  border-radius: 30px;
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

// const StBottomSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   overflow-y: scroll;
// &::-webkit-scrollbar {
//   width: 10px;
// }

// &::-webkit-scrollbar-thumb {
//   background-color: #6e787d;
//   border-radius: 10px;
// }

// &::-webkit-scrollbar-track {
//   background-color: none;
// }
// `;

// const StProjectSection = styled.section`
//   display: flex;
//   gap: 10px;
//   width: 55%;
//   height: 100vh;
//   align-items: flex-start;
//   justify-content: flex-start;
//   border: 2px solid lightgray;
//   background-color: white;
//   flex-direction: column;
//   position: relative;
// `;

// const StProjectInfo = styled.div`
//   display: flex;
//   border-bottom: 2px solid lightgray;
//   padding-bottom: 10px;
//   width: 100%;
// `;

// const StProjectInfoSection = styled.section`
//   margin-left: 15px;
//   width: 70%;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: flex-start;
// `;

// const StProjectImg = styled.img`
//   width: 180px;
//   height: 180px;
//   border-radius: 30px;
//   overflow: hidden;
//   margin-left: 20px;
//   margin-top: 20px;
//   @media (max-width: 1000px) {
//     display: none;
//   }
// `;

// const StProjectTitle = styled.h1`
//   font-size: 2rem;
//   margin-bottom: 0;
// `;

// const StProjectDate = styled.p`
//   margin: 15px 0 0 0;
//   font-weight: bold;
// `;

// const StProjectDesc = styled.p`
//   width: 90%;
//   margin: 10px 0 0 0;
//   font-weight: bold;
// `;

// const StProjectLinkSection = styled.div`
//   display: flex;
//   gap: 10px;
//   margin: 10px 0 0 0;
//   width: 100%;
//   overflow: hidden;
// `;

// const StProjectLink = styled.a`
//   width: 90%;
//   overflow: hidden;
//   color: black;
//   font-weight: bold;
//   &:hover {
//     color: black;
//   }
// `;

// const StProjectRoleSection = styled.section`
//   display: flex;
//   flex-direction: column;
//   margin-left: 15px;
// `;

// const StLabel = styled.label`
//   font-size: 1.2rem;
//   font-weight: bold;
//   margin-bottom: 10px;
// `;

// const StUlSection = styled.ul`
//   margin: 0 0 10px 0;
// `;

const StLiSection = styled.li`
  margin-bottom: 10px;
  padding-left: 10px;
  width: 95%;
  line-height: 2rem;
`;
