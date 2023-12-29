import styled from "styled-components";

interface Tech {
  key: number;
  tech: {
    title: string;
    image: string;
    familier: string;
  };
}

const TechCard = (tech: Tech) => {
  const { image, familier } = tech.tech;
  return (
    <StImgContainer>
      <StImg src={image} />
      <StImgText>{familier}</StImgText>
    </StImgContainer>
  );
};

export default TechCard;

const StImg = styled.img`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 1rem;
  border: 1px solid black;
  object-fit: contain;
`;

const StImgText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;
`;

const StImgContainer = styled.div`
  position: relative;
  display: inline-block;
  &:hover {
    ${StImg} {
      cursor: pointer;
      filter: brightness(20%);
    }
    ${StImgText} {
      opacity: 1;
    }
  }
`;
