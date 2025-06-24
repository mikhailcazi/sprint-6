import { useState } from "react";
import JokeList from "../components/JokeList";
import NavBar from "../components/NavBar";
import "../styles/DadJokes.css";
import { Outlet, Route, Routes } from "react-router";
import ClassWall from "../components/ClassWall";

function DadJokes() {
  const [term, setTerm] = useState("");
  const searchFunction = (value) => {
    setTerm(value);
  };

  return (
    <>
      <div id={"nav-bar"}>
        <NavBar onSearch={searchFunction} />
      </div>

      <Outlet />

      <Routes>
        <Route path="/jokes" element={<JokeList term={term} />} />
        <Route path="/class-wall" element={<ClassWall />} />
      </Routes>
    </>
  );
}

export default DadJokes;
