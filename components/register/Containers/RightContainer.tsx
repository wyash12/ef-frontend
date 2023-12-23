import React from "react";
import { useState } from "react";
import classes from "@/components/register/Containers/RightContainer.module.scss";
import { Select } from "antd";
import { CourseData } from "@/data/course_data";

export default function RightContainer() {
  const [courseValue, setCourseValue] = useState<string | null>(null);
  const [batchValue, setBatchValue] = useState<string | null>(null);
  const [batches, setBatches] = useState<any[]>([]);
  const [reference, setReference] = useState<string | null>(null);

  const courseOptions: any[] = [];

  CourseData.map((course) =>
    courseOptions.push({
      value: course.id,
      label: course.title,
    })
  );

  const onCourseSelection = (value: string) => {
    setCourseValue(value);
    setBatchValue(null);
    const newBatches: any[] = [];
    const foundIndex = CourseData.findIndex((course) => course.id === value);
    if (foundIndex !== -1) {
      CourseData[foundIndex].next_program_date.map((np) => {
        newBatches.push({
          value: np.id,
          label: `${np.date} ${np.time != null ? np.time : ""}`,
        });
      });
      setBatches(newBatches);
    }
  };

  const onBatchSelection = (value: string) => {
    setBatchValue(value);
  };

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
            <input type="text" className={classes.inputBox} required />
          </div>
        </div>
        <div className={classes.divClass}>
          <label htmlFor="Organinsation">
            College/Organization/Company Name
            <span className={classes.spanClass}>*</span>
          </label>
          <div className={classes.inputWrapper}>
            <input type="text" className={classes.inputBox} required />
          </div>
        </div>
        <div className={classes.bdayAndWhatsappDiv}>
          <div className={`${classes.birthdayDiv} ${classes.divClass}`}>
            <label htmlFor="Birtdate">
              Birthday
              <span className={classes.spanClass}>*</span>
            </label>

            <div className={classes.inputWrapper}>
              <input type="date" className={classes.inputBox} required />
            </div>
            {/* <Image src={Insert_Table} alt="" className={classes.imgClass} /> */}
          </div>
          <div className={`${classes.wappDiv} ${classes.divClass}`}>
            <label htmlFor="Whatsapp Nubmer">
              WhatsApp Number (+91)<span className={classes.spanClass}>*</span>
            </label>
            <div className={classes.inputWrapper}>
              <input type="text" className={classes.inputBox} required />
            </div>
          </div>
        </div>
        {/* <div className={classes.batchAndCourseDiv}> */}
        <div className={`${classes.courseDiv} ${classes.divClass}`}>
          <label htmlFor="Course">
            Course<span className={classes.spanClass}>*</span>
          </label>
          {/* <div className={classes.inputWrapper}>
              <input type="text" className={classes.inputBox} />
            </div> */}
          <div className={classes.selectWrapper}>
            <Select
              onChange={onCourseSelection}
              className={classes.select}
              bordered={false}
              options={courseOptions}
            />
          </div>
        </div>
        <div className={`${classes.batchDiv} ${classes.divClass}`}>
          <label htmlFor="Batch">
            Batch<span className={classes.spanClass}>*</span>
          </label>
          {/* <div className={classes.inputWrapper}>
              <input type="text" className={classes.inputBox} />
            </div> */}
          <div className={classes.selectWrapper}>
            <Select
              onChange={onBatchSelection}
              className={classes.select}
              bordered={false}
              options={batches}
              value={batchValue}
            />
          </div>
        </div>
        {/* </div> */}
        <div className={classes.divClass}>
          <label htmlFor="current-address">
            Current Address<span className={classes.spanClass}>*</span>
          </label>
          <div className={classes.inputWrapper}>
            <input type="text" className={classes.inputBox} required />
          </div>
        </div>
        <div className={classes.divClass}>
          <label htmlFor="Email">
            Reference<span className={classes.spanClass}>*</span>
          </label>
          <div className={classes.referenceContainer}>
            {[
              "Facebook",
              "Instagram",
              "Referred by Friend / Colleague",
              "Other",
            ].map((element, index) => (
              <div key={index} className={classes.refWrapper}>
                <div className={classes.ref}>
                  <input
                    type="radio"
                    id="reference"
                    name="reference"
                    value={element}
                    onChange={() => {
                      setReference(element);
                    }}
                    required
                  />
                  <label>{element}</label>
                </div>
                {element === "Referred by Friend / Colleague" &&
                  reference === "Referred by Friend / Colleague" && (
                    <div className={classes.inputWrapper}>
                      <input
                        type="text"
                        className={classes.inputBox}
                        required
                        placeholder="Enter Friend / Colleague Name"
                      />
                    </div>
                  )}
              </div>
            ))}
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
