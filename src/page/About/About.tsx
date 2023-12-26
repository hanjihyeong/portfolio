import styled from "styled-components";
import MyImg from "../../assets/backgroundImg.jpg";
import ProfileCard from "../../components/profileCard/ProfileCard";
import { MdOutlineEmail } from "react-icons/md";

const About = () => {
  return (
    <StContainer>
      <StAboutSection>
        <StProfile>
          <StProfileImg src={MyImg} alt="profileImg" />
          <p>Name : 한지형</p>
        </StProfile>
        <StProgileSection>
          <ProfileCard
            title={
              <>
                <MdOutlineEmail /> Email
              </>
            }
            content="devscott6685@gmail.com"
          />
          <ProfileCard
            title="GitHub"
            content="https://github.com/hanjihyeong"
          />
          <ProfileCard
            title="Blog"
            content="https://blog.naver.com/scott_0801"
          />
          <ProfileCard
            title="Notion"
            content="https://devscott.notion.site/DevScott-d486455de6fd42e0ad1e195c9f3c2b67?pvs=4"
          />
        </StProgileSection>
      </StAboutSection>
    </StContainer>
  );
};

export default About;

const StContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(110, 120, 125, 0.5);
`;

const StAboutSection = styled.section`
  width: 70%;
  height: 70%;
  border: 2px solid lightgray;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
`;

const StProgileSection = styled.section`
  width: 50%;
  height: auto;
  gap: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const StProfile = styled.div`
  display: flex;
  gap: 10px;
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const StProfileImg = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 30px;
  overflow: hidden;
`;
