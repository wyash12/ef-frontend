import classes from "./PlacementContainer.module.scss";
import placementImg from "../../../public/placement_logos.png";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";

export default function PlacementContainer(): JSX.Element {
  return (
    <div className={classes.container}>
      <div className={classes.company}></div>
      <div className={classes.title}>
        <h1>Placed with industry gaints!</h1>
      </div>
    </div>
  );
}
