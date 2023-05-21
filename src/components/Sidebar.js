/*
    title: Sidebar.js . 
    desc: simple sidebar for wheather details.
    date: 13 - 5 - 2023.

*/ 
import "../css/sidebar.css";
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import { BiMapAlt, BiMap } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import MobileSidebar from "./MobileSidebar";
export default function Sidebar() {
  return (
    <> 
      <div className="infoContainer">
        <div className="infoLinks">
          <ul>
            <li>
              <Link to={"/"}>
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
              <Link to={"/location"}> 
                <MdOutlineExplore size={32} />
                </Link>
              
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
              <a href="http://localhost:3000">London</a>
            </li>
          </ul>
        </div>
      </div>
        <MobileSidebar  />
    </>
  );
}
