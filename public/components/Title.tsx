import styled from "styled-components";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const TitleContainer = styled.div`
  margin-top: 80px;
  padding-top: 80px;
`;

const NameContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const NameIntroduce = styled.div`
  background-color: beige;
  height: 150px;
  width: 100%;
  font-size: 6rem;
  text-align: end;
  padding-right: 30px;
  @media (max-width: 1250px) {
    font-size: 5rem;
  }
  @media (max-width: 1060px) {
    font-size: 4rem;
  }
  @media (max-width: 755px) {
    font-size: 3rem;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #343434;
  }
`;

const Name = styled(motion.div)`
  font-size: 6rem;
  padding-left: 20px;
`;

const JobContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

const JobIntroduce = styled.div`
  height: 150px;
  width: 100%;
  font-size: 6rem;
  text-align: end;
  padding-right: 30px;
  @media (max-width: 1250px) {
    font-size: 5rem;
  }
  @media (max-width: 1060px) {
    font-size: 4rem;
  }
`;

const Job = styled(motion.div)`
  background-color: beige;
  font-size: 6rem;
  padding-left: 20px;
  @media (max-width: 1250px) {
    font-size: 5rem;
  }
  @media (max-width: 1060px) {
    font-size: 4rem;
  }
  @media (prefers-color-scheme: dark) {
    background-color: #343434;
  }
`;

export default function Title() {
  return (
    <TitleContainer>
      <NameContainer>
        {/* {isDesktopOrLaptop && <NameIntroduce>Hi! My name is</NameIntroduce>} */}
        <NameIntroduce>Hi! My name is</NameIntroduce>
        <Name
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.7,
          }}
        >
          Eric
        </Name>
      </NameContainer>
      <JobContainer>
        <JobIntroduce>I'm a</JobIntroduce>
        <Job
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
        >
          Frontend Developer
        </Job>
      </JobContainer>
    </TitleContainer>
  );
}
