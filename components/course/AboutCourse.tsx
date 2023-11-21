import { useState } from "react";
import classes from "./AboutCourse.module.scss";

function ShowData({ data }: { data: string }): JSX.Element {
  const [showData, setShowData] = useState<boolean>(false);
  const dataArray = data.split(".");
  const dataArraySize = dataArray.length;

  return (
    <div className={classes.subContainer}>
      <p>
        {dataArray.map((d, index) => {
          if (index + 1 < dataArraySize / 2) {
            return (
              <span key={index}>
                {d}{index != dataArraySize - 1 && `.`}
              </span>
            );
          }
        })}
      </p>
      <p>
        {showData &&
          dataArray.map((d, index) => {
            if (index + 1 >= dataArraySize / 2) {
              return (
                <span key={index}>
                  {d}{index != dataArraySize - 1 && `.`}
                </span>
              );
            }
          })}
      </p>
      <button
        onClick={() => {
          setShowData(!showData);
        }}
      >
        {showData ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}

export default function AboutCourse({ data }: { data: string }): JSX.Element {
  // console.log(window.innerWidth)

  return (
    <div className={classes.container}>
      <h1>ABOUT INTERNSHIP TRAINING</h1>
      {window.innerWidth <= 900 ? <ShowData data={data} /> : <p>{data}</p>}
    </div>
  );
}
