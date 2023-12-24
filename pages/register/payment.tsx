import CourseElementModel from "@/models/CourseElementModel";
import OrderModel from "@/models/OrderModel";
import userData from "@/models/UserDataModel";

export default function Payment({
  orderData,
}: {
  orderData: OrderModel;
}): JSX.Element {
  return <h1>Hello</h1>;
}

Payment.getLayout = function getLayout(page: any) {
  return <>{page}</>;
};
