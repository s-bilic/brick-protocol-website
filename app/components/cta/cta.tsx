"use client";
import Link from "next/link";
import React from "react";
import classNames from "classnames/bind";
import styles from "./cta.module.scss";
import { Icon, Card, Button } from "@ui";
const cx = classNames.bind(styles);

interface IProps {
  className?: string;
  title?: string;
  description?: string;
  text?: string;
  url?: string;
}

const Cta = ({ className, title, description, url, text }: IProps) => {
  const classes = cx({ cta: true }, className);
  return (
    <div className={classes}>
      <Card className={styles.card}>
        {title && <h3>{title}</h3>}
        {description && <p>{description}</p>}
        {url && <Button href={url} text={text} />}
        <Icon className={styles.artifact} name={"artifact"} width={300} />
      </Card>
    </div>
  );
};

export default Cta;
