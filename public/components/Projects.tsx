import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { PROJECTS_LIST } from "../constants";
import ProjectCard from "./ProjectCard";
import ProjectsSection from "./ProjectsSection";

const ProjectsContainer = styled.div`
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

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const onProjectClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <ProjectsSection first={PROJECTS_LIST[0]} second={PROJECTS_LIST[1]} />
      <div>hello world</div>
    </>
  );
}
