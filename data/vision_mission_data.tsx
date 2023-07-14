import { StaticImageData } from "next/image";
import visionImg from "../public/vision.png";
import missionImg from "../public/mission.png";
import uspImg from "../public/usp.png";

export interface VisionMissionType {
  title: string;
  description: string;
  image: StaticImageData;
}

export let VisionMissionData: Array<VisionMissionType> = [
  {
    title: "Vision",
    description:
      "To craft technically profound civil engineers with our world-class teaching standards and get them industry-ready.",
    image: visionImg,
  },
  {
    title: "Mission",
    description:
      "We are on a mission to fuel civil engineers with a blend of technical and professional skills, helping them mark their existence in the industry.",
    image: missionImg,
  },
  {
    title: "USP",
    description:
      "Powered with a combination of practical and theoretical training, Excellence Foundation is a one-stop solution for Civil Engineers who wish to mark their prominence in the market.",
    image: uspImg,
  },
];
