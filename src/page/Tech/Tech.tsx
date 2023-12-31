import styled from "styled-components";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { getDownloadURL, ref } from "firebase/storage";
import TechCard from "../../components/techCard/TechCard";
import Loading from "../../components/loading/Loading";

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
    getDocs(collection(db, "teckstacks")).then(async (querySnapshot) => {
      const fetchedTechStacks: Tech[] = [];
      const imageUrls: string[] = [];

      querySnapshot.forEach((doc) => {
        const techstacksData = doc.data() as Tech;
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

  const renderTechCards = (techArray: Tech[], start: number, end: number) => {
    return (
      <StSection>
        {techArray.slice(start, end).map((tech) => (
          <div onClick={() => handleClick(tech.title)}>
            <TechCard key={tech.title} tech={tech} />
            {visible[tech.title] && (
              <StModal>
                <StTechTitle>{tech.title.toUpperCase()}</StTechTitle>
                <StTechSection>
                  <StTechImg src={tech.image} alt={tech.title} />
                  <StTechDesc>{tech.desc}</StTechDesc>
                  <StModalDesc>모달창 아무대나 누르시면 닫힙니다.</StModalDesc>
                </StTechSection>
              </StModal>
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

const StModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 50%;
  height: 470px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  z-index: 100;
  border: 2px solid lightgray;
  border-radius: 30px;
`;

const StTechTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

const StTechSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const StTechImg = styled.img`
  width: auto;
  height: 180px;
`;

const StTechDesc = styled.p`
  width: 80%;
  height: auto;
  font-size: 1.2rem;
  line-height: 2rem;
`;

const StModalDesc = styled.p`
  font-size: 0.75rem;
  position: fixed;
  bottom: 10px;
  color: lightgray;
  cursor: pointer;
`;
