import classes from "./VisionMissionElement.module.scss";
import Image from "next/image";
import { Slide } from "react-awesome-reveal";
import VisionMissionModel from "@/models/VisionMissionModel";

export default function VisionMissionElement({
  data,
}: {
  data: VisionMissionModel;
}): JSX.Element {
  return (
    <div className={classes.container}>
      <div className={classes.details}>
        <Slide direction="left" delay={1} fraction={0.7} triggerOnce>
          <>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
          </>
        </Slide>
      </div>
      <div className={classes.img}>
        <Slide direction="right" delay={1} fraction={0.7} triggerOnce>
          <Image src={data.image} alt={data.title} />
        </Slide>
      </div>
    </div>
  );
}
