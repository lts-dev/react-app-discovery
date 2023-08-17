"use client";

import { useEffect } from "react";
import styles from "./dashboard.module.scss";
import useFetch from "@/hooks/useFetch";
import Title from "@/components/title/title";
import Counter from "@/components/counter/counter";
import { CountContextProvider } from "@/hooks/useContextState";

const Dashboard = () => {
  const { data } = useFetch("https://jsonplaceholder.typicode.com/todos");

  const getData = async () => {
    //"use server";
    const res = await fetch("https://api.github.com/repos/vercel/next.js");
    console.log(res);
  };

  //getData();

  //   useEffect(() => {
  //     console.log(data);
  //   }, [data]);

  console.log(data);

  return (
    <CountContextProvider>
      <div className={styles.dashboard}>
        <h1 style={{ color: styles.primaryColor }}>Dashboard</h1>
        <Title text="Sub-title"></Title>
        <Counter />
      </div>
    </CountContextProvider>
  );
};

export default Dashboard;

// export const getServerSideProps = async () => {
//   const res = await fetch("https://api.github.com/repos/vercel/next.js");
//   const repo = await res.json();
//   console.log(repo);

//   return { props: { repo } };
// };
