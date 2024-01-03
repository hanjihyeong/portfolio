import styled from "styled-components";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import TechCard from "../../components/techCard/TechCard";
import Loading from "../../components/loading/Loading";
import TechModal from "../../components/modal/TechModal";

interface Tech {
  title: string;
  image: string;
  familier: string;
  desc: string;
}

const Tech = () => {
  const [techStack, setTechStack] = useState<Tech[]>([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState<{ [key: string]: boolean }>({});

  const handleClick = (id: string) => {
    setVisible((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() => {
    getDocs(collection(db, "teckstacks")).then((querySnapshot) => {
      const fetchedTechStacks: Tech[] = [];

      querySnapshot.forEach((doc) => {
        const techstackData = doc.data() as Tech;
        fetchedTechStacks.push(techstackData);
      });

      setTechStack(fetchedTechStacks);
      setLoading(false);
    });
  }, []);

  const lessFamiliarTech = techStack.filter(
    (tech) => tech.familier === "Tryed"
  );

  const familierTech = techStack.filter((tech) => tech.familier === "Familier");

  const renderTechCards = (techArray: Tech[], start: number, end: number) => {
    return (
      <StSection>
        {techArray.slice(start, end).map((tech) => (
          <div key={tech.title} onClick={() => handleClick(tech.title)}>
            <TechCard key={tech.title} tech={tech} />
            {visible[tech.title] && (
              <TechModal tech={tech} isVisible={visible[tech.title]} />
            )}
          </div>
        ))}
      </StSection>
    );
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <StContainer>
      <StTitle>🛠️Tech Stack🛠️</StTitle>
      <StFamilierSection>
        {renderTechCards(familierTech, 0, 4)}
        {renderTechCards(familierTech, 4, 8)}
        {renderTechCards(lessFamiliarTech, 0, 5)}
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
  position: relative;
  overflow: hidden;
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
