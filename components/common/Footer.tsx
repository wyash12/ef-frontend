import classes from "./Footer.module.scss";
import logo from "../../public/logo.png";
import Image from "next/image";
import Button from "./Button";
import { IoLocationOutline, IoLogoWhatsapp } from "react-icons/io5";
import { PiPhoneBold } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";

export default function Footer(): JSX.Element {
  return (
    <>
      <div className={classes.container}>
        <div className={`${classes.subContainer1} ${classes.subContainer}`}>
          <Image src={logo} alt="Excellence foundation logo" />
          <h3>A top-notch civil engineers skill development platform</h3>
          <Button
            onClick={() => {}}
            text="CONTACT US"
            padding="0.2rem 1.2rem"
          />
        </div>
        <div className={`${classes.subContainer2} ${classes.subContainer}`}>
          <h2>HELPFUL LINKS</h2>
          <ul>
            <li>Courses</li>
            <li>Privacy policy</li>
            <li>Refund & Cancellation policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className={`${classes.subContainer3} ${classes.subContainer}`}>
          <h2>GET IN TOUCH</h2>
          <div>
            <div className={classes.touchContainer}>
              <PiPhoneBold />
              <p>+91-8830135459</p>
            </div>
            <div className={classes.touchContainer}>
              <MdOutlineEmail />
              <p>ef20@gmail.com</p>
            </div>
            <div className={classes.touchContainer}>
              <div>
                <IoLocationOutline />
              </div>
              <p>
                3rd floor , poornam center point , kanherewadi, CBS , Nashik ,
                Maharashtra , 422001
              </p>
            </div>
          </div>
        </div>
        <div className={`${classes.subContainer4} ${classes.subContainer}`}>
          <h2>CONNECT WITH US</h2>
          <div>
            <div className={classes.social}>
              <div className={`${classes.icons1} ${classes.icons}`}>
                <FaInstagram />
              </div>
              <p>Instagram</p>
            </div>
            <div className={classes.social}>
              <div className={`${classes.icons2} ${classes.icons}`}>
                <BiLogoFacebook />
              </div>
              <p>Facebook</p>
            </div>
            <div className={classes.social}>
              <div className={`${classes.icons3} ${classes.icons}`}>
                <IoLogoWhatsapp />
              </div>
              <p>Whatsapp</p>
            </div>
            <div className={classes.social}>
              <div className={`${classes.icons4} ${classes.icons}`}>
                <BiLogoLinkedin />
              </div>
              <p>Linkedin</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.copyrightContainer}>
        <p>©2023 Excellence Foundation. All Rights Reserved</p>
      </div>
    </>
  );
}
