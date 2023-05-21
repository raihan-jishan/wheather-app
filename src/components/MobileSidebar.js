import "../css/mobileSidebar.css";
import {
  AiOutlineHome, 
  AiOutlineSetting,
  AiOutlineCloseCircle
} from "react-icons/ai"; 
import { BiMapAlt, BiMap } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HiBars3CenterLeft } from "react-icons/hi2";
export default function MobileSidebar() {
  //   initailze react hooks
  const [click, setClick] = useState(false);
  // handleClick
  const handleClick = () => {
    setClick(!click);
  };
  // handleClose
  const handleClose = () => {
    setClick(false);
  };
  return (
    <>
      {click ? null : (
        <HiBars3CenterLeft className="hamburger" onClick={handleClick} aria-hidden="true" />
       
      )}

      <div className="mobileConatiner">
        <div className={click ? "mobileLinks active" : "mobileLinks"}>
          <ul>
            <li>
              <Link to={"/"} onClick={handleClose}>
                <AiOutlineHome size={32} />
              </Link>
            </li>
            <li>
              <a
                href="https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=30&lon=-20&zoom=5"
                target="_blank"
                rel="noreferrer"
              >
                <BiMapAlt size={32} />
              </a>
            </li>
            <li>
              <Link to={"/location"}>
                <BiMap size={32} />
              </Link>
            </li>
            <li>
              <a href="http://localhost:3000">
                <MdOutlineExplore size={32} />
              </a>
            </li>
            <li>
              <a href="http://localhost:3000">
                <FaRegCalendarAlt size={32} />
              </a>
            </li>
            <li>
              <a href="http://localhost:3000">
                <AiOutlineSetting size={32} />
              </a>
            </li>
            <li>
              <AiOutlineCloseCircle
                className="hamburger wave"
                onClick={handleClose}
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
