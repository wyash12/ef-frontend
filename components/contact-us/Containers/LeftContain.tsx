import classes from "@/components/contact-us/Containers/LeftContain.module.scss";
// import { Textarea } from "@nextui-org/react";

export default function LeftContain(): JSX.Element {
  const handleSubmit = () => {
    console.log("buttonClicked");
  };

  return (
    <>
      <div className={classes.Formdiv}>
        <form>
          <div className={classes.Namediv}>
            <label className={classes.Labeldiv} htmlFor="Name">
              Your name <span className={classes.spanClass}>*</span>
            </label>
            <div>
              <input className={classes.inputDiv} type="text" />
            </div>
          </div>
          <div className={classes.Namediv}>
            <label htmlFor="Email" className={classes.Labeldiv}>
              Email <span className={classes.spanClass}>*</span>
            </label>
            <div>
              <input className={classes.inputDiv} type="text" />
            </div>
          </div>
          <div className={classes.Namediv}>
            <label className={classes.Labeldiv} htmlFor="Subject">
              Subject
            </label>
            <div>
              <input className={classes.inputDiv} type="text" />
            </div>
          </div>
          <div className={classes.Messagediv}>
            <label className={classes.Labeldiv}>Message</label>
            <div>
              <textarea rows={12} cols={121} className={classes.textArea} />
              {/* <input className={classes.inputDiv} type="textarea" /> */}
            </div>
          </div>
          <div className={classes.buttonDiv}>
            <button
              type="submit"
              className={classes.buttonB}
              onClick={handleSubmit}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
