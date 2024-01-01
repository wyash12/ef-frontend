import CountUp from "react-countup";
import classes from "./CounterElement.module.scss";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Bounce } from "react-awesome-reveal";
import CounterElementModel from "@/models/CounterElementModel";

export default function CounterElement({
  data,
}: {
  data: CounterElementModel;
}): JSX.Element {
  const { ref: counterRef, inView: counterInView } = useInView();
  const [isInit, setIsInit] = useState(true);

  return (
    <div className={classes.container} ref={counterRef}>
      <Bounce triggerOnce className={classes.subContainerWrapper}>
        <div className={classes.subContainer}>
          <h1>
            {data.icon}
            {/* {counterInView && isInit ? (
              <CountUp
                end={data.number}
                onEnd={() => {
                  setIsInit(false);
                }}
                delay={0.1}
                duration={2}
              >
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
            ) : (
              <span>{data.number}</span>
            )} */}
            <span>{data.number}</span>+
          </h1>
          <p>{data.firstTitle}</p>
          <p>{data.secondTitle}</p>
        </div>
      </Bounce>
    </div>
  );
}
