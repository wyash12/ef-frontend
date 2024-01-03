import classes from "./CourseElement.module.scss";
import { useRouter } from "next/router";
import { MdOutlineWatchLater } from "react-icons/md";
import Image from "next/image";
import CourseElementModel from "@/models/CourseElementModel";
import { useEffect, useState } from "react";

export default function CourseElement({
  data,
}: {
  data: CourseElementModel;
}): JSX.Element {
  const router = useRouter();
  const [imgHeight, setImgHeight] = useState(0);
  const [wrapperHeight, setWrapperHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  // let ele;
  // if (document !== undefined)
  //   ele = document.getElementById("img")?.offsetHeight;
  // console.log(ele);

  useEffect(() => {
    const imgH = document.getElementById(`${data.id}_img`)?.offsetHeight ?? 0;
    setImgHeight(imgH);
    setWrapperHeight(
      (document.getElementById(`${data.id}_details`)?.offsetHeight ?? 0) +
        imgH / 2 +
        16
    );
    setWindowWidth(window.innerWidth);
  }, []);
  // console.log(wrapperHeight);

  return (
    <div
      className={classes.container}
      style={
        windowWidth <= 716
          ? {
              height: wrapperHeight,
            }
          : {}
      }
      onClick={() => {
        router.push(data.path);
      }}
    >
      <div className={classes.img}>
        <Image src={data.courseImg} id={`${data.id}_img`} alt={data.title} />
      </div>
      <div className={classes.wrapper} id={`${data.id}_wrapper`}>
        <div
          className={classes.imgSpaceTaker}
          style={
            windowWidth <= 716
              ? {
                  height: imgHeight / 2,
                }
              : {}
          }
        ></div>
        <div className={classes.details} id={`${data.id}_details`}>
          <h2>{data.title}</h2>
          <p>{data.subTitle}</p>
          <div className={classes.period}>
            <MdOutlineWatchLater /> {data.days} days
          </div>
          <div className={classes.featureExplore}>
            <ul>
              {data.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button
              onClick={() => {
                router.push(data.path);
              }}
            >
              Explore now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
