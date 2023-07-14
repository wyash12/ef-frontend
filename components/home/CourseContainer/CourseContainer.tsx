import { CourseData, CourseElementType } from "@/data/course_data";
import classes from "./CourseContainer.module.scss";
import CourseElement from "./CourseElement";

export default function CourseContainer(): JSX.Element {
  return (
    <div className={classes.container}>
      <h1>Internship training courses </h1>
      <div className={classes.courseContainer}>
        {CourseData.map((element: CourseElementType, index) => {
          return <CourseElement key={index} data={element} />;
        })}
      </div>
    </div>
  );
}
