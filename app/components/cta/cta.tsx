"use client";
import Link from "next/link";
import React from "react";
import classNames from "classnames/bind";
import styles from "./cta.module.scss";
import { Icon, Card } from "@ui";
const cx = classNames.bind(styles);

interface IProps {
  className?: string;
  title?: string;
  description?: string;
  url?: string;
}

const Cta = ({ className, title, description, url }: IProps) => {
  const classes = cx({ cta: true }, className);
  return (
    <Card className={classes}>
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
      <div>{url && <Link href={url}>Explore the app</Link>}</div>
      <Icon className={styles.artifact} name={"artifact"} width={300} />
    </Card>
  );
};

export default Cta;
