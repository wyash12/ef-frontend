import { VisionMissionData } from "@/data/vision_mission_data";
import classes from "./VisionMissionContainer.module.scss";
import VisionMissionElement from "./VisionMissionElement";
import VisionMissionModel from "@/models/VisionMissionModel";

export default function VisionMissionContainer(): JSX.Element {
  return (
    <div className={classes.container}>
      {VisionMissionData.map((element: VisionMissionModel, index: number) => (
        <VisionMissionElement key={index} data={element} />
      ))}
    </div>
  );
}
