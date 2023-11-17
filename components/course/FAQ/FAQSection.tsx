import { FAQModel } from "@/models/CourseElementModel";
import classes from "./FAQSection.module.scss";
import QuestionElement from "./QuestionElment";

export default function FAQSection({
  faq,
}: {
  faq: Array<FAQModel>;
}): JSX.Element {
  return (
    <div className={classes.container}>
      <h1>{`FAQ'S`}</h1>
      <div className={classes.subContainerWrapper}>
        <div className={classes.subContainer}>
          {faq.map((q, index) => {
            return (
              <>
                <QuestionElement questionData={q} />
                <div
                  key={q.id}
                  style={{
                    borderBottom:
                      index !== faq.length - 1 ? "2px solid #0F9EC8" : "none",
                  }}
                  className={classes.question}
                ></div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
