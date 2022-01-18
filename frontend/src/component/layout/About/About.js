import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import anshul from "../../../images/Anshul11.jpg";
import MetaData from "../MetaData";

const About = () => {
  const visitInstagram = () => {
    window.location = "#";
  };
  return (
    <div className="aboutSection">
      <MetaData title="ABOUT-Anshul's_Shop" />
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={anshul}
              alt="Founder"
            />
            <Typography>Anshul Sharma (CEO)</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              Anshul_Shop is a trusted brand used by thousands of people
              everday, made to provide security and comfort to beloved users.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a href="https://www.linkedin.com/in/anshul-sharma-831546219/">
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://www.linkedin.com/in/anshul-sharma-831546219/">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
