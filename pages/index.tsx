import type { NextPage } from "next";
import NavBar from "../public/components/NavBar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <div>hello world</div>
    </>
  );
};

export default Home;
