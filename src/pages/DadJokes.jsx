import { useState } from "react";
import JokeList from "../components/JokeList";
import NavBar from "../components/NavBar";
import "../styles/DadJokes.css";

function DadJokes() {
  const [term, setTerm] = useState("");
  const onSearch = (value) => {
    setTerm(value);
  };
  return (
    <>
      <div id="nav-bar">
        <NavBar onSearch={onSearch} />
      </div>
      <div style={{ height: "100%" }}>
        <JokeList term={term} />
      </div>
    </>
  );
}

export default DadJokes;
