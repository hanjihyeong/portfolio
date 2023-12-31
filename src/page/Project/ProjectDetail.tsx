import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db, storage } from "../../firebase";
import { getDownloadURL, ref } from "firebase/storage";
import Loading from "../../components/loading/Loading";
import styled from "styled-components";

interface Project {
  title: string;
  date: string;
  desc: string;
  link: string;
  image: string;
  role1: string;
  role2: string;
  role3: string;
  role4: string;
  role5: string;
}

const ProjectDetail = () => {
  const ProjectTitle = decodeURIComponent(useParams().id as string);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const project = projects[0];

  useEffect(() => {
    const projectRef = collection(db, "projects");
    const q = query(projectRef, where("title", "==", `${ProjectTitle}`));

    getDocs(q).then(async (querySnapshot) => {
      const fetchedProjects: Project[] = [];
      const imageUrls: string[] = [];

      // Firestore에서 가져온 프로젝트 데이터를 배열에 저장합니다.
      querySnapshot.forEach((doc) => {
        const projectData = doc.data() as Project;
        fetchedProjects.push(projectData);
      });

      // 각 프로젝트의 이미지 URL을 가져옵니다.
      for (const project of fetchedProjects) {
        const imageRef = ref(storage, project.image);
        const imageUrl = await getDownloadURL(imageRef);
        imageUrls.push(imageUrl);
      }

      // 각 프로젝트에 실제 이미지 URL을 할당합니다.
      const projectsWithImages = fetchedProjects.map((project, index) => ({
        ...project,
        image: imageUrls[index],
      }));

      setProjects(projectsWithImages);
      setLoading(false);
    });
  }, []);

  console.log(ProjectTitle);
  console.log(projects);
  if (loading) {
    return <Loading />;
  }
  return (
    <StContainer>
      <StProjectSection>
        <StProjectInfo>
          <StProjectImg src={project.image} alt="projectImg" />
          <StProjectInfoSection>
            <StProjectTitle>{project.title}</StProjectTitle>
            <StProjectDate>기간 : {project.date}</StProjectDate>
            <StProjectDesc>{project.desc}</StProjectDesc>
            <StProjectLinkSection>
              <span>GitHub</span>
              <StProjectLink href={project.link}>{project.link}</StProjectLink>
            </StProjectLinkSection>
          </StProjectInfoSection>
        </StProjectInfo>
        <StProjectRoleSection>
          <StLabel>맡은 역할</StLabel>
          <StUlSection>
            <StLiSection>{project.role1}</StLiSection>
            <StLiSection>{project.role2}</StLiSection>
            {project.role3 && <StLiSection>{project.role3}</StLiSection>}
            {project.role4 && <StLiSection>{project.role4}</StLiSection>}
            {project.role5 && <StLiSection>{project.role5}</StLiSection>}
          </StUlSection>
        </StProjectRoleSection>
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
`;

const StProjectSection = styled.section`
  display: flex;
  gap: 10px;
  width: 50%;
  height: auto;
  align-items: flex-start;
  justify-content: center;
  border: 2px solid lightgray;
  border-radius: 30px;
  margin-top: 15px;
  background-color: white;
  flex-direction: column;
`;

const StProjectInfo = styled.div`
  display: flex;
  border-bottom: 2px solid lightgray;
  padding-bottom: 10px;
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
`;

const StProjectDesc = styled.p`
  width: 90%;
  margin: 10px 0 0 0;
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
`;
