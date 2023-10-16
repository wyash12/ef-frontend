import CounterElementModel from "@/models/CounterElementModel";
import { BiSolidUserAccount } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";
import { ImHourGlass } from "react-icons/im";
import { IoConstruct } from "react-icons/io5";

export let CounterData: Array<CounterElementModel> = [
  {
    icon: <HiUserGroup />,
    number: 1500,
    firstTitle: "Student",
    secondTitle: "Transformed",
  },
  {
    icon: <BiSolidUserAccount />,
    number: 950,
    firstTitle: "Placed",
    secondTitle: "Students",
  },
  {
    icon: <IoConstruct />,
    number: 85,
    firstTitle: "Workshops",
    secondTitle: "Conducted",
  },
  {
    icon: <ImHourGlass />,
    number: 6000,
    firstTitle: "Training",
    secondTitle: "Hours",
  },
];
