import React from "react";
import Image from "next/image";
import { useState } from "react";
import DatePicker from "react-datepicker";
import Insert_Table from "@/public/Insert_Table.png";
import classes from "@/components/register/Containers/RightContainer.module.scss";

export default function RightContainer() {
  // const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  // const handleDateChange = (date: Date | null) => {
  //   setSelectedDate(date);
  // };

  const handleSubmit = () => {
    console.log("submitted");
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Register</h2>
      <p className={classes.description}>
        Fill the form to join the internship Training program for civil
        engineers
      </p>
      <form className={classes.form}>
        <div className={classes.divClass}>
          <label htmlFor="Name">
            Full Name<span className={classes.spanClass}>*</span>
          </label>
          <div className={classes.inputWrapper}>
            <input
              type="text"
              className={classes.inputBox}
              // placeholder="Enter your full name"
              required
            />
          </div>
        </div>
        <div className={classes.divClass}>
          <label htmlFor="Email">
            Email<span className={classes.spanClass}>*</span>
          </label>
          <div className={classes.inputWrapper}>
            <input type="text" className={classes.inputBox} />
          </div>
        </div>
        <div className={classes.divClass}>
          <label htmlFor="Organinsation">
            College/Organization/Company Name
            <span className={classes.spanClass}>*</span>
          </label>
          <div className={classes.inputWrapper}>
            <input type="text" className={classes.inputBox} />
          </div>
        </div>
        <div className={classes.bdayAndWhatsappDiv}>
          <div className={`${classes.birthdayDiv} ${classes.divClass}`}>
            <label htmlFor="Birtdate">
              Birthday
              <span className={classes.spanClass}>*</span>
            </label>

            <div className={classes.inputWrapper}>
              <input type="date" className={classes.inputBox} />
            </div>
            {/* <Image src={Insert_Table} alt="" className={classes.imgClass} /> */}
          </div>
          <div className={`${classes.wappDiv} ${classes.divClass}`}>
            <label htmlFor="Whatsapp Nubmer">
              WhatsApp No.<span className={classes.spanClass}>*</span>
            </label>
            <div className={classes.inputWrapper}>
              <input type="text" className={classes.inputBox} />
            </div>
          </div>
        </div>
        <div className={classes.batchAndCourseDiv}>
          <div className={`${classes.batchDiv} ${classes.divClass}`}>
            <label htmlFor="Batch">
              Batch<span className={classes.spanClass}>*</span>
            </label>
            <div className={classes.inputWrapper}>
              <input type="text" className={classes.inputBox} />
            </div>
          </div>
          <div className={`${classes.courseDiv} ${classes.divClass}`}>
            <label htmlFor="Course">
              Course<span className={classes.spanClass}>*</span>
            </label>
            <div className={classes.inputWrapper}>
              <input type="text" className={classes.inputBox} />
            </div>
          </div>
        </div>
        <div className={classes.divClass}>
          <label htmlFor="current-address">
            Current Address<span className={classes.spanClass}>*</span>
          </label>
          <div className="">
            <div className={classes.inputWrapper}>
              <input type="text" className={classes.inputBox} />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className={classes.register}
          onSubmit={handleSubmit}
        >
          Register
        </button>
      </form>
    </div>
  );
}
