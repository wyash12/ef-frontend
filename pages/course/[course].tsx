import { CourseData } from "@/data/course_data";
import CourseElementModel from "@/models/CourseElementModel";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";
import HomePage from "..";
import AboutCourse from "@/components/course/AboutCourse";

export default function CoursePage(): JSX.Element {
  const router: NextRouter = useRouter();
  const coursePath: string | string[] | undefined = router.asPath;
  let foundCourseData: CourseElementModel | undefined = CourseData.find(
    (element: CourseElementModel) => element.path === coursePath
  );

  useEffect(() => {
    if (coursePath == undefined) {
      router.push("/");
    }
    if (foundCourseData == undefined) {
      router.push("/");
    }
  }, [coursePath, router, foundCourseData]);

  if (foundCourseData) {
    return (
      <>
        <AboutCourse data={foundCourseData.about_trining} />
      </>
    );
  }

  return <p>Something went wrong! Please try again...</p>
}
