// import classes from "./Footer.module.scss";
// import logo from "../../public/logo.png";
// import Image from "next/image";
// import Button from "./Button";
// import { useRouter } from "next/router";
// import { IoLocationOutline, IoLogoWhatsapp } from "react-icons/io5";
// import { PiPhoneBold } from "react-icons/pi";
// import { MdOutlineEmail } from "react-icons/md";
// import { FaInstagram } from "react-icons/fa";
// import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
// import Link from "next/link";
// import { PiDotOutlineFill } from "react-icons/pi";

// export default function Footer(): JSX.Element {
// <<<<<<< HEAD
//   const router = useRouter();
//   const handleClick = () => {
//     router.push("/contact-us");
//   };
//   return (
//     <>
//       <div className={classes.container}>
// =======
//   // return (
//   {
//     /*<>
//      <div className={classes.container}>
// >>>>>>> d8a61c02c2876a26cf537ebf1a1a84bad7a051e5
//         <div className={`${classes.subContainer1} ${classes.subContainer}`}>
//           <Image src={logo} alt="Excellence foundation logo" />
//           <h3>A top-notch civil engineers skill development platform</h3>
//           <Button
//             onClick={handleClick}
//             text="CONTACT US"
//             padding="0.2rem 1.2rem"
//           />
//         </div>
//         <div className={`${classes.subContainer2} ${classes.subContainer}`}>
//           <h2>HELPFUL LINKS</h2>
//           <ul>
//             <li>
//               <Link href={"/#course"}>Courses</Link>
//             </li>
//             <li>Privacy policy</li>
//             <li>Refund & Cancellation policy</li>
//             <li>Terms & Conditions</li>
//           </ul>
//         </div>
//         <div className={`${classes.subContainer3} ${classes.subContainer}`}>
//           <h2>GET IN TOUCH</h2>
//           <div className={classes.wrapperTouchContainer}>
//             <div className={classes.touchContainer}>
//               <div>
//                 <PiPhoneBold />
//               </div>
//               <p>+91-8830135459</p>
//             </div>
//             <div className={classes.touchContainer}>
//               <div>
//                 <MdOutlineEmail />
//               </div>
//               <p>
//                 <Link
//                   href={
//                     "https://mail.google.com/mail/u/0/?fs=1&to=excellence.foundation20@gmail.com&tf=cm"
//                   }
//                 >
//                   excellence.foundation20@gmail.com
//                 </Link>
//               </p>
//             </div>
//             <div className={classes.touchContainer}>
//               <div>
//                 <IoLocationOutline />
//               </div>
//               <p>
//                 3rd floor , poornam center point , kanherewadi, CBS , Nashik ,
//                 Maharashtra , 422001
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className={`${classes.subContainer4} ${classes.subContainer}`}>
//           <h2>CONNECT WITH US</h2>
//           <div>
//             <div className={classes.social}>
//               <div className={`${classes.icons1} ${classes.icons}`}>
//                 <FaInstagram />
//               </div>
//               <p>Instagram</p>
//             </div>
//             <div className={classes.social}>
//               <div className={`${classes.icons2} ${classes.icons}`}>
//                 <BiLogoFacebook />
//               </div>
//               <p>Facebook</p>
//             </div>
//             <div className={classes.social}>
//               <div className={`${classes.icons3} ${classes.icons}`}>
//                 <IoLogoWhatsapp />
//               </div>
//               <p>Whatsapp</p>
//             </div>
//             <div className={classes.social}>
//               <div className={`${classes.icons4} ${classes.icons}`}>
//                 <BiLogoLinkedin />
//               </div>
//               <p>Linkedin</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className={classes.copyrightContainer}>
//         <p>© 2023 Excellence Foundation. All Rights Reserved</p>
//       </div>
//     </> */
//   }
//   // );

