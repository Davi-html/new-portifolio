import { Container } from "./style";
import music from '../../assets/music.webp'

export function Spotify(){
    
    return(
        <Container className="div5">
            <div className="div-listening">
                <h1 className="listening">What i'm listening now on my <a href="https://open.spotify.com/user/316lhk7zx7vgmajatz2zqoswjdnm">spotify</a></h1>
                <div className="animation">
                    <div className="scale-up-center"></div>
                    <div className="circle"></div>
                </div>
            </div>
            <div className="content">
                <img src={music} className="img-album"/>
                <div className="name">
                    <h2 className="music">Yong girl</h2>
                    <p className="artist">by Sinamota</p>
                    <p className="album">on Alive</p>
                </div>
            </div>
            <h3 className="track">Playing now</h3>
        </Container>
    )    
}