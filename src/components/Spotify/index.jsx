import { Container } from "./style";
import { useState, useEffect } from 'react';

export function Spotify() {

  const [api, setApi] = useState([]);
  useEffect(() => {
    fetch('https://api-spotify-backend.vercel.app/api/user-read-currently-playing/spotify', { mode: 'cors' })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if(data.isPlaying === false || data.is_playing === false){
          const track = document.querySelector('.track')
          track.innerHTML = 'last song played'
        }else{
          const track = document.querySelector('.track')
          track.innerHTML = 'playing now'
        }

        if(data.isPlaying === false || data.is_playing === false){
          const music = document.querySelector('.music')
          const artist = document.querySelector('.artist')
          const album = document.querySelector('.album')
          const img = document.querySelector(".img-album");

          
          img.setAttribute('src', 'https://i.scdn.co/image/ab67616d00001e0239342418c92f94196cde3992');
          music.innerHTML = 'In This Shirt'
          artist.innerHTML = 'The Irrepressibles'
          album.innerHTML = 'From the Circus to te Sea, Pt.2 '
        }

        setApi(data);
      });
      
  }, []);

  return (
    <Container className="div5">
      <div className="div-listening">
        <h1 className="listening">
          What i'm listening now on my{" "}
          <a href="https://open.spotify.com/user/316lhk7zx7vgmajatz2zqoswjdnm">
            spotify
          </a>
        </h1>
        <div className="animation">
          <div className="scale-up-center"></div>
          <div className="circle"></div>
        </div>
      </div>
      <div className="content">
        <img src={api.images?.url} className="img-album"/>
        <div className="name">
          <h2 className="music">{api.title}</h2>
          <p className="artist">by {api.artists}</p>
          <p className="album">{api.album}</p>
        </div>
      </div>
      <h3 className="track">Playing now</h3>
    </Container>
  );
}
