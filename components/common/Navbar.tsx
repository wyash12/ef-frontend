import Image from "next/image";
import classes from "./Navbar.module.scss";
import logo from "../../public/logo.png";
import Link from "next/link";
import Button from "./Button";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [flexClassOur, setFlexClassOur] = useState("none");
  const [flexClassAbout, setFlexClassAbout] = useState("none");

  function onClickRegisterHandler() {
    router.push("/home");
  }

  function onMouseHoverEvent(value: number) {
    if (value == 1) {
      setFlexClassOur("flex");
    } else {
      setFlexClassAbout("flex");
    }
  }

  function onMouseOutEvent(value: number) {
    if (value == 1) {
      setFlexClassOur("none");
    } else {
      setFlexClassAbout("none");
    }
  }

  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <Image src={logo} alt="Excellence foundation logo" />
      </div>
      <ul>
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li
          onMouseOver={() => {
            onMouseHoverEvent(1);
          }}
          onMouseLeave={() => {
            onMouseOutEvent(1);
          }}
        >
          Our Training
          <ul
            style={{
              display: flexClassOur,
            }}
          >
            <li>
              <Link href="/home">Skill Booster</Link>
            </li>
            <li>
              <Link href="/home">Online estimation and costing</Link>
            </li>
            <li>
              <Link href="/home">Archi - norm</Link>
            </li>
          </ul>
        </li>
        <li
          onMouseOver={() => {
            onMouseHoverEvent(2);
          }}
          onMouseLeave={() => {
            onMouseOutEvent(2);
          }}
        >
          About Us
          <ul
            style={{
              display: flexClassAbout,
            }}
          >
            <li>
              <Link href="/home">Excellence Foundation</Link>
            </li>
            <li>
              <Link href="/home">Mentor</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/home">Login</Link>
        </li>
        <li>
          <Link href="/home">Gallery</Link>
        </li>
        <li>
          <Button
            text="Register"
            padding="6px 26px"
            fontSize={1}
            onClick={onClickRegisterHandler}
          />
        </li>
      </ul>
    </nav>
  );
}
