import styled from "styled-components";
import MyImg from "../../assets/backgroundImg.jpg";
import ProfileCard from "../../components/profileCard/ProfileCard";
import { FaSquareGithub } from "react-icons/fa6";
import { SiBloglovin } from "react-icons/si";
import { SiNotion } from "react-icons/si";

const About = () => {
  return (
    <StContainer>
      <StAboutSection>
        <StProfile>
          <StProfileSection>
            <StProfileImg src={MyImg} alt="profileImg" />
            <StInfoSection>
              <StProfileContent>Name : 한지형</StProfileContent>
              <StProfileContent>Age : 24</StProfileContent>
              <StProfileContent>Gender : male</StProfileContent>
              <StProfileContent>Adress : jeju.jocheon</StProfileContent>
            </StInfoSection>
          </StProfileSection>
          <StIntroduction>Introduction</StIntroduction>
          <StUlSection>
            <li>
              <span>
                <strong>재사용 가능한 코드 작성 : </strong>
              </span>
              관심이 많습니다. 다양한 상황에서 유연하게 코드를 활용하여
              효율적이고 유지보수가 용이한 코드를 작성하는 것을 목표로 하고
              있습니다.
            </li>
            <li>
              <span>
                <strong>시맨틱한 태그와 BEM 방법론 : </strong>
              </span>
              사용에 노력하고 있습니다. 의미 있는 태그를 선택하여 웹 문서의
              구조를 명확하게 표현하고, BEM (Block Element Modifier) 방법론을
              활용하여 일관성 있는 스타일링을 적용하려고 노력하고 있습니다.
            </li>
            <li>
              <span>
                <strong>지식 습득과 내 것으로 만들기 : </strong>
              </span>
              다른 사람으로부터 배우는 것을 즐깁니다. 새로운 기술이나 도구에
              대해 호기심을 갖고 학습하며, 모르는 부분은 꼭 배워서 내 것으로
              만들기를 좋아합니다.
            </li>
            <li>
              <span>
                <strong>다른 직군과의 소통 : </strong>
              </span>
              웹 개발은 다양한 직군과의 협업이 필요합니다. 다른 직군과 소통하며
              의견을 나누고 협력하여 좋은 결과물을 만들어내는 것을 즐깁니다.
            </li>
          </StUlSection>
        </StProfile>
        <StProgileSection>
          <ProfileCard
            title={
              <>
                <FaSquareGithub /> GitHub
              </>
            }
            content="https://github.com/hanjihyeong"
          />
          <ProfileCard
            title={
              <>
                <SiBloglovin /> Blog
              </>
            }
            content="https://blog.naver.com/scott_0801"
          />
          <ProfileCard
            title={
              <>
                <SiNotion /> Notion
              </>
            }
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
  background-color: #6e787d;
`;

const StAboutSection = styled.section`
  width: 70%;
  height: auto;
  border: 2px solid lightgray;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const StProgileSection = styled.section`
  width: 50%;
  height: auto;
  gap: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const StProfile = styled.div`
  display: flex;
  gap: 10px;
  width: 80%;
  height: 80%;
  align-items: flex-start;
  justify-content: center;
  border: 2px solid lightgray;
  border-radius: 30px;
  margin-top: 15px;
  background-color: white;
  flex-direction: column;
`;

const StProfileImg = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 30px;
  overflow: hidden;
  margin-left: 20px;
  margin-top: 20px;
`;

const StProfileContent = styled.h2`
  margin: 0 0 0 20px;
  font-size: 1.5rem;
  font-weight: bold;
`;

const StProfileSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const StIntroduction = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 20px 0 0 20px;
`;

const StUlSection = styled.ul`
  width: 90%;
`;

const StInfoSection = styled.section`
  display: flex;
  flex-direction: column;
`;
