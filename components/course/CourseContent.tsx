import { CourseContentElementModel } from "@/models/CourseElementModel";
import classes from "./CourseContent.module.scss";
import { PiDotOutlineFill } from "react-icons/pi";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";
import { PiDotOutlineDuotone } from "react-icons/pi";

function ContentElement({
  data,
}: {
  data: CourseContentElementModel;
}): JSX.Element {
  const [isShow, SetIsShow] = useState<boolean>(false);

  const onCLickShow = (event: React.MouseEvent) => {
    event.stopPropagation();
    SetIsShow(!isShow);
  };

  return (
    <div
      className={classes.elementContainer}
      onClick={onCLickShow}
      // onClick={() => {
      //   SetIsShow(!isShow);
      // }}
    >
      <div className={classes.elementSubContainer}>
        <div className={classes.title}>
          <PiDotOutlineFill />
          <h3>{data.title}</h3>
        </div>
        {data.points !== undefined &&
          data.points.length > 0 &&
          (isShow ? <AiOutlineMinus /> : <AiOutlinePlus />)}
      </div>
      <div className={classes.points}>
        {isShow &&
          data.points !== undefined &&
          data.points.map((element, index) => {
            if (typeof element == "string") {
              return (
                <div key={index} className={classes.pointsContainer}>
                  <PiDotOutlineDuotone />
                  <p>{element}</p>
                </div>
              );
            }
            return <ContentElement key={index} data={element} />;
          })}
      </div>
    </div>
  );
}

export default function CourseContentContainer({
  data,
}: {
  data: Array<CourseContentElementModel>;
}): JSX.Element {
  return (
    <div className={classes.container}>
      <h1>COURSE CONTENT</h1>
      <div className={classes.subContainer}>
        {data.map((element: CourseContentElementModel, index) => (
          <ContentElement data={element} key={index} />
        ))}
      </div>
    </div>
  );
}