//   return (
//     <div className={classes.container}>
//       <div className={`${classes.subContainer1} ${classes.subContainer}`}>
//         <Image src={logo} alt="Excellence foundation logo" />
//         <h3>A top-notch civil engineers skill development platform</h3>
//         {/* <Button onClick={() => {}} text="CONTACT US" padding="0.2rem 1.2rem" /> */}
//         <button>CONTACT US</button>
//       </div>
//       <div className={`${classes.subContainer2} ${classes.subContainer}`}>
//         <h4>HELPFUL LINKS</h4>
//         <div className={classes.linksContainer}>
//           <div className={classes.titleLogo}>
//             <div className={classes.logo}>
//               <PiDotOutlineFill />
//             </div>
//             <p>
//               <Link href={"/#course"}>Courses</Link>
//             </p>
//           </div>
//           <div className={classes.titleLogo}>
//             <div className={classes.logo}>
//               <PiDotOutlineFill />
//             </div>
//             <p>
//               <Link href={""}>Privacy policy</Link>
//             </p>
//           </div>
//           <div className={classes.titleLogo}>
//             <div className={classes.logo}>
//               <PiDotOutlineFill />
//             </div>
//             <p>
//               <Link href={""}>Refund & Cancellation policy</Link>
//             </p>
//           </div>
//           <div className={classes.titleLogo}>
//             <div className={classes.logo}>
//               <PiDotOutlineFill />
//             </div>
//             <p>
//               <Link href={""}>Terms & Conditions</Link>
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className={`${classes.subContainer3} ${classes.subContainer}`}>
//         <h4>GET IN TOUCH</h4>
//         <div className={classes.linksContainer}>
//           <div className={classes.titleLogo}>
//             <div className={classes.logo}>
//               <PiPhoneBold />
//             </div>
//             <p>
//               <Link href={""}>+91-8830135459</Link>
//             </p>
//           </div>
//           <div className={classes.titleLogo}>
//             <div className={classes.logo}>
//               <MdOutlineEmail />
//             </div>
//             <p>
//               <Link
//                 href={
//                   "https://mail.google.com/mail/u/0/?fs=1&to=excellence.foundation20@gmail.com&tf=cm"
//                 }
//               >
//                 excellence.foundation20@gmail.com
//               </Link>
//             </p>
//           </div>
//           <div className={classes.titleLogo}>
//             <div className={classes.logo}>
//               <IoLocationOutline />
//             </div>
//             <p>
//               <Link href={""}>
//                 3rd floor , poornam center point , kanherewadi, CBS , Nashik ,
//                 Maharashtra , 422001
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className={`${classes.subContainer4} ${classes.subContainer}`}>
//         <h4>CONNECT WITH US</h4>
//         <div className={classes.linksContainer}>
//           <div className={classes.titleLogo}>
//             <div className={`${classes.logo} ${classes.logo1}`}>
//               <FaInstagram />
//             </div>
//             <p>
//               <Link href={""}>Instagram</Link>
//             </p>
//           </div>
//           <div className={classes.titleLogo}>
//             <div className={`${classes.logo} ${classes.logo2}`}>
//               <BiLogoFacebook />
//             </div>
//             <p>
//               <Link href={""}>Facebook</Link>
//             </p>
//           </div>
//           <div className={classes.titleLogo}>
//             <div className={`${classes.logo} ${classes.logo3}`}>
//               <IoLogoWhatsapp />
//             </div>
//             <p>
//               <Link href={""}>Whatsapp</Link>
//             </p>
//           </div>
//           <div className={classes.titleLogo}>
//             <div className={`${classes.logo} ${classes.logo4}`}>
//               <BiLogoLinkedin />
//             </div>
//             <p>
//               <Link href={""}>Linkedin</Link>
//             </p>
//           </div>
//         </div>
//         {/* </div> */}
//       </div>
//     </div>
//   );
// }

import classes from "./Footer.module.scss";
import logo from "../../public/logo.png";
import Image from "next/image";
import Button from "./Button";
import { useRouter } from "next/router";
import { IoLocationOutline, IoLogoWhatsapp } from "react-icons/io5";
import { PiPhoneBold } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import Link from "next/link";
import { PiDotOutlineFill } from "react-icons/pi";

