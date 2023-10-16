import { StaticImageData } from "next/image";

export default interface ReviewModel {
  name: string;
  star: number;
  review: string;
  img: StaticImageData | string;
}
