import React from "react";
import heroImage from "../../assets/heroImage.jpg";
import reactThumb from "../../assets/reactThumb.png";
import jsThumb from "../../assets/jsThumb.png";
import sassThumb from "../../assets/sassThumb.png";
import htmlThumb from "../../assets/htmlThumb.png";
import cssThumb from "../../assets/cssThumb.png";
import { Button, Link } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

const Hero = ({ id }) => {
  const handleClick = () => {
    const messages = [
      "Looks like a button, acts like a button.. not a button.",
      "These are not the buttons you're looking for...",
      "Hello, world!",
      "Out to lunch; will return in 15 minutes.",
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    console.log(messages[randomIndex]);
  };

  return (
    <section id={id} className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Front-End React Developer</h1>
          <p className="hero-body">
            Hi, I'm Chris, a Front-End Developer, based in Dallas, Texas,
            specializing in the React.js framework.
          </p>
          <Button
            size="large"
            variant="contained"
            href="/resume/Chris-Clark-Resume.pdf"
            download
            className="resume-btn"
            sx={{
              padding: "1 2rem",
              width: "10rem",
              ".light &": {
                backgroundColor: "#2d2e32",
                "&:hover": {
                  backgroundColor: "white",
                  color: "#2d2e32",
                },
              },
              ".dark &": {
                backgroundColor: "white",
                color: "#2d2e32",
                "&:hover": {
                  backgroundColor: "#2d2e32",
                  color: "white",
                },
              },
            }}
            endIcon={<DownloadIcon />}
          >
            Resume
          </Button>
        </div>
        <div className="hero-image-container">
          <img src={heroImage} alt="hero" />
        </div>
      </div>
      <div className="skills">
        <ul>
          <li onClick={handleClick}>
            <img src={reactThumb} alt="React.js" />
          </li>
          <li onClick={handleClick}>
            <img src={jsThumb} alt="Javascript" />
          </li>
          <li onClick={handleClick}>
            <img src={sassThumb} alt="Sass - CSS Preprocessor" />
          </li>
          <li onClick={handleClick}>
            <img src={htmlThumb} alt="HTML" />
          </li>
          <li onClick={handleClick}>
            <img src={cssThumb} alt="CSS" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
