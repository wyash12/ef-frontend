import { IconType } from "react-icons";
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
      <h1>
        {props.icon} {props.number}+
      </h1>
      <p>{props.firstTitle}</p>
      <p>{props.secondTitle}</p>
    </div>
  );
}
