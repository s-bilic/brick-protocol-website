"use client";
import React from "react";
import classNames from "classnames/bind";
import styles from "./button.module.scss";
import Link from "next/link";

const cx = classNames.bind(styles);

interface IProps {
  className?: string;
  href?: string;
  text?: string;
}

const Button = ({ className, href, text }: IProps) => {
  const classes = cx({ button: true }, className);

  return (
    <div>
      <Link className={classes} href={href}>
        <span>{text}</span>
      </Link>
    </div>
  );
};

export default Button;
