import { StaticImageData } from "next/image";

export default interface CourseElementModel {
  title: string;
  subTitle: string;
  days: number;
  path: string;
  features: Array<string>;
  courseImg: StaticImageData;
}
