import { Container } from "./style";
import music from "../../assets/music.webp";

export function Spotify() {
  const clientId = "171b9b0a9c1d42099ce352be608e2df1";
  const secretId = "8084f1505a8e433c9a199e380df58aff";

  const authentication = () => {
    const redirect_uri = "http://localhost:5174/";
    const scopes = "user-read-currently-playing";
    window.location.href = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&scope=${scopes}&redirect_uri=${redirect_uri}`;
  };
  setInterval(authentication, 3600000 / 2);

  const getAccessToken = () => {
    const paramsString2 = `${window.location.href}`;
    const searchParams2 = new URLSearchParams(paramsString2);

    if (searchParams2.has("https://this-is-my-portifolio.netlify.app/#access_token")) {
      localStorage.token = searchParams2.get("http://localhost:5174/#access_token");

      return searchParams2.get("https://this-is-my-portifolio.netlify.app/#access_token")
    } else if (searchParams2.has("https://this-is-my-portifolio.netlify.app/")) {
      return;
    }
  };
  

  async function fetchCurrentlyPlaying(token) {
    const response = await fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    return data;
  }

  const token = getAccessToken()
  setInterval(localStorage.removeItem(token), 3600000 / 2);

  fetchCurrentlyPlaying(token)
    .then((data) => console.log(data))

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
        <img src={music} className="img-album" />
        <div className="name">
          <h2 className="music">Yong girl</h2>
          <p className="artist">by Sinamota</p>
          <p className="album">on Alive</p>
        </div>
      </div>
      <h3 className="track">Playing now</h3>
    </Container>
  );
}
