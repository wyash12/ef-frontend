import React from "react";
import HeroContainer from "@/components/about/excellenceFoundation/HeroContainer";
import AboutFoundationTextContainer from "@/components/about/excellenceFoundation/AboutFoundationTextContainer";
import MapContainer from "@/components/about/excellenceFoundation/MapContainer";
import CourseDisplayContainer from "@/components/about/excellenceFoundation/CourseDisplayContainer";

export default function excelenceFoundation() {
  return (
    <>
      <HeroContainer />
      <AboutFoundationTextContainer />
      <MapContainer />
      <CourseDisplayContainer />
    </>
  );
}
