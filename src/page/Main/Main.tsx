import styled from "styled-components";
import Introduction from "../../components/typewriter/Introduction";
import BackgroundImg from "../../assets/backgroundImg.jpg";

const Main = () => {
  return (
    <StCotainer>
      <Introduction />
    </StCotainer>
  );
};

export default Main;

const StCotainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 50px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${BackgroundImg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;
