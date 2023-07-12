import CountUp from "react-countup";
import classes from "./CounterElement.module.scss";

interface propsType {
  icon: JSX.Element;
  number: number;
  firstTitle: string;
  secondTitle: string;
}

export default function CounterElement(props: propsType) {
  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <h1>
          {props.icon} <CountUp end={props.number} />+
        </h1>
      </div>
      <p>{props.firstTitle}</p>
      <p>{props.secondTitle}</p>
    </div>
  );
}
