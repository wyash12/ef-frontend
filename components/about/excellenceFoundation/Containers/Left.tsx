import React from "react";
import classes from "./Left.module.scss";
export default function Left(): JSX.Element {
  return (
    <div className={classes.wrapper}>
      <div className={classes.heading2}>
        A top-notch civil engineers skill development platform
      </div>
      <div className={classes.paragraph}>
        Enhance your personal and professional skills to derive a hassle-free
        career growth!
      </div>
    </div>
  );
}
