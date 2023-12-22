import React from "react";
import classes from "@/components/about/excellenceFoundation/MapCointainer.module.scss";
import { GoogleMap } from "@react-google-maps/api";

export default function MapContainer(): JSX.Element {
  return (
    <>
      <div className={classes.heading}>Find us Here</div>
      <div className={classes.map}>
        <iframe
          className={classes.iframeContainer}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.172292768305!2d73.7734097!3d20.0012823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb92e4b0246f%3A0x89107d379ac1ebf1!2sExcellence%20Foundation!5e0!3m2!1sen!2sin!4v1700286982678!5m2!1sen!2sin"
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
}
