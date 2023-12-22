import React from "react";
import classes from "@/components/contact-us/ContactContainer.module.scss";
import LeftContain from "./Containers/LeftContain";
import RightContain from "./Containers/RightContain";

export default function ContactPage(): JSX.Element {
  return (
    <>
      <div className={classes.contactDiv}>
        <div className={classes.headingDiv}>Contact Form</div>
        <div className={classes.LnRcontainer}>
          <div className={classes.Left}>
            <LeftContain />
          </div>
          <div className={classes.Right}>
            <RightContain />
          </div>
        </div>
      </div>
    </>
  );
}
