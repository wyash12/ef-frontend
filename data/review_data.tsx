import { StaticImageData } from "next/image";
import reviewImage from "../public/review.png";

export interface ReviewType {
  name: string;
  star: number;
  review: string;
  img: StaticImageData | string;
}

export let ReviewData: Array<ReviewType> = [
  {
    name: "Hrishikesh Wagh",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mi augue. Nulla nec fringilla lorem. Integer vitae luctus eros. Donec lobortis lobortis eros, vel viverra orci fringilla vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mi augue. Nulla nec fringilla lorem. Integer vitae luctus eros. Donec lobortis lobortis eros, vel viverra orci fringilla vel.",
    img: reviewImage,
    star: 5,
  },
  {
    name: "Vyankatesh Nyati",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mi augue. Nulla nec fringilla lorem. Integer vitae luctus eros. Donec lobortis lobortis eros, vel viverra orci fringilla vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mi augue. Nulla nec fringilla lorem. Integer vitae luctus eros. Donec lobortis lobortis eros, vel viverra orci fringilla vel.",
    img: reviewImage,
    star: 4,
  },
  {
    name: "Hrishikesh Wagh",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mi augue. Nulla nec fringilla lorem. Integer vitae luctus eros. Donec lobortis lobortis eros, vel viverra orci fringilla vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mi augue. Nulla nec fringilla lorem. Integer vitae luctus eros. Donec lobortis lobortis eros, vel viverra orci fringilla vel.",
    img: reviewImage,
    star: 4,
  },
];
