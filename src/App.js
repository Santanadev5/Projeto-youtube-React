import { useState } from "react";
import Header from "./components/header";
import Menu from "./components/menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Library from "./pages/library";
import History from "./pages/history";
import Shorts from "./pages/shorts";
import Registration from "./pages/registration";
import High from "./pages/high";
import Shopping from "./pages/shopping";
import Music from "./pages/music";
import Movie from "./pages/movie";
import Live from "./pages/live";
import Game from "./pages/game";
import News from "./pages/news";
import Sport from "./pages/sport";
import Learn from "./pages/learn";

function App() {
  const [openMenu, setOpenMenu] = useState(true);

  return (

    <UserStorage>
      <BrowserRouter>
        <div className="App">
          <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <div style={{ width: "100%", display: "flex" }}>
            <Menu openMenu={openMenu} />
            <div
              style={{
                width: "100%",
                padding: "0px 60px",
                boxSizing: "border-box",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Routes>
                <Route path="/" element={<Home openMenu={openMenu} />} /> 
                <Route path="/library" element={<Library />} />
                <Route path="/history" element={<History />} />
                <Route path="/shorts" element={<Shorts />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/high" element={<High />} />
                <Route path="/shopping" element={<Shopping />} />
                <Route path="/music" element={<Music />} />
                <Route path="/movie" element={<Movie />} />
                <Route path="/live" element={<Live />} />
                <Route path="/game" element={<Game />} />
                <Route path="/news" element={<News />} />
                <Route path="/sport" element={<Sport />} />
                <Route path="/learn" element={<Learn />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </UserStorage>
  );
}

export default App;
