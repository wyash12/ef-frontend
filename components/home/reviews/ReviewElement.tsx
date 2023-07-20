import classes from "./ReviewElement.module.scss";
import { FcGoogle } from "react-icons/fc";
import { BsStarFill } from "react-icons/bs";
import { ReviewType } from "@/data/review_data";
import Image from "next/image";

export default function ReviewElement({
  data,
}: {
  data: ReviewType;
}): JSX.Element {
  let starContent: Array<JSX.Element> = [];
  for (let i = 0; i < data.star; i++) {
    starContent.push(<BsStarFill key={i} />);
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.subContainer}>
          <div className={classes.details}>
            <div className={classes.img}>
              <Image src={data.img} alt={data.review} />
            </div>
            <div className={classes.name}>
              <h3>{data.name}</h3>
              <div className={classes.starContainer}>
                <FcGoogle />
                <div className={classes.star}>{starContent}</div>
              </div>
            </div>
          </div>
          <div className={classes.description}>
            <p>{data.review}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
