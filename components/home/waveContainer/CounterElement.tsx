import CountUp from "react-countup";
import classes from "./CounterElement.module.scss";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Bounce } from "react-awesome-reveal";
import { CounterElementType } from "@/data/counter_data";

export default function CounterElement(props: CounterElementType) {
  const { ref: counterRef, inView: counterInView } = useInView();
  const [isInit, setIsInit] = useState(true);

  return (
    <div className={classes.container} ref={counterRef}>
      <Bounce triggerOnce>
        <div className={classes.subContainer}>
          <h1>
            {props.icon}{" "}
            {counterInView && isInit ? (
              <CountUp
                end={props.number}
                onEnd={() => {
                  setIsInit(false);
                }}
                delay={0.1}
                duration={2}
              >
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
            ) : (
              <span>{props.number}</span>
            )}
            +
          </h1>
          <p>{props.firstTitle}</p>
          <p>{props.secondTitle}</p>
        </div>
      </Bounce>
    </div>
  );
}
