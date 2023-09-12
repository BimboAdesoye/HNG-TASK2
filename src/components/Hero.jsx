import "../styles/Hero.css";
import heroBackground from "../assets/Poster.svg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={heroBackground} alt="" />
    </div>
  );
};

export default Hero;
