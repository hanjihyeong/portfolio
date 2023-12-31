import styled from "styled-components";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { getDownloadURL, ref } from "firebase/storage";
import Loading from "../../components/loading/Loading";

interface Project {
  title: string;
  date: string;
  desc: string;
  link: string;
  image: string;
  role: string;
}

const Project = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDocs(collection(db, "projects")).then(async (querySnapshot) => {
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

  if (loading) {
    return <Loading />;
  }
  return (
    <StContainer>
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
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
  background-color: #6e787d;
  flex-direction: column;
`;
