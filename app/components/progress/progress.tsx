"use client";
import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./progress.module.scss";
import { Card } from "@ui";
const cx = classNames.bind(styles);

interface IProps {
  className?: string;
  items?: [];
}

const Progress = ({ className, items }: IProps) => {
  const classes = cx({ progress: true }, className);

  return (
    <div className={classes}>
      {items?.map((item, index) => (
        <Card className={styles.item} key={index}>
          {(item?.title || item?.description) && (
            <div className={styles.content}>
              {item?.title && <h6>{item?.title}</h6>}
              {item?.percentage && (
                <div className={styles.bar}>
                  <div
                    className={[
                      styles.percentage,
                      item?.percentage === 100 ? styles.completed : "",
                    ].join(" ")}
                    style={{ width: `${item?.percentage}%` }}
                  ></div>
                </div>
              )}
              {item?.description && (
                <span className={styles.description}>{item?.description}</span>
              )}
            </div>
          )}
        </Card>
      ))}
    </div>
  );
};

export default Progress;
