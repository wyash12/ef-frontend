import React from "react";
import Image from "next/image";
import { useState } from "react";
import DatePicker from "react-datepicker";
import Insert_Table from "@/public/Insert_Table.png";
import classes from "@/components/register/Containers/RightContainer.module.scss";

export default function RightContainer() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleSubmit = () => {
    console.log("submitted");
  };
  return (
    <>
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
          <div>
            <input
              type="text"
              className={classes.inputBox}
              placeholder="Enter your full name"
            />
          </div>
        </div>
        <div className={classes.divClass}>
          <label htmlFor="Email">
            Email<span className={classes.spanClass}>*</span>
          </label>
          <div>
            <input type="text" className={classes.inputBox} />
          </div>
        </div>
        <div className={classes.divClass}>
          <label htmlFor="Organinsation">
            College/Organization/Company Name
            <span className={classes.spanClass}>*</span>
          </label>
          <div className="">
            <input type="text" className={classes.inputBox} />
          </div>
        </div>
        <div className={classes.bdayAndWhatsappDiv}>
          <div className={classes.birthdayDiv}>
            <label htmlFor="Birtdate">
              Birthday
              <span className={classes.spanClass}>*</span>
            </label>

            <input type="date" className={classes.inputBox} />
            <Image src={Insert_Table} alt="" className={classes.imgClass} />
          </div>
          <div className={classes.wappDiv}>
            <label htmlFor="Whatsapp Nubmer">
              WhatsApp No.<span className={classes.spanClass}>*</span>
            </label>
            <input type="text" className={classes.inputBox} />
          </div>
        </div>
        <div className={classes.batchAndCourseDiv}>
          <div className={classes.batchDiv}>
            <label htmlFor="Batch">
              Batch<span className={classes.spanClass}>*</span>
            </label>
            <input type="text" className={classes.inputBox} />
          </div>
          <div className={classes.courseDiv}>
            <label htmlFor="Course">
              Course<span className={classes.spanClass}>*</span>
            </label>
            <input type="text" className={classes.inputBox} />
          </div>
        </div>
        <div className={classes.divClass}>
          <label htmlFor="current-address">
            Current Address<span className={classes.spanClass}>*</span>
          </label>
          <div className="">
            <input type="text" className={classes.inputBox} />
          </div>
        </div>
        <div className={classes.registerDiv}>
          <button
            type="submit"
            className={classes.register}
            onSubmit={handleSubmit}
          >
            Register
          </button>
        </div>
      </form>
    </>
  );
}
