import styled from "styled-components";
import LoadingImg from "../../assets/Loading.gif";

const Loading = () => {
  return (
    <StContainer>
      <StLoadingImg src={LoadingImg} alt="loading" />
    </StContainer>
  );
};

export default Loading;

const StContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6e787d;
`;

const StLoadingImg = styled.img`
  @media (max-width: 500px) {
    transform: scale(0.7);
  }
`;
