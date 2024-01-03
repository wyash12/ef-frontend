import classes from "@/components/contact-us/Containers/LeftContain.module.scss";

export default function LeftContain(): JSX.Element {
  const handleSubmit = () => {
    console.log("buttonClicked");
  };

  return (
    <div className={classes.wrapper}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.container}>
          <label>Your Name</label>
          <div className={classes.inputWrapper}>
            <input type="text" />
          </div>
        </div>
        <div className={classes.container}>
          <label>Email</label>
          <div className={classes.inputWrapper}>
            <input type="text" />
          </div>
        </div>{" "}
        <div className={classes.container}>
          <label>Subject</label>
          <div className={classes.inputWrapper}>
            <input type="text" />
          </div>
        </div>
        <div className={classes.messageContainer}>
          <label>Message</label>
          <div className={classes.inputWrapper}>
            <input type="text" />
          </div>
        </div>
        <button type="submit" className={classes.Button}>
          Send Message
        </button>
      </form>
    </div>
  );
}