export default function Footer(): JSX.Element {
  const router = useRouter();
  const handleClick = () => {
    router.push("/contact-us");
  };
  // return (
  {
    /*<>
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
            <li>
              <Link href={"/#course"}>Courses</Link>
            </li>
            <li>Privacy policy</li>
            <li>Refund & Cancellation policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className={`${classes.subContainer3} ${classes.subContainer}`}>
          <h2>GET IN TOUCH</h2>
          <div className={classes.wrapperTouchContainer}>
            <div className={classes.touchContainer}>
              <div>
                <PiPhoneBold />
              </div>
              <p>+91-8830135459</p>
            </div>
            <div className={classes.touchContainer}>
              <div>
                <MdOutlineEmail />
              </div>
              <p>
                <Link
                  href={
                    "https://mail.google.com/mail/u/0/?fs=1&to=excellence.foundation20@gmail.com&tf=cm"
                  }
                >
                  excellence.foundation20@gmail.com
                </Link>
              </p>
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
        <p>© 2023 Excellence Foundation. All Rights Reserved</p>
      </div>
    </> */
  }
  // );

  return (
    <div className={classes.container}>
      <div className={`${classes.subContainer1} ${classes.subContainer}`}>
        <Image src={logo} alt="Excellence foundation logo" />
        <h3>A top-notch civil engineers skill development platform</h3>
        {/* <Button onClick={() => {}} text="CONTACT US" padding="0.2rem 1.2rem" /> */}
        <button>CONTACT US</button>
      </div>
      <div className={`${classes.subContainer2} ${classes.subContainer}`}>
        <h4>HELPFUL LINKS</h4>
        <div className={classes.linksContainer}>
          <div className={classes.titleLogo}>
            <div className={classes.logo}>
              <PiDotOutlineFill />
            </div>
            <p>
              <Link href={"/#course"}>Courses</Link>
            </p>
          </div>
          <div className={classes.titleLogo}>
            <div className={classes.logo}>
              <PiDotOutlineFill />
            </div>
            <p>
              <Link href={""}>Privacy policy</Link>
            </p>
          </div>
          <div className={classes.titleLogo}>
            <div className={classes.logo}>
              <PiDotOutlineFill />
            </div>
            <p>
              <Link href={""}>Refund & Cancellation policy</Link>
            </p>
          </div>
          <div className={classes.titleLogo}>
            <div className={classes.logo}>
              <PiDotOutlineFill />
            </div>
            <p>
              <Link href={""}>Terms & Conditions</Link>
            </p>
          </div>
        </div>
      </div>
      <div className={`${classes.subContainer3} ${classes.subContainer}`}>
        <h4>GET IN TOUCH</h4>
        <div className={classes.linksContainer}>
          <div className={classes.titleLogo}>
            <div className={classes.logo}>
              <PiPhoneBold />
            </div>
            <p>
              <Link href={""}>+91-8830135459</Link>
            </p>
          </div>
          <div className={classes.titleLogo}>
            <div className={classes.logo}>
              <MdOutlineEmail />
            </div>
            <p>
              <Link
                href={
                  "https://mail.google.com/mail/u/0/?fs=1&to=excellence.foundation20@gmail.com&tf=cm"
                }
              >
                excellence.foundation20@gmail.com
              </Link>
            </p>
          </div>
          <div className={classes.titleLogo}>
            <div className={classes.logo}>
              <IoLocationOutline />
            </div>
            <p>
              <Link href={""}>
                3rd floor , poornam center point , kanherewadi, CBS , Nashik ,
                Maharashtra , 422001
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className={`${classes.subContainer4} ${classes.subContainer}`}>
        <h4>CONNECT WITH US</h4>
        <div className={classes.linksContainer}>
          <div className={classes.titleLogo}>
            <div className={`${classes.logo} ${classes.logo1}`}>
              <FaInstagram />
            </div>
            <p>
              <Link href={""}>Instagram</Link>
            </p>
          </div>
          <div className={classes.titleLogo}>
            <div className={`${classes.logo} ${classes.logo2}`}>
              <BiLogoFacebook />
            </div>
            <p>
              <Link href={""}>Facebook</Link>
            </p>
          </div>
          <div className={classes.titleLogo}>
            <div className={`${classes.logo} ${classes.logo3}`}>
              <IoLogoWhatsapp />
            </div>
            <p>
              <Link href={""}>Whatsapp</Link>
            </p>
          </div>
          <div className={classes.titleLogo}>
            <div className={`${classes.logo} ${classes.logo4}`}>
              <BiLogoLinkedin />
            </div>
            <p>
              <Link href={""}>Linkedin</Link>
            </p>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
