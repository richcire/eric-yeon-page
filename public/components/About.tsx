import styled from "styled-components";

const AboutContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1024px;
  background-color: bisque;
  height: 1200px;
  margin-top: 200px;
`;

const Skills = styled.ul``;
const Skill = styled.li``;
const DivisionLine = styled.hr``;

const Contact = styled.div``;

export default function About() {
  return (
    <AboutContainer>
      <Skills>
        <Skill>HTML</Skill>
        <Skill>CSS</Skill>
        <Skill>JavaScript</Skill>
        <Skill>TypeScript</Skill>
        <Skill>React</Skill>
        <Skill>NextJS</Skill>
        <DivisionLine />
        <Skill>Styled Component</Skill>
        <Skill>Recoil</Skill>
        <Skill>Framer Motion</Skill>
        <Skill>React Query</Skill>
        <DivisionLine />
        <Skill>Python</Skill>
        <Skill>Lua(Roblox Studio)</Skill>
        <Skill>Dart(Flutter)</Skill>
      </Skills>
      <Contact></Contact>
    </AboutContainer>
  );
}
