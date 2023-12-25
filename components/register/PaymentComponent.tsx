import classes from "./PaymentComponent.module.scss";
import topImage from "../../public/footer_bgtop.png";
import bottomImage from "../../public/footer_bg.png";
import EFImage from "../../public/logo.png";
import Image from "next/image";
import { notification } from "antd";
import { useEffect, useState } from "react";

interface Props {
  trainingName: string;
  trainingDescription: string;
  feesBreakup: string;
}

export default function PaymentComponent(data: Props): JSX.Element {
  // const [api, contextHolder] = notification.useNotification();
  // const [trigger, setTrigger] = useState(true);

  // useEffect(() => {
  //   if (trigger) {
  //     api["info"]({
  //       message: `Please don't refresh or leave the page`,
  //       duration: null,
  //     });
  //     setTrigger(false);
  //   }
  // }, [api, trigger]);

  return (
    <div className={classes.container}>
      {/* {contextHolder} */}
      <div className={classes.navbar}>
        <div className={classes.topImage}>
          <Image src={topImage} alt="Excellence Foundation" />
        </div>
        <Image src={EFImage} alt="Excellence foundation logo" />
      </div>
      <div className={classes.subContainerWrapper}>
        <div className={classes.subContainer}>
          <div className={classes.name}>
            <p>
              <b>Training Name -</b> {data.trainingName}
            </p>
          </div>
          <div className={classes.description}>
            <p>
              <b>Training Description -</b> {data.trainingDescription}
            </p>
          </div>
          <div className={classes.feesBreakup}>
            <p>
              <b>Fees Breakup -</b> {data.feesBreakup}
            </p>
          </div>
        </div>
        <button>PAY NOW</button>
      </div>
      <div className={classes.footer}>
        <div className={classes.bottomImage}>
          <Image src={bottomImage} alt="Excellence Foundation" />
        </div>
        <p>© 2024 All Rights Reserved. Design by Excellence Foundation</p>
      </div>
    </div>
  );
}
