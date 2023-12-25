import PaymentComponent from "@/components/register/PaymentComponent";
import { CourseData } from "@/data/course_data";
import OrderModel from "@/models/OrderModel";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function Payment(): JSX.Element {
  const router = useRouter();
  const [courseOrder, setCourseOrder] = useState<{
    order: OrderModel;
    course: string;
    courseIndex: number;
  } | null>(null);

  if (typeof window !== "undefined") {
    window.onunload = () => {
      // localStorage.clear();
    };
  }

  useEffect(() => {
    const localOrder = localStorage.getItem("Order");
    const localCourse = localStorage.getItem("Course");
    if (localOrder === null || localCourse === null) {
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
    });
  }, [router]);

  if (courseOrder !== null)
    return (
      <PaymentComponent
        feesBreakup={CourseData[courseOrder!.courseIndex].fees_breakup}
        trainingDescription={
          CourseData[courseOrder!.courseIndex].training_description
        }
        trainingName={CourseData[courseOrder!.courseIndex].title}
      />
    );

  return <></>;
}

Payment.getLayout = function getLayout(page: any) {
  return <>{page}</>;
};
