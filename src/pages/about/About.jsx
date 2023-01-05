import React from 'react';
import './about.css';
import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_1.jpg';
import StoreImage from '../../images/about1.jpg';
import VisionImage from '../../images/about2.jpg';
import MissionImage from '../../images/about3.jpg';

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Placeat at voluptatum atque inventore deleniti laborum! Veniam sunt ipsum omnis quos.
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoreImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Odio itaque dicta minima a laborum atque quo ex ea libero
              officiis rerum doloremque ipsum mollitia, voluptates facilis
              eveniet fugiat quidem eaque molestias quos molestiae
              perspiciatis delectus excepturi.
              Iure facilis sit vero?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Odio itaque dicta minima a laborum atque quo ex ea libero
              officiis rerum doloremque ipsum mollitia, voluptates facilis
            </p>
            <p>
              eveniet fugiat quidem eaque molestias quos molestiae
              perspiciatis delectus excepturi.
              Iure facilis sit vero?
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Odio itaque dicta minima a laborum atque quo ex ea libero
              officiis rerum doloremque ipsum mollitia, voluptates facilis
              eveniet fugiat quidem eaque molestias quos molestiae
              perspiciatis delectus excepturi. Iure facilis sit vero?
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>

              Odio itaque dicta minima a laborum atque quo ex ea libero
              officiis rerum doloremque ipsum mollitia, voluptates facilis
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Odio itaque dicta minima a laborum atque quo ex ea libero
              officiis rerum doloremque ipsum mollitia, voluptates facilis
              eveniet fugiat quidem eaque molestias quos molestiae
              perspiciatis delectus excepturi.
              Iure facilis sit vero?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Odio itaque dicta minima a laborum atque quo ex ea libero
              officiis rerum doloremque ipsum mollitia, voluptates facilis
            </p>
            <p>
              eveniet fugiat quidem eaque molestias quos molestiae
              perspiciatis delectus excepturi.
              Iure facilis sit vero?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
