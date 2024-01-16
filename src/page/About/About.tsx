import styled from "styled-components";
import MyImg from "../../assets/backgroundImg.jpg";
import { useState } from "react";
import { TbClick } from "react-icons/tb";

const About = () => {
  const [visible, setVisible] = useState([false, false, false, false]);

  const handleClick = (index: number) => {
    const newVisible = [...visible];
    newVisible[index] = !newVisible[index];
    setVisible(newVisible);
  };

  const introductions = [
    {
      title: "재사용 가능한 코드 작성",
      content:
        "관심이 많습니다. 다양한 상황에서 유연하게 코드를 활용하여 효율적이고 유지보수가 용이한 코드를 작성하는 것을 목표로 하고 있습니다.",
    },
    {
      title: "시맨틱한 태그와 BEM 방법론",
      content:
        "사용에 노력하고 있습니다. 의미 있는 태그를 선택하여 웹 문서의 구조를 명확하게 표현하고, BEM (Block Element Modifier) 방법론을 활용하여 일관성 있는 스타일링을 적용하려고 노력하고 있습니다.",
    },
    {
      title: "지식 습득과 내 것으로 만들기",
      content:
        "다른 사람으로부터 배우는 것을 즐깁니다. 새로운 기술이나 도구에 대해 호기심을 갖고 학습하며, 모르는 부분은 꼭 배워서 내 것으로 만들기를 좋아합니다.",
    },
    {
      title: "다른 직군과의 소통",
      content:
        "웹 개발은 다양한 직군과의 협업이 필요합니다. 다른 직군과 소통하며 의견을 나누고 협력하여 좋은 결과물을 만들어내는 것을 좋아합니다.",
    },
  ];

  return (
    <StContainer>
      <StProfile>
        <StProfileSection>
          <StProfileImg src={MyImg} alt="profileImg" />
          <StInfoSection>
            <StProfileContent>Name : 한지형</StProfileContent>
            <StProfileContent>Age : 24</StProfileContent>
            <StProfileContent>Gender : male</StProfileContent>
            <StProfileContent>Adress : jeju.jocheon</StProfileContent>
            <StProfileContent>
              BootCamp : SuperCoding WebDeveloper 2309 FullTime
            </StProfileContent>
          </StInfoSection>
        </StProfileSection>
        <StRightSection>
          <StIntroduction>Introduction</StIntroduction>
          <StUlSection>
            {introductions.map((list, index) => (
              <StIntroductionLi key={index}>
                <StIntroTitle onClick={() => handleClick(index)}>
                  <strong>
                    {list.title}
                    <TbClick />
                  </strong>
                </StIntroTitle>
                {visible[index] && (
                  <StIntroContent>{list.content}</StIntroContent>
                )}
              </StIntroductionLi>
            ))}
          </StUlSection>
        </StRightSection>
      </StProfile>
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
  color: black;
`;

const StProfile = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    algin-items: flex-start;
  }
`;

const StProfileImg = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 30px;
  overflow: hidden;
  margin-left: 20px;
  margin-top: 20px;
  @media (max-width: 800px) {
    width: 100px;
    height: 100px;
    margin-left: 0;
  }
`;

const StProfileContent = styled.h2`
  margin: 0 0 0 20px;
  font-size: 1.2rem;
  font-weight: bold;
`;

const StProfileSection = styled.div`
  display: flex;
  width: auto;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 100px;
  @media (max-width: 1000px) {
    display: flex;
    width: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
  @media (max-width: 500px) {
    margin-left: 0;
  }
`;

const StRightSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 50%;
  margin-left: 100px;
  @media (max-width: 500px) {
    margin-left: 0;
    justify-content: flex-start;
    width: 100%;
  }
`;

const StIntroduction = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 20px 0 0 20px;
`;

const StUlSection = styled.ul`
  width: 90%;
  margin-top: 0;
  @media (max-width: 1000px) {
    height: 170px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #6e787d;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
      background-color: none;
    }
  }
`;

const StInfoSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

const StIntroductionLi = styled.li`
  margin-bottom: 10px;
  line-height: 2rem;
`;

const StIntroTitle = styled.div`
  cursor: pointer;
`;

const StIntroContent = styled.p`
  margin: 0 0 0 20px;
`;
