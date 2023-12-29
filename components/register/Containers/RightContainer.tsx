import React, { FormEvent, useRef } from "react";
import { useState } from "react";
import classes from "@/components/register/Containers/RightContainer.module.scss";
import { Select, notification } from "antd";
import { CourseData } from "@/data/course_data";
import userData from "@/models/UserDataModel";
import { useRouter } from "next/router";
import { serverUrl } from "@/data/server_url";
import OrderModel from "@/models/OrderModel";

export default function RightContainer() {
  const router = useRouter();
  const [courseValue, setCourseValue] = useState<string | null>(null);
  const [batchValue, setBatchValue] = useState<string | null>(null);
  const [batches, setBatches] = useState<any[]>([]);
  const [reference, setReference] = useState<string | null>(null);
  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const collegeRef = useRef<HTMLInputElement>(null);
  const birthdayRef = useRef<HTMLInputElement>(null);
  const whatsAppRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const friendRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState<Boolean>(false);
  const [api, contextHolder] = notification.useNotification();

  const courseOptions: any[] = [];

  CourseData.map((course) =>
    courseOptions.push({
      value: course.title,
      label: course.title,
    })
  );

  const onCourseSelection = (value: string) => {
    setCourseValue(value);
    setBatchValue(null);
    const newBatches: any[] = [];
    const foundIndex = CourseData.findIndex((course) => course.title === value);
    if (foundIndex !== -1) {
      CourseData[foundIndex].next_program_date.map((np) => {
        newBatches.push({
          value: `${np.date} ( ${np.time != null ? np.time : ""} )`,
          label: `${np.date} ${np.time != null ? np.time : ""}`,
        });
      });
      setBatches(newBatches);
    }
  };

  const onBatchSelection = (value: string) => {
    setBatchValue(value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const name = fullNameRef.current?.value;
    const email = emailRef.current?.value;
    const collegeName = collegeRef.current?.value;
    const dateOfBirth = birthdayRef.current?.value;
    const mobileNumber = whatsAppRef.current?.value;
    const address = addressRef.current?.value;
    const friendName = friendRef.current?.value;

    if (courseValue == null || batchValue == null) {
      alert("Select course and batch");
      return;
    }

    const data: userData = {
      name,
      email,
      collegeName,
      dateOfBirth,
      mobileNumber,
      address,
      course: courseValue,
      batch: batchValue,
      reference,
    };

    if (friendName) data.reference = data.reference + " (" + friendName + ")";

    // console.log(data);

    try {
      const response = await fetch(`${serverUrl}/course-registration/student`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      // console.log(result);
      if (result.errorMessage) {
        if (result.data) {
          if (result.data[0]) {
            throw new Error(result.data[0].msg);
          }
        }
        throw new Error(result.errorMessage);
      }
      // console.log(result.data);
      // const t = JSON.stringify(result.data);
      // console.log(t);
      localStorage.setItem("Order", JSON.stringify(result.data));
      localStorage.setItem("Course", courseValue);
      localStorage.setItem("Name", name!);
      localStorage.setItem("MobileNumber", mobileNumber!);
      localStorage.setItem("Email", email!);
      if (fullNameRef.current != null) fullNameRef.current.value = "";
      if (emailRef.current) emailRef.current.value = "";
      if (collegeRef.current) collegeRef.current.value = "";
      if (birthdayRef.current) birthdayRef.current.value = "";
      if (whatsAppRef.current) whatsAppRef.current.value = "";
      if (addressRef.current) addressRef.current.value = "";
      if (friendRef.current) friendRef.current.value = "";
      setBatchValue(null);
      setBatches([]);
      setCourseValue(null);
      setReference(null);
      router.replace("/register/payment");
    } catch (error: any) {
      api["error"]({
        message: "Error",
        description: error.message,
        duration: null,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={classes.container}>
      {contextHolder}
      <h2 className={classes.heading}>Register</h2>
      <p className={classes.description}>
        Fill the form to join the internship Training program for civil
        engineers
      </p>
      <form className={classes.form} onSubmit={handleSubmit}>
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
              ref={fullNameRef}
            />
          </div>
        </div>
        <div className={classes.divClass}>
          <label htmlFor="Email">
            Email<span className={classes.spanClass}>*</span>
          </label>
          <div className={classes.inputWrapper}>
            <input
              type="email"
              ref={emailRef}
              className={classes.inputBox}
              required
            />
          </div>
        </div>
        <div className={classes.divClass}>
          <label htmlFor="Organinsation">
            College/Organization/Company Name
            <span className={classes.spanClass}>*</span>
          </label>
          <div className={classes.inputWrapper}>
            <input
              type="text"
              ref={collegeRef}
              className={classes.inputBox}
              required
            />
          </div>
        </div>
        <div className={classes.bdayAndWhatsappDiv}>
          <div className={`${classes.birthdayDiv} ${classes.divClass}`}>
            <label htmlFor="Birtdate">
              Birthday
              <span className={classes.spanClass}>*</span>
            </label>

            <div className={classes.inputWrapper}>
              <input
                type="date"
                className={classes.inputBox}
                required
                ref={birthdayRef}
              />
            </div>
            {/* <Image src={Insert_Table} alt="" className={classes.imgClass} /> */}
          </div>
          <div className={`${classes.wappDiv} ${classes.divClass}`}>
            <label htmlFor="Whatsapp Nubmer">
              WhatsApp Number (+91)<span className={classes.spanClass}>*</span>
            </label>
            <div className={classes.inputWrapper}>
              <input
                type="number"
                className={classes.inputBox}
                required
                ref={whatsAppRef}
              />
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
              value={courseValue}
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
            <input
              type="text"
              className={classes.inputBox}
              required
              ref={addressRef}
            />
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
                    checked={element === reference}
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
                        ref={friendRef}
                      />
                    </div>
                  )}
              </div>
            ))}
          </div>
        </div>
        {loading ? (
          <span className={classes.loader}></span>
        ) : (
          <button
            type="submit"
            className={classes.register}
            // onClick={handleSubmit}
          >
            Proceed
          </button>
        )}
      </form>
    </div>
  );
}
