import React from "react";
import "../styles/about.css";
import { FaDog } from "react-icons/fa";
import { MdComputer, MdGirl } from "react-icons/md";

import MeImage from "./images/wilma&me.jpg";
import Dog1 from "./images/Maxi.jpg";
import Dog2 from "./images/lunaout.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="titel-about">
        <h5>Get to know </h5>
        <h2>About me</h2>
      </div>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={MeImage} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <h2 className="about__interest"> Three interest of my life</h2>
          <div className="about__cards">
            <article className="about_card">
              <MdComputer className="about__icon" />
              <h5>Computer</h5>
              <small>Since i was 5 y/o</small>
            </article>

            <article className="about_card">
              <FaDog className="about__icon" />
              <h5>My dogs</h5>
              <small>Luna & Maxi</small>
            </article>

            <article className="about_card">
              <MdGirl className="about__icon" />
              <h5>Girlfirend</h5>
              <small>Wilma</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam at
            officia vero quod eius voluptate cupiditate vitae pariatur soluta
            dolore dolores quidem eveniet, explicabo fugit ad eum exercitationem
            dicta aliquam.
          </p>

          <div className="dog__img">
            <div className="dog-image">
              <img src={Dog1} alt="maxi" />
            </div>
            <div className="dog-image">
              <img src={Dog2} alt="luna" />
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam at
            officia vero quod eius voluptate cupiditate vitae pariatur soluta
            dolore dolores quidem eveniet, explicabo fugit ad eum exercitationem
            dicta aliquam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
