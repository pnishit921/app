import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [keyword, setkeyword] = useState("");
  const [tracks, setTracks] = useState([]);
  const getTracks = async () => {
    let data = await fetch(
      `https://v1.nocodeapi.com/nishi/spotify/wtsdFBbGlOOEuEGz/search?q=${keyword}&type=track`
    );
    let respone = await data.json();
    console.log(respone.tracks.items);
    setTracks(respone.tracks.items);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={reactLogo} alt="React Logo" />
            Vite-music
          </a>
          <button
            className="navbar-toggler shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse shadow-none " id="navbarSupportedContent">
            <input
              value={keyword}
              onChange={(event) => {
                setkeyword(event.target.value);
              }}
              className="form-control mt-1 me-2"
              type="search"
              placeholder="Search music"
              aria-label="Search"
            />
            <button
              
              onClick={getTracks}
              className="btn btn-outline-success mt-2"
              type="submit"
              
            >
              Search
            </button>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          {tracks.map((ele) => {
            return (
              <div className="col m-4 rounded bg-dark">
                <img
                  className="rounded m-4 "
                  src={ele.album.images[1].url}
                  alt=""
                  srcset=""
                />
                <h3 className="text-white">{ele.name}</h3>
                <audio className="w-100" src={ele.preview_url} controls></audio>

              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
