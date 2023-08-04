"use client";

import styles from "./styles/page.module.scss";
import {
  dataCards,
  dataColumn1,
  dataColumn2,
  dataColumn3,
  dataCta,
  dataHero,
  dataProgress,
  dataSlider,
  dataSteps,
} from "./utils/data";
import { Hero, Steps, Cta, Cards, Progress, Column } from "@components";
import { Slider } from "@ui";
import Fade from "react-reveal/Fade";

export default function Home() {
  return (
    <main className={styles.main}>
      <Fade>
        <Hero {...dataHero} />
        <Column fullWidth {...dataColumn1} />
        <Cta {...dataCta} />
        <Steps {...dataSteps} />
        <Column align="right" {...dataColumn2} />
        <Slider {...dataSlider} />
        <Column {...dataColumn3} />
        <Cards {...dataCards} />
        <Progress {...dataProgress} />
      </Fade>
    </main>
  );
}
