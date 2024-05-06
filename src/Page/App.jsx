import './App.css'
import linkedin from '../assets/linkedin.webp'
import instagram from '../assets/instagram.webp'
import github from '../assets/github.webp'

import { Hour } from '../components/Hours'
import { Light } from '../components/Light'
import { Spotify } from '../components/Spotify'
import { DivGit } from '../components/DivGit'
import { Map } from '../components/Map'
import { MyTooltip } from '../components/Tooltip'
import { AboutMe } from '../components/AboutMe'

import pictureOfMe from '../assets/me.jpeg'

export function App() {

  return (
    <>
      <div className='bg'>
        <section className='container'>
          <div className='header'>
            <div className='img'></div>
            <div className="content-header">
              <div className="foto-perfil">
                <img src={pictureOfMe} />
              </div>
              <div className="desc">
                <h1>Davi</h1>
                <p>self-taught software engineer from Brazil</p>
                <p id='toWork'>I'm currently available to work, so feel free to contact me. 👋</p>
                <div className="social">
                  <img src={linkedin} alt="" />
                  <img src={instagram} alt="" />
                  <img src={github} alt="" />
                </div>
                <hr />
                <nav>
                  <a className='home' href=''>HOME</a>
                  <a className='projects' href=''>PROJECTS</a>
                  <a className='contact' href=''>CONTACT</a>
                  <a className='blog' href=''>BLOG</a>
                </nav>
              </div>
            </div>
          </div> 
          <Hour />
          <Light />
          <Map />
          <Spotify />
          <div className='div6'>6</div>
          <DivGit />
          <MyTooltip />
          <AboutMe />
        </section>
      </div>
    </>
  )
}

