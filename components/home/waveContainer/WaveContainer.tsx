import CounterElement from "./CounterElement";
import classes from "./WaveContainer.module.scss";
import { FaHeart } from "react-icons/fa";
import { CounterData } from "@/data/counter_data";

export default function WaveContainer() {
  return (
    <div className={classes.ocean}>
      <div className={classes.wave}></div>
      <div className={classes.values}>
        <h1>
          The most adored community <FaHeart className={classes.heart} />
        </h1>
        <div className={classes.counterDiv}>
          {CounterData.map((element, index) => {
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
