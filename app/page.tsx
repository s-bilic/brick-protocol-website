import styles from "./styles/page.module.scss";
import { Hero } from "@components";

const dataHero = {
  title: "Brick Protocol",
  description: "A configurable payment protocol to monetize your application",
  items: [
    {
      icon: {
        name: "atom",
        width: 20,
        height: 20,
      },
      title: "Monetize",
      description: "Easily monetize your app or services",
    },
    {
      icon: {
        name: "atom",
        width: 20,
        height: 20,
      },
      title: "Gating",
      description: "Use tokens as a gating solution ",
    },
    {
      icon: {
        name: "atom",
        width: 20,
        height: 20,
      },
      title: "Manage",
      description: "Inventory and payment methods are managable",
    },
  ],
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero {...dataHero} />
    </main>
  );
}
