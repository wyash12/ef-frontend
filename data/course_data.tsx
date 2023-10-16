import courseImg from "../public/course.png";
import CourseElementModel from "@/models/CourseElementModel";

export let CourseData: Array<CourseElementModel> = [
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
    title: "Professional Billing Course",
    subTitle: "Signature Program",
    days: 15,
    features: [
      "100%  Placement Assistance.",
      "Off-site & On-Site Training.",
      "Business Skills.",
    ],
    path: "/course/professional-billing-course",
    courseImg: courseImg,
  },
  {
    title: "Professional Estimation & Costing Training Program",
    subTitle: "Signature Program",
    days: 15,
    features: [
      "100%  Placement Assistance.",
      "Off-site & On-Site Training.",
      "Business Skills.",
    ],
    path: "/course/professional-estimation-costing-tringing-program",
    courseImg: courseImg,
  },
];
