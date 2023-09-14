import "../styles/SideBar.css";
import logo from "../assets/tv.svg";
import home from "../assets/Home.svg";
import movie from "../assets/Movie Projector.svg";
import tv from "../assets/TV Show.svg";
import calendar from "../assets/Calendar.svg";
import logoutIcon from "../assets/Logout.svg";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <Link to={"/"} className="link">
        <div className="logo flex justify-center">
          <img src={logo} alt="logo" />
          <p>MovieBox</p>
        </div>
      </Link>
      <div className="tabs">
        <Link to={"/"} className="text-decoration-none">
          <div className="flex">
            <img src={home} alt="" />
            <p>Home</p>
          </div>
        </Link>
        <div className="flex active">
          <img src={movie} alt="" />
          <p>Movies</p>
        </div>
        <div className="flex">
          <img src={tv} alt="" />
          <p> TV Series</p>
        </div>
        <div className="flex">
          <img src={calendar} alt="" />
          <p>Upcoming</p>
        </div>
      </div>
      <div className="start-playing">
        <p className="play">Play movie quizes and earn free tickets</p>
        <p className="people">50k people are playing now</p>
        <p className="btn">Start playing</p>
      </div>
      <div className="log-out flex">
        <img src={logoutIcon} alt="" />
        <p>Log Out</p>
      </div>
    </div>
  );
};

export default SideBar;
