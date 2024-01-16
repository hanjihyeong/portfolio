import styled from "styled-components";

interface Tech {
  key: string;
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
      <StContainer>
        <StImg src={image} />
      </StContainer>
      <StImgText>{familier}</StImgText>
    </StImgContainer>
  );
};

export default TechCard;

const StContainer = styled.div`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 1rem;
  border: 1px solid black;
  @media (max-width: 500px) {
    width: 30px;
    height: 30px;
    overflow: hidden;
  }
`;

const StImg = styled.img`
  width: 100px;
  height: 100px;
  background-color: white;
  object-fit: contain;
  transform: scale(0.8);
  @media (max-width: 500px) {
    width: 30px;
    height: 30px;
  }
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
  @media (max-width: 500px) {
    font-size: 9px;
  }
`;

const StImgContainer = styled.div`
  position: relative;
  display: inline-block;
  &:hover {
    ${StContainer} {
      cursor: pointer;
      filter: brightness(20%);
    }
    ${StImgText} {
      opacity: 1;
    }
  }
`;
