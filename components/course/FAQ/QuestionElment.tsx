import { FAQModel } from "@/models/CourseElementModel";
import classes from "./QuestionElement.module.scss";
import { PiDotOutlineFill } from "react-icons/pi";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useState } from "react";

export default function QuestionElement({
  questionData,
}: {
  questionData: FAQModel;
}): JSX.Element {
  const [isShowAns, setIsShowAns] = useState<boolean>(false);

  const showAnsChangeHandler = () => {
    setIsShowAns(!isShowAns);
  };

  return (
    <div className={classes.container} onClick={showAnsChangeHandler}>
      <div className={classes.questionContainer}>
        <div className={classes.question}>
          <PiDotOutlineFill />
          <p>{questionData.question}</p>
        </div>
        {isShowAns ? <AiOutlineUp /> : <AiOutlineDown />}
      </div>
      {isShowAns && (
        <div className={classes.answer}>
          <p>{questionData.answer}</p>
        </div>
      )}
    </div>
  );
}
