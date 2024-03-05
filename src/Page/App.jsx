import './App.css'
import linkedin from '../assets/linkedin.webp'
import instagram from '../assets/instagram.webp'
import github from '../assets/github.webp'

import { Hour } from '../components/Hours'
import { Light } from '../components/Light'
import { Spotify } from '../components/Spotify'

export function App() {
  
  return (
    <>
      <div className='bg'>
        <section className='container'>
          <div className='header'>
            <div className='img'>
              
            </div>
            <div className="content-header">
              <div className="desc">
                <h1>Davi</h1>
                <p>self-taught software engineer from Brazil</p>
                <p id='toWork'>I'm currently available to work, so feel free to contact me. 👋</p>
              </div>
              <hr />
              <div className="social">
                <img src={linkedin} alt="" />
                <img src={instagram} alt="" />
                <img src={github} alt="" />
              </div>
              <nav>
                <p>HOME</p>
                <p>PROJECTS</p>
                <p>CONTACT</p>
                <p>BLOG</p>
              </nav>
            </div>
          </div> 
          <Hour/>
          <Light/>
          <div className='div3'>3</div>
          <Spotify/>
          <div className='div6'>6</div>
          <div className='div7'>7</div>
          <div className='div8'>8</div>
          <div className='div9'>9</div>
        </section>
      </div>
    </>
  )
}

