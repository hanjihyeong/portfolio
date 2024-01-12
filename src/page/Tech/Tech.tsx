import styled from "styled-components";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import TechCard from "../../components/techCard/TechCard";
import Loading from "../../components/loading/Loading";
import TechModal from "../../components/modal/TechModal";
import { TechTypes } from "../../types";

const Tech = () => {
  const [techStack, setTechStack] = useState<TechTypes[]>([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState<{ [key: string]: boolean }>({});

  const handleClick = (id: string) => {
    setVisible((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() => {
    getDocs(collection(db, "teckstacks")).then((querySnapshot) => {
      const fetchedTechStacks: TechTypes[] = [];

      querySnapshot.forEach((doc) => {
        const techstackData = doc.data() as TechTypes;
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

  const renderTechCards = (
    techArray: TechTypes[],
    start: number,
    end: number
  ) => {
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
    <>
      <StNoMobile>화면을 늘려주세요</StNoMobile>
      <StContainer>
        <StTitle>🛠️Tech Stack🛠️</StTitle>
        <StFamilierSection>
          {renderTechCards(familierTech, 0, 4)}
          {renderTechCards(familierTech, 4, 8)}
          {renderTechCards(lessFamiliarTech, 0, 5)}
        </StFamilierSection>
      </StContainer>
    </>
  );
};

export default Tech;

const StNoMobile = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  color: black;
  background-color: white;
  @media (min-width: 850px) {
    display: none;
  }
`;

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
  @media (max-width: 850px) {
    display: none;
    ${StNoMobile} {
      display: flex;
    }
  }
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
