import axios from "axios";
import { useState, useEffect } from "react";
import Joke from "./Joke";

function JokeList(props) {
  const URL = "https://icanhazdadjoke.com/search";

  const [jokeList, setJokes] = useState([]);

  const headers = {
    Accept: "application/json",
  };

  const axiosFunction = () => {
    axios.get(URL, { headers }).then((res) => {
      setJokes(res?.data?.results);
    });
  };

  useEffect(axiosFunction, []);

  return (
    <div id="joke-list">
      {jokeList
        .filter((jokeInfo) => jokeInfo.joke.includes(props.term))
        .map((jokeInfo) => (
          <Joke key={jokeInfo.id} text={jokeInfo.joke} />
        ))}
    </div>
  );
}

export default JokeList;
