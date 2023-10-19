import classes from "./Mentor.module.scss";
import mentorImg from "../../../public/mentor.png";
import Image from "next/image";

export default function MentorScreen(): JSX.Element {
  return (
    <div className={classes.container}>
      <h1>Know Your Mentor!</h1>
      <Image src={mentorImg} alt="Aashlesh Rajesh Nyati" />
      <p>
        Mr. Aashlesh Nyati is passionate about sharing his knowledge with
        students. He strongly believes in contextual learning that is perceived
        in new ways. He established the Excellence Foundation to shape the
        careers of young civil engineers. He also believes and analyses the
        potential of students to withstand every challenge in the construction
        industry. Mr.Aashlesh completed his bachelor&rsquo;s in civil
        engineering and post- graduation in construction management and 7 years
        of work Experience with Malpani Group, Shrinath Construction, Nyati
        Group, Somani Group, AP Associate and so on. Delivering robust on-site
        and off-site training, believing in the process of evolving and
        learning.
      </p>
    </div>
  );
}
