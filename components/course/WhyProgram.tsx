import classes from "./WhyProgram.module.scss";
import { FaChevronCircleRight } from "react-icons/fa";

export default function WhyProgram({
  content,
}: {
  content: Array<string>;
}): JSX.Element {
  return (
    <div className={classes.container}>
      <h1>{`WHY THIS PROGRAM ?`}</h1>
      <div className={classes.subContainer}>
        <div className={classes.sc}>
          {content.map((ele, index) => {
            if (index % 2 == 0) {
              return (
                <div key={ele} className={classes.ele}>
                  <div className={classes.icon}>
                    <FaChevronCircleRight />
                  </div>
                  <p>{ele}</p>
                </div>
              );
            }
            // return <></>;
          })}
        </div>
        <div className={classes.sc}>
          {content.map((ele, index) => {
            if (index % 2 == 1) {
              return (
                <div key={ele} className={classes.ele}>
                  <div className={classes.icon}>
                    <FaChevronCircleRight />
                  </div>
                  <p>{ele}</p>
                </div>
              );
            }
            // return <></>;
          })}
        </div>
      </div>
    </div>
  );
}
