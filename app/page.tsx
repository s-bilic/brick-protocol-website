"use client";

import styles from "./styles/page.module.scss";
import { Hero, Steps, Cta, Cards, Progress, Column } from "@components";
import { Slider } from "@ui";
import Fade from "react-reveal/Fade";

const dataHero = {
  title: "Brick Protocol",
  description: "A configurable payment protocol to monetize your application",
  items: [
    {
      icon: {
        name: "cash",
        width: 36,
        height: 36,
      },
      title: "Monetize",
      description: "Applications or services easily",
    },
    {
      icon: {
        name: "lock",
        width: 36,
        height: 36,
      },
      title: "Gating",
      description: "Securely using tokens",
    },
    {
      icon: {
        name: "manage",
        width: 36,
        height: 36,
      },
      title: "Manage",
      description: "Inventory and payment methods",
    },
  ],
};

const dataSteps = {
  heading: "Follow the steps",
  items: [
    {
      title: "Price",
      description: "Set the price of what you are tokenizing.",
    },
    {
      title: "Token",
      description:
        "Set the token you want to receive in the sale, you can even get paid in BONK.",
    },
    {
      title: "Time",
      description:
        "Set the time period during which the buyer can get a refund. If the buyer burns the token, they will not be able to access the funds, and you will have to wait that time to withdraw the funds.",
    },
    {
      title: "Type",
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
  title: "Discover",
  description: "Try the application and see for yourself",
  url: "/",
  text: "Launch",
};

const dataCards = {
  items: [
    {
      title: "Permisionless",
      description:
        "Anyone can sell on the marketplace. The alternative is Token gate or KYC.",
      icon: {
        name: "confirm",
      },
    },
    {
      title: "Confirmation",
      description:
        "If your use case needs to be sure that some event has happened, indexing a transfer is harder than using a custom program.",
      icon: {
        name: "confirm",
      },
    },
    {
      title: "Fees",
      description:
        "If you create an app that aims to create a marketplace, with this protocol a fee could be enforced.",
      icon: {
        name: "fee",
      },
    },
    {
      title: "Rewards",
      description:
        "The marketplace offers rewards to users who make purchases on the platform.",
      icon: {
        name: "confirm",
      },
    },
    {
      title: "Secondary Market",
      description:
        "The marketplace decides whether access to products or services can be resold. ",
      icon: {
        name: "automate",
      },
    },
    {
      title: "Metadata",
      description:
        "Tokens can have representations (images, videos) linked to them, useful for  video games marketplaces (skins, covers, etc.).",
      icon: {
        name: "fee",
      },
    },
  ],
};

const dataProgress = {
  heading: "Feature progress",
  items: [
    {
      title: "Public indexer",
      percentage: 100,
    },
    {
      title: "TypeScript library",
      percentage: 80,
    },
    {
      title: "Rust crate",
      percentage: 80,
    },
    {
      title: "Invoice processing platform",
      percentage: 50,
    },
  ],
};

const dataSlider = {
  items: [
    {
      icon: "solana",
    },
    {
      icon: "fishnet",
    },
    {
      icon: "superteam",
    },
    {
      icon: "solanahh",
    },
  ],
};

const dataExample = {
  title: "Tokenizing",
  description:
    "Think of a flight ticket: it represents a promise that you will enter the plane when you check in. The ticket is the token and the check-in is burning the token.",
  icon: "ticket",
};

const dataExample2 = {
  title: "Automate",
  description:
    "You want to automate refunds and streamline your business operations.",
  icon: "automate",
};

const dataExample3 = {
  description:
    "Brick aims to eliminate high commissions imposed by competitors such as Stripe and Paypal, offering businesses 0% fees for onboarding to the Solana blockchain.",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Fade>
        <Hero {...dataHero} />
        <Column fullWidth {...dataExample3} />
        <Cta {...dataCta} />
        <Steps {...dataSteps} />
        <Column align="right" {...dataExample} />
        <Slider {...dataSlider} />
        <Column {...dataExample2} />
        <Cards {...dataCards} />
        <Progress {...dataProgress} />
      </Fade>
    </main>
  );
}
