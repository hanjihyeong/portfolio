import styled from "styled-components";

interface Props {
  title: React.ReactNode;
  content: string;
}

const ProfileCard = ({ title, content }: Props) => {
  return (
    <StContainer>
      <StLink href={content}>{title}</StLink>
    </StContainer>
  );
};

export default ProfileCard;

const StContainer = styled.main`
  width: 50px;
  height: 50px;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const StLink = styled.a`
  font-size: 2rem;
  color: black;
  cursor: pointer;
  &:hover {
    text-decoration: none;
    color: black;
`;
