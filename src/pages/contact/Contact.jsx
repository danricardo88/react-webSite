import React from 'react';
import { MdEmail } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import HeaderImage from '../../images/header_bg_2.jpg';
import Header from '../../components/Header';
import './contact.css';

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Incidunt corrupti nisi consequuntur,
        laborum blanditiis omnis suscipit quam odit!
      </Header>
      <section>
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a
              href="mailto:daniel.ricardo88@outlook.com"
              target="_blank"
              rel="noreferrer"
            >
              <MdEmail />
            </a>
            <a
              href="mailto:daniel.ricardo88@outlook.com"
              target="_blank"
              rel="noreferrer"
            >
              <BsMessenger />
            </a>
            <a
              href="https://wa.me/+5521975827291"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
