import { ReviewData, ReviewType } from "@/data/review_data";
import classes from "./ReviewContainer.module.scss";
import ReviewElement from "./ReviewElement";
import Carousel from "react-material-ui-carousel";
import Button from "@/components/common/Button";
import { useRouter } from "next/router";

export default function ReviewContainer(): JSX.Element {
  const router = useRouter();

  return (
    <div className={classes.container}>
      <h1>Love from our Students</h1>
      <div className={classes.subContainer}>
        <Carousel
          className={classes.carousel}
          animation="slide"
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
      <Button
        text="More Reviews"
        onClick={() => {
          router.push(
            "https://www.google.com/maps/place/Excellence+Foundation/@19.9999256,73.7816958,17z/data=!4m8!3m7!1s0x3bddeb92e4b0246f:0x89107d379ac1ebf1!8m2!3d20.0013234!4d73.773573!9m1!1b1!16s%2Fg%2F11j8_ws1p0?entry=ttu"
          );
        }}
        padding="0.5rem 2rem"
      />
    </div>
  );
}
