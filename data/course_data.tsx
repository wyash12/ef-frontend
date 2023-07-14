import { StaticImageData } from "next/image";
import courseImg from "../public/course.png";

export interface CourseElementType {
  title: string;
  subTitle: string;
  days: number;
  path: string;
  features: Array<string>;
  courseImg: StaticImageData;
}

export let CourseData: Array<CourseElementType> = [
  {
    title: "Skill Booster",
    subTitle: "Signature Program",
    days: 30,
    features: [
      "100%  Placement Assistance.",
      "Off-site & On-Site Training.",
      "Business Skills.",
    ],
    path: "/course/skill-booster",
    courseImg: courseImg,
  },
  {
    title: "Skill Booster",
    subTitle: "Signature Program",
    days: 30,
    features: [
      "100%  Placement Assistance.",
      "Off-site & On-Site Training.",
      "Business Skills.",
    ],
    path: "/course/skill-booster",
    courseImg: courseImg,
  },
  {
    title: "Skill Booster",
    subTitle: "Signature Program",
    days: 30,
    features: [
      "100%  Placement Assistance.",
      "Off-site & On-Site Training.",
      "Business Skills.",
    ],
    path: "/course/skill-booster",
    courseImg: courseImg,
  },
];
