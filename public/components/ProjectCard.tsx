import { motion } from "framer-motion";
import styled from "styled-components";
import { IProject } from "../constants";

const ProjectCardContainer = styled(motion.div)`
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

interface IProjectCard {
  project: IProject;
  onCardClick(project: IProject): void;
}

export default function ProjectCard({ project, onCardClick }: IProjectCard) {
  return (
    <ProjectCardContainer
      whileHover={{ scale: 1.1 }}
      onClick={() => onCardClick(project)}
    >
      <CardImage src={project.imgPath} />
      <CardLabel>
        <Title language="Eng">{project.titleEng}</Title>
        <Title language="Kor">{project.titleKor}</Title>
      </CardLabel>
    </ProjectCardContainer>
  );
}
