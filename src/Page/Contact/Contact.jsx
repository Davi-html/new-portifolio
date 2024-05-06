import "./contact.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Link } from 'react-router-dom'

import linkedin from "../../assets/linkedin.webp";
import instagram from "../../assets/instagram.webp";
import github from "../../assets/github.webp";

import { Hour } from "../../components/Hours";
import { Light } from "../../components/Light";

import pictureOfMe from "../../assets/me.jpeg";

export function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (email === "" || message === "") {
      const divButtonH3 = document.querySelector(".div-button-h3");
      divButtonH3.style.color = "#dd6767";
      divButtonH3.innerHTML = "Please fill out all fields!";

      setTimeout(() => (divButtonH3.innerHTML = ""), 4000);
      return;
    } else {
      const divButtonH3 = document.querySelector(".div-button-h3");
      divButtonH3.style.color = "rgb(114, 233, 114)";
    }

    const templateParams = {
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_bryeapq",
        "template_5d6wp8p",
        templateParams,
        "ri_aT6XmJqwleGKF5"
      )
      .then(
        (response) => {
          const divButtonH3 = document.querySelector(".div-button-h3");
          divButtonH3.innerHTML = "Email successfully sent";

          setTimeout(() => (divButtonH3.innerHTML = ""), 4000);

          console.log("Email enviado", response.status, response.text);
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("Email nao enviado", error.status, error);
        }
      );
  }

  return (
    <>
      <div className="bg">
        <section className="container-contact">
          <div className="header">
            <div className="img"></div>
            <div className="content-header">
              <div className="foto-perfil">
                <img src={pictureOfMe} />
              </div>
              <div className="desc">
                <h1>Davi</h1>
                <p>self-taught software engineer from Brazil</p>
                <p id="toWork">
                  I'm currently available to work, so feel free to contact me.
                  👋
                </p>
                <div className="social">
                  <img src={linkedin} alt="" />
                  <img src={instagram} alt="" />
                  <img src={github} alt="" />
                </div>
                <hr />
                <nav>
                  <Link className='home' to='/'>HOME</Link>
                  <Link className='projects' to=''>PROJECTS</Link>
                  <Link className='contact' to='/contact'>CONTACT</Link>
                  <Link className='blog' to=''>BLOG</Link>
                </nav>
              </div>
            </div>
          </div>
          <div className="hour">
            <Hour />
          </div>
          <div className="light">
            <Light />
          </div>

          <form className="form" onSubmit={sendEmail}>
            <h1>EMAIL</h1>
            <input
              type="email"
              className="input"
              placeholder="exemple@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <h1>MESSAGE</h1>
            <textarea
              className="textarea"
              placeholder="Hi Davi, what's up?"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <div className="div-button">
              <h3 className="div-button-h3"></h3>
              <input className="button" type="submit" value="SEND" />
            </div>
          </form>
        </section>
      </div>
    </>
  );
}
