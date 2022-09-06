import React, { useState } from "react";
import Skillicon from "./Skillicon";

const About2 = () => {
  const [aboutFilter, setAboutFilter] = useState("SKILLS");

  return (
    <>
      <div id="about">
        <div className="container">
          <div className="row">
            <Skillicon />
            <div className="about-col-1">
              <img src="img/user.jpg" alt="profile-image" />
            </div>
            <div className="about-col-2">
              <h1 className="sub-tittle">About Me</h1>
              <p>
                I am Vikash Chaurasia. A b.tech graduate from Inderprastha
                Engineering college (ghaziabad). I live in Delhi and my home
                town in Gorakhpur. <br />
                I am talented, ambitious and hardworking individual with skill
                in web development . <br />
                I use creative approch to solve problem . <br />
                <span>I 🧡 Web Developing .</span>{" "}
              </p>
              <div className="tab-tittle">
                <p
                  className="tab-links"
                  onClick={() => setAboutFilter("SKILLS")}
                >
                  Skills
                </p>
                <p
                  className="tab-links"
                  onClick={() => setAboutFilter("EXPERIENCE")}
                >
                  Certificate
                </p>
                <p
                  className="tab-links"
                  onClick={() => setAboutFilter("EDUCATION")}
                >
                  Education
                </p>
              </div>

              {aboutFilter === "SKILLS" && (
                <div className="tab-content active-tab" id="skills">
                  <ul>
                    <li>
                      <span>HTML & CSS ⭐⭐⭐⭐</span>
                    </li>
                    <li>
                      <span>JavaScript ⭐⭐⭐⭐</span>
                    </li>
                    <li>
                      <span>JQuery ⭐⭐⭐</span>
                    </li>
                    <li>
                      <span>React.Js ⭐⭐⭐</span>
                    </li>
                    <li>
                      <span>Python ⭐⭐</span>
                    </li>
                    <li>
                      <span>Git/Github ⭐⭐⭐⭐</span>
                    </li>
                    <li>
                      <span>Docker ⭐⭐</span>
                    </li>
                  </ul>
                </div>
              )}

              {aboutFilter === "EXPERIENCE" && (
                <div className="tab-content" id="experience">
                  <ul>
                    <li>
                      <span>Frontend Development</span>
                      <br />
                      Modern Frontend Developer from SkillUP
                    </li>
                    <li>
                      <span>JavaScript</span>
                      <br />
                      JavaScript Beginners to Advance
                    </li>
                    <li>
                      <span>HTML & Css</span>
                      <br />
                      Modern HTML & CSS from the beginning (Udemy)
                    </li>
                    <li>
                      <span>Python & Machine learning </span>
                      <br />
                      Organization : Ducate
                    </li>
                  </ul>
                </div>
              )}

              {aboutFilter === "EDUCATION" && (
                <div className="tab-content" id="education">
                  <ul>
                    <li>
                      <span>2016 - 2020</span>
                      <br />
                      Bachelor Of Technology (I.T) <br /> Inderprastha
                      Engineering college{" "}
                    </li>
                    <li>
                      <span>2014 - 2016</span>
                      <br />
                      Senior Secondary Examination <br /> Janta Intermediate
                      College
                    </li>
                    <li>
                      <span>2011 - 2013</span>
                      <br />
                      Higher Secondary Examination <br /> SDDT inter college{" "}
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About2;
