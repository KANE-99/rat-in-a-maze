import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Maze from "../components/Maze"
import { Provider } from "jotai"

const Home: NextPage = () => {
  return (<Provider><Maze /></Provider>);
};

export default Home;
