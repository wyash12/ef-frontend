import CounterElement from "./CounterElement";
import classes from "./WaveContainer.module.scss";
import { FaHeart } from "react-icons/fa";
import { CounterData } from "@/data/counter_data";
import { JsxElement } from "typescript";

export default function WaveContainer(): JSX.Element {
  return (
    <div className={classes.ocean}>
      <div className={classes.wave}></div>
      <div className={classes.values}>
        <h1>
          The most adored community <FaHeart className={classes.heart} />
        </h1>
        <div className={classes.counterDiv}>
          {CounterData.map((element, index) => {
            return <CounterElement key={index} data={element} />;
          })}
        </div>
      </div>
    </div>
  );
}