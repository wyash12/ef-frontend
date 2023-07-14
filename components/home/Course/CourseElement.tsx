import { CourseElementType } from "@/data/course_data";
import classes from "./CourseElement.module.scss";
import Button from "@/components/common/Button";
import { useRouter } from "next/router";
import { MdOutlineWatchLater } from "react-icons/md";
import Image from "next/image";

export default function CourseElement({
  data,
}: {
  data: CourseElementType;
}): JSX.Element {
  const router = useRouter();

  return (
    <div className={classes.container}>
      <div className={classes.img}>
        <Image src={data.courseImg} alt={data.title} />
      </div>
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
        <Button
          onClick={() => {
            router.push(data.path);
          }}
          text="Explore now"
          padding="7px 30px"
        />
      </div>
    </div>
  );
}
