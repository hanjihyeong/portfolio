import styled from "styled-components";
import Introduction from "../../components/typewriter/Introduction";
import BackgroundImg from "../../assets/backgroundImg.jpg";
import ContactImg from "../../assets/contact.png";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <StCotainer>
      <Introduction />
      <Link to={"/contact"}>
        <StContactImg src={ContactImg} alt="contact" />
      </Link>
    </StCotainer>
  );
};

export default Main;

const StCotainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 50px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${BackgroundImg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
`;

const StContactImg = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;
