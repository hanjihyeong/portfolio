import styled from "styled-components";

interface Props {
  title: React.ReactNode;
  content: string;
}

const ProfileCard = ({ title, content }: Props) => {
  return (
    <StContainer>
      <StTitle>{title}</StTitle>
      <StContent>
        <StLink href={content}>{content}</StLink>
      </StContent>
    </StContainer>
  );
};

export default ProfileCard;

const StContainer = styled.main`
  width: 250px;
  height: 100px;
  border: 2px solid lightgray;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const StTitle = styled.p`
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid lightgray;
  margin: 0;
  gap: 5px;
`;

const StContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100%;
`;

const StLink = styled.a`
  color: black;
  text-decoration: none;
  cursor: pointer;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  &:hover {
    text-decoration: none;
    color: black;
`;
