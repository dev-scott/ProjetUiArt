import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { BsArrowRight } from "react-icons/bs";
import heroImg1 from "../../assets/Hero/heroImg1.jpg";
import heroImg2 from "../../assets/Hero/heroImg2.jpg";
import heroImg3 from "../../assets/Hero/heroImg3.jpg";
import heroImg4 from "../../assets/Hero/heroImg4.jpg";
const Hero = () => {
  return (
    <div className="contain_hero">
      <div className="hero_left">
        <div className="inside_hero_left">
          <h1>
            get inspired for your <br /> projects on <br /> our <span> ui</span>{" "}
            bank
          </h1>
          <p>
            Hello everyone, FlashUi is a store of user interface elements <br />{" "}
            such as icons, images, illustrations ... to help you in your various
            projects
          </p>
          <button className="explore_btn">
            Explore{" "}
            <span>
              <BsArrowRight />{" "}
            </span>{" "}
          </button>
          <div className="contain_stat">
            <div className="user">
              <h1>3k+</h1>
              <span>Active user</span>
            </div>{" "}
            <div className="artist">
              <h1>3k+</h1> <span>Active artist</span>
            </div>{" "}
            <div className="art">
              <h1>4k+</h1>
              <span>Our Art</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero_right">
        <div className="contain_img">
          <img src={heroImg1} alt="" />
        </div>
        <div className="contain_img">
          <img src={heroImg2} alt="" />
        </div>
        <div className="contain_img">
          <img src={heroImg3} alt="" />
        </div>
        <div className="contain_img">
          <img src={heroImg4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
