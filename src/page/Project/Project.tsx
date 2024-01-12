import styled from "styled-components";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import Loading from "../../components/loading/Loading";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./MainSwiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ProjectTypes } from "../../types";

const Project = () => {
  const [projects, setProjects] = useState<ProjectTypes[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDocs(collection(db, "projects")).then(async (querySnapshot) => {
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
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.title}>
            <ProjectCard key={project.title} project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </StContainer>
  );
};

export default Project;

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
