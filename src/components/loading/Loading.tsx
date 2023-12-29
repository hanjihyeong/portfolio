import styled from "styled-components";
import LoadingImg from "../../assets/Loading.gif";

const Loading = () => {
  return (
    <StContainer>
      <img src={LoadingImg} alt="loading" />
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
