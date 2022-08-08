import type { NextPage } from "next";
import { RecoilRoot } from "recoil";
import About from "../public/components/About";
import NavBar from "../public/components/NavBar";
import Projects from "../public/components/Projects";
import Title from "../public/components/Title";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <RecoilRoot>
      <NavBar />
      <Title />
      <About />
      <Projects />
    </RecoilRoot>
  );
};

export default Home;
