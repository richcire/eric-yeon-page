import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";

const AboutContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1024px;
  height: 1000px;
  margin-top: 200px;
  display: flex;
  justify-content: space-around;
`;

const Skills = styled.ul`
  width: 50%;
  height: 800px;
  padding: 0;
  background-color: beige;
  font-size: 1.5rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Skill = styled.li`
  margin: 10px;
`;
const DivisionLine = styled.hr`
  width: 80%;
  height: 3px;
`;

const ContactContainer = styled.ul`
  margin-top: 500px;
  width: 45%;
  height: 200px;
  background-color: bisque;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Contact = styled.li`
  display: flex;
  font-size: 20px;
  @media (max-width: 750px) {
    font-size: 15px;
  }
  @media (max-width: 630px) {
    font-size: 12px;
  }
  .icon {
    margin-right: 20px;
  }
`;
const ContactIcon = styled.div``;
const ContactInformation = styled.div``;

const GITHUB_ADDR = "https://github.com/richcire";
const EMAIL_ADDR = "rixhcire@gmail.com";

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
      <ContactContainer>
        <Contact>
          <ContactIcon className="icon">
            <BsGithub />
          </ContactIcon>
          <ContactInformation>
            <a href={GITHUB_ADDR}>{GITHUB_ADDR}</a>
          </ContactInformation>
        </Contact>
        <Contact>
          <ContactIcon className="icon">
            <AiTwotoneMail />
          </ContactIcon>
          <ContactInformation>{EMAIL_ADDR}</ContactInformation>
        </Contact>
      </ContactContainer>
    </AboutContainer>
  );
}
