import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SideBar from "./sideBar/SideBar";

const Layout = () => {
  const isSmallScreen = window.innerWidth <= 600;

  return (
    <StLayout>
      <StContent>
        {isSmallScreen ? (
          <StNoMobile>모바일은 지원하지 않습니다</StNoMobile>
        ) : (
          <>
            <SideBar />
            <Outlet />
          </>
        )}
      </StContent>
    </StLayout>
  );
};

export default Layout;

const StLayout = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  height: 100vh;
  overflow-x: hidden;
`;

const StContent = styled.div`
  display: flex;
`;

const StNoMobile = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
`;
