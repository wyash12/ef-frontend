import classes from "./Right.module.scss";
import HeroImg from "@/public/HeroImg.png";
import Image from "next/image";
export default function Right(): JSX.Element {
  return (
    <div className={classes.Img}>
      <Image
        src={HeroImg}
        alt=""
        style={{ width: "35rem", height: "inherit" }}
      />
    </div>
  );
}
