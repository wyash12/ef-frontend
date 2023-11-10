import { CourseData } from "@/data/course_data";
import classes from "./CourseContainer.module.scss";
import CourseElement from "./CourseElement";
import CourseElementModel from "@/models/CourseElementModel";

export default function CourseContainer(): JSX.Element {
  return (
    <div className={classes.container}>
      <h1>Internship training courses </h1>
      <div className={classes.courseContainer}>
        {CourseData.map((element: CourseElementModel, index) => {
          return <CourseElement key={element.id} data={element} />;
        })}
      </div>
    </div>
  );
}
