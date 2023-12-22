import classes from "./Right.module.scss";
import HeroImg from "@/public/HeroImg.png";
import Image from "next/image";
export default function Right(): JSX.Element {
  return (
    <div className={classes.Img}>
      <div className={classes.mainImg}>
        <Image
          src={HeroImg}
          alt=""
          style={{ width: "100%", height: "inherit" }}
        />
      </div>
    </div>
  );
}
