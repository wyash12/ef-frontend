import { StaticImageData } from "next/image";

export interface CourseContentElementModel {
  id: string;
  title: string;
  points?: Array<string | CourseContentElementModel>;
}

export interface FAQModel {
  id: string;
  question: string;
  answer: string;
}

export enum TrainingMode {
  Offline,
  Online,
}

export interface NextProgramDate {
  id: string;
  date: string;
  time?: string;
}

export default interface CourseElementModel {
  id: string;
  title: string;
  subTitle: string;
  days: number;
  path: string;
  features: Array<string>;
  courseImg: StaticImageData;
  next_program_date: Array<NextProgramDate>;
  training_mode: TrainingMode;
  training_fees: number;
  about_trining: string;
  course_content: Array<CourseContentElementModel>;
  why_program: Array<string>;
  faq: Array<FAQModel>;
}
