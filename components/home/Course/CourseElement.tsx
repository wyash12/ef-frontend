import classes from "./CourseElement.module.scss";
import { useRouter } from "next/router";
import { MdOutlineWatchLater } from "react-icons/md";
import Image from "next/image";
import CourseElementModel from "@/models/CourseElementModel";

export default function CourseElement({
  data,
}: {
  data: CourseElementModel;
}): JSX.Element {
  const router = useRouter();

  return (
    <div
      className={classes.container}
      onClick={() => {
        router.push(data.path);
      }}
    >
      <div className={classes.img}>
        <Image src={data.courseImg} alt={data.title} />
      </div>
      <div className={classes.wrapper}>
        <div className={classes.details}>
          <h2>{data.title}</h2>
          <p>{data.subTitle}</p>
          <div className={classes.period}>
            <MdOutlineWatchLater /> {data.days} days
          </div>
          <ul>
            {data.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className={classes.explore}>
          <button
            onClick={() => {
              router.push(data.path);
            }}
          >
            Explore now
          </button>
          {/* <Button
            onClick={() => {
              router.push(data.path);
            }}
            text="Explore now"
            padding="7px 30px"
          /> */}
        </div>
      </div>
    </div>
  );
}
