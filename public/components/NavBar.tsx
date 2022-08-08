import styled from "styled-components";

const Bar = styled.div`
  width: 100%;
  background-color: #c6cacf;
  height: 80px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
`;

const NavContainer = styled.div`
  margin: 0 auto;
  display: flex;
  height: 100%;
  width: 100%;
  max-width: 1024px;
  justify-content: space-around;
  align-items: flex-end;
`;

const NavLabel = styled.button`
  background: none;
  border: none;
  font-size: 23px;
  text-align: center;
  margin-bottom: 10px;
`;

interface INavBar {
  moveScrollToRef(checkPoint: number): void;
}

export default function NavBar({ moveScrollToRef }: INavBar) {
  return (
    <Bar>
      <NavContainer>
        <NavLabel onClick={() => moveScrollToRef(0)}>Home</NavLabel>
        <NavLabel onClick={() => moveScrollToRef(1)}>About</NavLabel>
        <NavLabel onClick={() => moveScrollToRef(2)}>Projects</NavLabel>
      </NavContainer>
    </Bar>
  );
}
