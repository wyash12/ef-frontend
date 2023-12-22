import React from "react";
import classes from "./HeroContainer.module.scss";
import Left from "./Containers/Left";
import Right from "./Containers/Right";

export default function HeroContainer(): JSX.Element {
  return (
    <div className={classes.wrapper}>
      <div className={classes.leftDiv}>
        <Left />
      </div>

      <div className={classes.rightDiv}>
        <Right />
      </div>
    </div>
  );
}
