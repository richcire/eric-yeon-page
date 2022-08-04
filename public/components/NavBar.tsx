import styled from "styled-components";

const Bar = styled.div`
  width: 100%;
  background-color: #c6cacf;
  height: 80px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
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

const NavLabel = styled.div`
  font-size: 23px;
  text-align: center;
  margin-bottom: 10px;
`;

export default function NavBar() {
  return (
    <Bar>
      <NavContainer>
        <NavLabel>Home</NavLabel>
        <NavLabel>About</NavLabel>
        <NavLabel>Projects</NavLabel>
      </NavContainer>
    </Bar>
  );
}
