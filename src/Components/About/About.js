import React from "react";
import aboutImage from "../../assets/aboutImage.jpg";

const About = ({ id, userData }) => {
  const { codeChallenges } = userData;

  const startDate = new Date("2021-06-01");
  const now = new Date();

  const experience = (now.getFullYear() - startDate.getFullYear()) * 12;

  const giveCredit = () => {
    console.log(
      `Photo by Luca Bockmann on Unsplash. https://unsplash.com/de/@lucabockmann?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`
    );
  };

  return (
    <section id={id} className="about-section offset">
      <article className="about-content">
        <h2 className="section-title">About Me</h2>
        <div className="about-body">
          <img
            src={aboutImage}
            alt="about"
            className="about-image"
            onClick={giveCredit}
          />
          <div className="about-text">
            <p>
              As a Front-End Developer, I've built my career focusing primarily
              on the React.js framework, using both JavaScript and TypeScript.
              I'm passionate about creating seamless user experiences and
              finding unique solutions to complex development problems. In
              addition to my Front-End expertise, I'm also equipped with Full
              Stack development skills through my training.
            </p>
            <p>
              Outside of coding, I am a father who enjoys spending time with his
              family and sneakily guiding my daughter towards a life of
              'nerd-dom'. Viewing the world through the curious eyes of my
              daughter keeps my own curiosity and appetite for knowledge alive,
              which I believe helps me to always approach problems from unique
              angles.
            </p>
            <p className="experience">Experience: {experience} Months</p>
            {codeChallenges && (
              <p className="codewars">
                CodeWars Problems Solved: {codeChallenges.totalCompleted}
              </p>
            )}
          </div>
        </div>
      </article>
    </section>
  );
};

export default About;
