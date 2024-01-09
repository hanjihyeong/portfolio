import styled, { keyframes } from "styled-components";

interface Tech {
  title: string;
  image: string;
  familier: string;
  desc: string;
}

interface StModalProps {
  $visible: boolean;
}

interface TechModalProps {
  isVisible: boolean;
  tech: Tech;
}

const TechModal = ({ tech, isVisible }: TechModalProps) => {
  return (
    <StModal $visible={isVisible}>
      <StTechTitle>{tech.title.toUpperCase()}</StTechTitle>
      <StTechSection>
        <StTechImg src={tech.image} alt={tech.title} />
        <StTechDesc>{tech.desc}</StTechDesc>
        <StModalDesc>모달창 아무대나 누르시면 닫힙니다.</StModalDesc>
      </StTechSection>
    </StModal>
  );
};

export default TechModal;

const StSlideUp = keyframes`
0% {
  transform: translate(-50%, 100%);
  opacity: 0;
}
100% {
  transform: translate(-50%, -50%);
  opacity: 1;
}
`;

const StSlideDown = keyframes`
0% {
  transform: translate(-50%, -50%);
  opacity: 1;
}
100% {
  transform: translate(-50%, 100%);
  opacity: 0;
}
`;

const StModal = styled.div<StModalProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: white;
  width: 770px;
  height: 470px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  z-index: 100;
  border: 2px solid lightgray;
  border-radius: 30px;
  animation: ${(props) => (props.$visible ? StSlideUp : StSlideDown)} 0.5s
    forwards;
  color: black;
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
