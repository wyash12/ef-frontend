import CounterElement from "./CounterElement";
import classes from "./WaveContainer.module.scss";
import { FaHeart } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { BiSolidUserAccount } from "react-icons/bi";
import { IoConstruct } from "react-icons/io5";
import { ImHourGlass } from "react-icons/im";

export default function WaveContainer() {
  return (
    <div className={classes.ocean}>
      <div className={classes.wave}></div>
      <div className={classes.values}>
        <h1>
          The most adored community <FaHeart className={classes.heart} />
        </h1>
        <div className={classes.counterDiv}>
          {[
            {
              icon: <HiUserGroup />,
              number: 1500,
              firstTitle: "Student",
              secondTitle: "Transformed",
            },
            {
              icon: <BiSolidUserAccount />,
              number: 950,
              firstTitle: "Placed",
              secondTitle: "Students",
            },
            {
              icon: <IoConstruct />,
              number: 85,
              firstTitle: "Workshops",
              secondTitle: "Conducted",
            },
            {
              icon: <ImHourGlass />,
              number: 6000,
              firstTitle: "Training",
              secondTitle: "Hours",
            },
          ].map((element, index) => {
            return (
              <CounterElement
                key={index}
                icon={element.icon}
                number={element.number}
                firstTitle={element.firstTitle}
                secondTitle={element.secondTitle}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
