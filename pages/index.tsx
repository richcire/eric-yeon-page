import type { NextPage } from "next";
import About from "../public/components/About";
import NavBar from "../public/components/NavBar";
import Title from "../public/components/Title";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <Title />
      <About />
    </>
  );
};

export default Home;
