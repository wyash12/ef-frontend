import classes from "./PaymentComponent.module.scss";
import topImage from "../../public/footer_bgtop.png";
import bottomImage from "../../public/footer_bg.png";
import EFImage from "../../public/logo.png";
import Image from "next/image";
import { notification } from "antd";
import { useEffect, useState } from "react";
import OrderModel from "@/models/OrderModel";
import { useRouter } from "next/router";
import { serverUrl } from "@/data/server_url";

interface Props {
  trainingName: string;
  trainingDescription: string;
  feesBreakup: string;
  orderData: OrderModel;
  name: string;
  mobileNumber: string;
  email: string;
}

export default function PaymentComponent(data: Props): JSX.Element {
  const router = useRouter();
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    api["info"]({
      message: `Please don't refresh or leave the page`,
      duration: null,
    });
  }, [api]);

  const onPaymentHandler = () => {
    const options = {
      key: "rzp_test_jRv92tDiAcSF66",
      amount: data.orderData.amount,
      currency: data.orderData.currency,
      name: "Excellence Foundation",
      image: EFImage,
      order_id: data.orderData.id,
      theme: {
        color: "#22405B",
      },
      remember_customer: false,
      // callback_url: "http://localhost:3000",
      timeout: 300,
      prefill: {
        name: data.name,
        email: data.email,
        contact: data.mobileNumber,
      },
      handler: async function (response: any) {
        try {
          const resData = {
            orderCreationId: data.orderData.id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          };
          // console.log(resData);
          const res = await fetch(
            `${serverUrl}/course-registration/payment/status`,
            {
              body: JSON.stringify(resData),
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const result = await res.json();
          // console.log(result);
          if (result.errorMessage) {
            throw new Error(result.errorMessage);
          }
          if (!result.message) {
            throw new Error("Something went wrong!!");
          }
          alert(result.message);
          localStorage.clear();
          router.replace("/");
        } catch (error: any) {
          alert(
            "Something went wrong! Please try to contact administration at +91-8830135459"
          );
          localStorage.clear();
          router.replace("/register");
        }
      },
    };

    // console.log(window);
    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className={classes.container}>
      {contextHolder}
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
        <button onClick={onPaymentHandler}>PAY NOW</button>
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
