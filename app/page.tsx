import styles from "./styles/page.module.scss";
import { Hero, Steps, Cta, Cards, Progress } from "@components";

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

const dataSteps = {
  items: [
    {
      title: "Price",
      description: "Set the price of what you are tokenizing.",
    },
    {
      title: "Receive",
      description:
        "Set the token you want to receive in the sale, you can even get paid in BONK.",
    },
    {
      title: "Time",
      description:
        "Set the time period during which the buyer can get a refund. If the buyer burns the token, they will not be able to access the funds, and you will have to wait that time to withdraw the funds.",
    },
    {
      title: "Choose",
      description:
        "Choose between an unlimited or limited sale. In the case of a limited sale, define how many sales you want to make.",
    },
    {
      title: "Fees",
      description:
        "If you are building an app that aims to create a marketplace, you have the option to set fees to the permissionless market you are creating.",
    },
  ],
};

const dataCta = {
  title: "Explore more",
  description: "Choose between an unlimited or limited sale",
  url: "/",
};

const dataCards = {
  items: [
    {
      title: "Fees",
      description:
        "You want to automate refunds and streamline your business operations.",
      icon: {
        name: "atom",
      },
    },
    {
      title: "Fees",
      description:
        "You want to automate refunds and streamline your business operations.",
      icon: {
        name: "atom",
      },
    },
    {
      title: "Fees",
      description:
        "You want to automate refunds and streamline your business operations.",
      icon: {
        name: "atom",
      },
    },
  ],
};

const dataProgress = {
  items: [
    {
      title: "Public indexer",
      description: "This is a core thing",
      percentage: 100,
    },
    {
      title: "TS library and rust crate",
      description: "This is a core thing",
      percentage: 80,
    },
    {
      title: "Invoice processing platform",
      description: "This is a core thing",
      percentage: 50,
    },
  ],
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero {...dataHero} />
      <Cta {...dataCta} />
      <Steps {...dataSteps} />
      <Cards {...dataCards} />
      <Progress {...dataProgress} />
    </main>
  );
}
