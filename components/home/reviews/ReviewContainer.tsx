import { ReviewData, ReviewType } from "@/data/review_data";
import classes from "./ReviewContainer.module.scss";
import ReviewElement from "./ReviewElement";
import Carousel from "react-material-ui-carousel";

export default function ReviewContainer(): JSX.Element {
  return (
    <div className={classes.container}>
      <h1>Love from our Students</h1>
      <div className={classes.subContainer}>
        <Carousel
          className={classes.carousel}
          animation="slide"
          navButtonsAlwaysVisible={true}
          activeIndicatorIconButtonProps={{
            style: {
              color: "#0F9EC8",
            },
          }}
        >
          {ReviewData.map((element: ReviewType, index) => (
            <ReviewElement data={element} key={index} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
