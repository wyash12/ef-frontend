import Image from "next/image";
import classes from "./TitleContainer.module.scss";
import titleContainerImage from "../../../public/title_container.png";
// import Button from "../../common/Button";
import TypewriterComponent from "typewriter-effect";
import { NextRouter, useRouter } from "next/router";

export default function TitleContainer(): JSX.Element {
  const router: NextRouter = useRouter();
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <div className={classes.tContainer}>
          <h1>A top-notch civil engineers skill development platform</h1>
          <div className={classes.paraWrapper}>
            <TypewriterComponent
              options={{
                loop: true,
                autoStart: true,
                delay: 150,
                strings:
                  "Enhance your personal and professional skills to derive a hassle-free career growth!",
                deleteSpeed: 20,
                wrapperClassName: classes.para,
              }}
            />
          </div>
          {/* <Button
            onClick={() => {}}
            text="Explore >"
            padding="0.6rem 4rem"
            fontSize={1.1}
          /> */}
          <button
            onClick={() => {
              router.push("/#course");
            }}
          >
            Explore &gt;
          </button>
        </div>
      </div>
      <div className={classes.imageContainer}>
        <Image
          src={titleContainerImage}
          alt="Excellence foundation landing image"
        />
      </div>
    </div>
  );
}
