import type { NextPage } from "next";
import About from "../public/components/About";
import NavBar from "../public/components/NavBar";
import Projects from "../public/components/Projects";
import Title from "../public/components/Title";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <Title />
      <About />
      <Projects />
    </>
  );
};

export default Home;
