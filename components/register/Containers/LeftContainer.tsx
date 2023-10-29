import React from "react";
import reg1 from "@/public/reg1.png";
import Image from "next/image";
import classes from "@/components/register/Containers/LeftCont.module.scss";

export default function LeftContainer() {
  return (
    <>
      <Image src={reg1} alt="" />
      <p className={classes.text1}>
        Enhance your personal and professional skills to derive a hassle-free
        career growth!
      </p>
    </>
  );
}
