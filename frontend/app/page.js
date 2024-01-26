import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Header from "@/components/header";
import Search from "@/components/search";
import HeroSection from "@/components/heroSection";

export default function Home() {
  return (
    <section className={styles.main}>
      <Header/>
      <Search/>
      <HeroSection/>
    </section>
  );
}
