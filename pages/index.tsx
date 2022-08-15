import type { NextPage } from "next";
import { useRef } from "react";
import { RecoilRoot } from "recoil";
import About from "../public/components/About";
import NavBar from "../public/components/NavBar";
import Projects from "../public/components/Projects";
import Seo from "../public/components/Seo";
import Title from "../public/components/Title";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const checkPointRef = useRef<(null | HTMLDivElement)[]>([]);
  const moveScrollToRef = (checkPoint: number) => {
    checkPointRef.current[checkPoint]?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <RecoilRoot>
      <Seo />
      <NavBar moveScrollToRef={moveScrollToRef} />
      <div ref={(elem) => (checkPointRef.current[0] = elem)} />
      <Title />
      <div ref={(elem) => (checkPointRef.current[1] = elem)} />
      <About />
      <div ref={(elem) => (checkPointRef.current[2] = elem)} />
      <Projects />
    </RecoilRoot>
  );
};

export default Home;
