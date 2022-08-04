import styled from "styled-components";

const Bar = styled.div`
  width: 100%;
  background-color: #c6cacf;
  height: 100px;
`;

const NavContainer = styled.div`
  margin: 0 auto;
  display: flex;
  height: 100%;
  width: 100%;
  max-width: 1024px;
  background-color: whitesmoke;
`;

export default function NavBar() {
  return (
    <Bar>
      <NavContainer></NavContainer>
    </Bar>
  );
}
