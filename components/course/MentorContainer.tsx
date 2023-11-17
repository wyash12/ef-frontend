import classes from "./MentorContainer.module.scss";
import Image from "next/image";
import mentorImg from "../../public/mentor.png";

export default function MentorContainer(): JSX.Element {
  return (
    <div className={classes.container}>
      <h1>Know Your Mentor!</h1>
      <Image src={mentorImg} alt="Aashlesh Rajesh Nyati" />
      <p>
        Mr. Aashlesh Nyati is a next-generation entrepreneur and mentor. With
        continuous assistance and training, he believes in constructing a strong
        future for the Civil Engineers, architects, and interior designers of
        tomorrow. He strongly believes in contextual learning that is perceived
        in new ways. He established the Excellence Foundation to shape the
        careers of young civil engineers, architects, and interior designers by
        developing a self-learning attitude in his students.
      </p>
    </div>
  );
}
