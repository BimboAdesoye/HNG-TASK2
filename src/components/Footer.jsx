import facebookIcon from "../assets/fa-brands_facebook-square.svg";
import instagramIcon from "../assets/fa-brands_instagram.svg";
import twitterIcon from "../assets/fa-brands_twitter.svg";
import youtubeIcon from "../assets/fa-brands_youtube.svg";
import "../styles/Footer.css";

const Footer = () => {
  
  return (
    <div className="footer container">
      <div className="content">
        <div className="socials">
          <img src={facebookIcon} alt="" />
          <img src={instagramIcon} alt="" />
          <img src={twitterIcon} alt="" />
          <img src={youtubeIcon} alt="" />
        </div>
        <div className="terms">
          <p className="text-base">Conditions of Use</p>
          <p className="text-base">Privacy & Policy</p>
          <p className="text-base">Press Room</p>
        </div>
        <div>
          <p className="text-base">© 2021 MovieBox by Adriana Eka Prayudha </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
