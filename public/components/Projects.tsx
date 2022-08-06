import { motion } from "framer-motion";
import styled from "styled-components";
import {
  PERSONAL_COLOR_DESCRIPTION_ENG,
  PERSONAL_COLOR_DESCRIPTION_KOR,
  PERSONAL_COLOR_GITHUB_LINK,
  PERSONAL_COLOR_PAGE_LINK,
  PERSONAL_COLOR_SKILL_STACK,
  PERSONAL_COLOR_TITLE_ENG,
  PERSONAL_COLOR_TITLE_KOR,
  PERSONAL_COLOR_TYPESCRIPT_VER_GITHUB_LINK,
} from "../img/constants";

const ProjectsContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1024px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
`;

const ProjectCard = styled(motion.div)`
  height: 300px;
  margin: 20px;
  position: relative;

  :hover {
    div {
      display: block;
    }
  }
`;

const CardImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 40px;
  position: absolute;
  z-index: 1;
`;
const CardLabel = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 40px;
  display: none;
  z-index: 1;
`;

interface ITitle {
  language: "Eng" | "Kor";
}

const Title = styled.div<ITitle>`
  color: azure;
  font-size: ${(props) => (props.language === "Eng" ? "2rem" : "1rem")};
  margin: 15px;
`;

const ProjectDetailContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1024px;
  height: 700px;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 50px;
  border-radius: 40px;
  position: relative;
`;

const DetailDescription = styled.div`
  white-space: pre-wrap;
  font-size: 1.4rem;
  margin-bottom: 50px;
  color: whitesmoke;
  line-height: 170%;
  margin: 20px;
`;
const ProjectLinkContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 20px;
  margin-right: 40px;
`;
const ProjectLink = styled.a`
  display: block;
  color: whitesmoke;
  font-size: 1rem;
  margin-top: 10px;
`;

export default function Projects() {
  return (
    <>
      <ProjectsContainer>
        <ProjectCard whileHover={{ scale: 1.1 }}>
          <CardImage src="img/personal_color.png" />
          <CardLabel>
            <Title language="Eng">{PERSONAL_COLOR_TITLE_ENG}</Title>
            <Title language="Kor">{PERSONAL_COLOR_TITLE_KOR}</Title>
          </CardLabel>
        </ProjectCard>
        <ProjectCard>
          <CardImage src="img/personal_color.png" />
        </ProjectCard>
      </ProjectsContainer>
      <ProjectDetailContainer>
        <DetailDescription>{PERSONAL_COLOR_DESCRIPTION_ENG}</DetailDescription>
        <DetailDescription>{PERSONAL_COLOR_DESCRIPTION_KOR}</DetailDescription>
        <DetailDescription>{PERSONAL_COLOR_SKILL_STACK}</DetailDescription>
        <ProjectLinkContainer>
          <ProjectLink href={PERSONAL_COLOR_PAGE_LINK}>
            {`WebPage -> ${PERSONAL_COLOR_PAGE_LINK}`}
          </ProjectLink>
          <ProjectLink href={PERSONAL_COLOR_GITHUB_LINK}>
            {`Github  -> ${PERSONAL_COLOR_GITHUB_LINK}`}
          </ProjectLink>
          <ProjectLink href={PERSONAL_COLOR_TYPESCRIPT_VER_GITHUB_LINK}>
            {`React&TypeScript ver. Github -> ${PERSONAL_COLOR_TYPESCRIPT_VER_GITHUB_LINK}`}
          </ProjectLink>
        </ProjectLinkContainer>
      </ProjectDetailContainer>
    </>
  );
}
