import styled from "styled-components";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { getDownloadURL, ref } from "firebase/storage";
import TechCard from "../../components/techCard/TechCard";
import Loading from "../../components/loading/Loading";

interface Teck {
  title: string;
  image: string;
  familier: string;
}

const Tech = () => {
  const [techStack, setTechStack] = useState<Teck[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDocs(collection(db, "teckstacks")).then(async (querySnapshot) => {
      const fetchedTechStacks: Teck[] = [];
      const imageUrls: string[] = [];

      querySnapshot.forEach((doc) => {
        const techstacksData = doc.data() as Teck;
        fetchedTechStacks.push(techstacksData);
      });

      for (const techstack of fetchedTechStacks) {
        const imageRef = ref(storage, techstack.image);
        const imageUrl = await getDownloadURL(imageRef);
        imageUrls.push(imageUrl);
      }

      const techStackWithImages = fetchedTechStacks.map((techstack, index) => ({
        ...techstack,
        image: imageUrls[index],
      }));

      setTechStack(techStackWithImages);
      setLoading(false);
    });
  }, []);

  const lessFamiliarTech = techStack.filter(
    (tech) => tech.familier === "Tryed"
  );

  const familierTech = techStack.filter((tech) => tech.familier === "Familier");

  if (loading) {
    return <Loading />;
  }

  return (
    <StContainer>
      <StTitle>🛠️Tech Stack🛠️</StTitle>
      <StFamilierSection>
        <StSection>
          {familierTech.slice(0, 4).map((tech, index) => (
            <TechCard key={index} tech={tech} />
          ))}
        </StSection>
        <StSection>
          {familierTech.slice(4, 8).map((tech, index) => (
            <TechCard key={index} tech={tech} />
          ))}
        </StSection>
        <StSection>
          {lessFamiliarTech.map((tech, index) => (
            <TechCard key={index} tech={tech} />
          ))}
        </StSection>
      </StFamilierSection>
    </StContainer>
  );
};

export default Tech;

const StContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #6e787d;
`;

const StTitle = styled.section`
  font-size: 40px;
  font-weight: bold;
  width: 70%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 2px solid white;
  color: white;
`;

const StFamilierSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  gap: 20px;
`;

const StSection = styled.section`
  display: flex;
  gap: 2rem;
`;
