import Image from "next/image";
import classes from "./Path.module.scss";
import pathImage from "../../../public/path.png";

export default function PathContainer(): JSX.Element {
  return (
    <div className={classes.container}>
      <Image alt="Why to Choose Excellence FOundation" src={pathImage} />
    </div>
  );
}
