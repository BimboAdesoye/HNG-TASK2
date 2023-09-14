import facebookIcon from "../assets/fa-brands_facebook-square.svg";
import instagramIcon from "../assets/fa-brands_instagram.svg";
import twitterIcon from "../assets/fa-brands_twitter.svg";
import youtubeIcon from "../assets/fa-brands_youtube.svg";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="content">
          <div className="socials">
            <img className="cursor-pointer" src={facebookIcon} alt="" />
            <img className="cursor-pointer" src={instagramIcon} alt="" />
            <img className="cursor-pointer" src={twitterIcon} alt="" />
            <img className="cursor-pointer" src={youtubeIcon} alt="" />
          </div>
          <div className="terms">
            <p className="text-base cursor-pointer">Conditions of Use</p>
            <p className="text-base cursor-pointer">Privacy & Policy</p>
            <p className="text-base cursor-pointer">Press Room</p>
          </div>
          <div>
            <p className="text-base">
              © 2021 MovieBox by Bimbo_Adesoye
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
