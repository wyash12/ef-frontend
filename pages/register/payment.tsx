import PaymentComponent from "@/components/register/PaymentComponent";
import { CourseData } from "@/data/course_data";
import OrderModel from "@/models/OrderModel";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";

export default function Payment(): JSX.Element {
  const router = useRouter();
  const [courseOrder, setCourseOrder] = useState<{
    order: OrderModel;
    course: string;
    courseIndex: number;
    name: string;
    mobileNumber: string;
    email: string;
  } | null>(null);

  if (typeof window !== "undefined") {
    window.onunload = () => {
      // localStorage.clear();
    };
  }

  useEffect(() => {
    const localOrder = localStorage.getItem("Order");
    const localCourse = localStorage.getItem("Course");
    const localName = localStorage.getItem("Name");
    const localMobileNumber = localStorage.getItem("MobileNumber");
    const localEmail = localStorage.getItem("Email");

    if (
      localOrder === null ||
      localCourse === null ||
      localName === null ||
      localMobileNumber === null ||
      localEmail === null
    ) {
      router.replace("/register");
      return;
    }
    const findIndex = CourseData.findIndex(
      (item) => item.title === localCourse
    );
    setCourseOrder({
      course: localCourse,
      order: JSON.parse(localOrder),
      courseIndex: findIndex,
      email: localEmail,
      mobileNumber: localMobileNumber,
      name: localName,
    });
  }, [router]);

  if (courseOrder !== null)
    return (
      <>
        <html>
          <Head>
            <title>Excellence Foundation</title>
            <meta name="Excellence foundation Payment page" />
          </Head>
          <PaymentComponent
            feesBreakup={CourseData[courseOrder!.courseIndex].fees_breakup}
            trainingDescription={
              CourseData[courseOrder!.courseIndex].training_description
            }
            trainingName={CourseData[courseOrder!.courseIndex].title}
            orderData={courseOrder.order}
            email={courseOrder.email}
            name={courseOrder.name}
            mobileNumber={courseOrder.mobileNumber}
          />
        </html>
        <Script
          crossOrigin="anonymous"
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="lazyOnload"
          onLoad={() => {
            console.log("Loaded succefully");
          }}
          onError={() => {
            alert("Something went wrong, please try again... ");
            if (typeof window !== "undefined") {
              window.onunload = () => {
                localStorage.clear();
              };
            }
            router.replace("/register");
          }}
        />
      </>
    );

  return <></>;
}

Payment.getLayout = function getLayout(page: any) {
  return <>{page}</>;
};
