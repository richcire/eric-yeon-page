import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { IProject, PROJECTS_LIST } from "../constants";
import ProjectCard from "./ProjectCard";

const CardsContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1024px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
`;

const ProjectDetailContainer = styled(motion.div)`
  margin: 0 auto;
  width: 100%;
  max-width: 1024px;
  height: 700px;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 10px;
  border-radius: 40px;
`;

const DescriptionContainer = styled(motion.div)`
  margin: 30px;
`;

const DetailDescription = styled(motion.div)`
  white-space: pre-wrap;
  font-size: 1.4rem;
  margin-bottom: 50px;
  color: whitesmoke;
  line-height: 170%;
  margin: 20px;
`;
const ProjectLinkContainer = styled(motion.div)`
  margin: 30px;
`;
const ProjectLink = styled(motion.a)`
  display: block;
  color: whitesmoke;
  font-size: 1rem;
  margin-top: 10px;
  margin-left: 20px;
`;

const ProjectDetailVariants = {
  open: {
    height: "auto",
    transition: {
      type: "tween",
      staggerChildren: 0.5,
    },
  },
  closed: { height: 0 },
};

const ChildVariants = {
  open: { opacity: 1, transition: {} },
  closed: { opacity: 0 },
};

interface IProjectSection {
  first: IProject;
  second: IProject;
}

export default function ProjectsSection({ first, second }: IProjectSection) {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedProject, setClickedProject] = useState<IProject>(first);
  const onCardClick = (project: IProject) => {
    if (clickedProject === project) {
      setIsOpen((prev) => !prev);
    } else {
      setClickedProject(project);
      if (isOpen === false) {
        setIsOpen((prev) => !prev);
      }
    }
  };

  return (
    <>
      <CardsContainer>
        <ProjectCard
          key={first.titleEng}
          project={first}
          onCardClick={onCardClick}
        />
        <ProjectCard
          key={second.titleEng}
          project={second}
          onCardClick={onCardClick}
        />
      </CardsContainer>
      <ProjectDetailContainer
        animate={isOpen ? "open" : "closed"}
        variants={ProjectDetailVariants}
      >
        <DescriptionContainer variants={ChildVariants}>
          <DetailDescription>{clickedProject.descriptionEng}</DetailDescription>
          <DetailDescription>{clickedProject.descriptionKor}</DetailDescription>
          <DetailDescription>{clickedProject.skillStack}</DetailDescription>
        </DescriptionContainer>
        <ProjectLinkContainer variants={ChildVariants}>
          {clickedProject.pageLink ? (
            <ProjectLink href={clickedProject.pageLink}>
              {`WebPage -> ${clickedProject.pageLink}`}
            </ProjectLink>
          ) : null}
          <ProjectLink href={clickedProject.githubLink}>
            {`Github  -> ${clickedProject.githubLink}`}
          </ProjectLink>
          {clickedProject.extraLink ? (
            <ProjectLink href={clickedProject.extraLink}>
              {`React&TypeScript ver. Github -> ${clickedProject.extraLink}`}
            </ProjectLink>
          ) : null}
        </ProjectLinkContainer>
      </ProjectDetailContainer>
    </>
  );
}
