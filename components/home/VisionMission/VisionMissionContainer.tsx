import {
  VisionMissionData,
  VisionMissionType,
} from "@/data/vision_mission_data";
import classes from "./VisionMissionContainer.module.scss";
import VisionMissionElement from "./VisionMissionElement";

export default function VisionMissionContainer(): JSX.Element {
  return (
    <div className={classes.container}>
      {VisionMissionData.map((element: VisionMissionType, index: number) => (
        <VisionMissionElement key={index} data={element} />
      ))}
    </div>
  );
}
