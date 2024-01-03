import classes from "@/components/contact-us/Containers/RightContain.module.scss";
import Image from "next/image";
import Contact1 from "@/public/Contact1.png";
export default function RightContain(): JSX.Element {
  return (
    <div className={classes.wrapper}>
      <div className={classes.Imgdiv}>
        <Image className={classes.Img} src={Contact1} alt="" />
      </div>
    </div>
  );
}
