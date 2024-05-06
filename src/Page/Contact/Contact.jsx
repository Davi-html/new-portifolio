import "./contact.css";

import linkedin from "../../assets/linkedin.webp";
import instagram from "../../assets/instagram.webp";
import github from "../../assets/github.webp";

import { Hour } from "../../components/Hours";
import { Light } from "../../components/Light";

import pictureOfMe from "../../assets/me.jpeg";

import { useState } from "react";

export function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <div className="bg">
        <section className="container">
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
                  <a className="home" href="">
                    HOME
                  </a>
                  <a className="projects" href="">
                    PROJECTS
                  </a>
                  <a className="contact" href="">
                    CONTACT
                  </a>
                  <a className="blog" href="">
                    BLOG
                  </a>
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

          <form className="form" onSubmit={() => {}}>
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
                <input className="button" type="submit" value="SEND" />
            </div>
          </form>
        </section>
      </div>
    </>
  );
}
