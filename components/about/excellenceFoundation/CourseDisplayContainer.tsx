import React from "react";
import CourseElement from "./courseElement";
import { CourseData } from "@/data/course_data";
import CourseElementModel from "@/models/CourseElementModel";
import classes from "@/components/about/excellenceFoundation/CourseDisplayContainer.module.scss";
export default function CourseDisplayContainer(): JSX.Element {
  return (
    <>
      <div className={classes.heading}>Our Courses</div>
      <div className={classes.courseDiv}>
        {CourseData.map((element: CourseElementModel, index) => {
          return <CourseElement key={element.id} data={element} />;
        })}
      </div>
    </>
  );
}
