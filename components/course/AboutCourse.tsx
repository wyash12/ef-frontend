import classes from "./AboutCourse.module.scss";

export default function AboutCourse({ data }: { data: string }): JSX.Element {
  return (
    <div className={classes.container}>
      <h1>ABOUT INTERNSHIP TRAINING</h1>
      <p>{data}</p>
    </div>
  );
}
