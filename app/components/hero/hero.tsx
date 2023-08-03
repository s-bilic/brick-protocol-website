"use client";

import React from "react";
import classNames from "classnames/bind";
import styles from "./hero.module.scss";
import { Icon, Card } from "@ui";
const cx = classNames.bind(styles);
import Spline from "@splinetool/react-spline";

interface IProps {
  className?: string;
  title?: string;
  description?: string;
  items?: [];
}

const Hero = ({ className, title, description, items }: IProps) => {
  const classes = cx({ hero: true }, className);
  return (
    <div className={classes}>
      <div className={styles.content}>
        <div className={styles.titleWrapper}>
          <Spline
            scene="https://prod.spline.design/SbC-vcycj798iWIM/scene.splinecode"
            style={{ height: 280 }}
          />
          {/* <Icon name={"logo"} width={80} height={80} /> */}
          {title && <h1>{title}</h1>}
        </div>
        {description && <h5>{description}</h5>}
      </div>
      <div>
        {items && (
          <div className={styles.items}>
            {items.map((item, index) => (
              <Card key={index} outline {...item} />
            ))}
          </div>
        )}
      </div>
      <p>Powered by</p>
      <Icon name={"solana"} height={50} width={160} />
    </div>
  );
};

export default Hero;
