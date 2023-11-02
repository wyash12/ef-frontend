import LeftContianer from "@/components/register/Containers/LeftContainer";
import RightContainer from "./Containers/RightContainer";
import classes from "@/components/register/RegisterationLanding.module.scss";
export default function RegsiterationLandingContainer() {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <LeftContianer />
      </div>
      <div className={classes.right}>
        <RightContainer />
      </div>
    </div>
  );
}
