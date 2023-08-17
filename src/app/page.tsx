import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>App is ready...</h1>
        <Link href="/dashboard">Goto Dashboard</Link>
      </div>
    </main>
  );
}
