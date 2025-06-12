import axios from "axios";
import { useState } from "react";
import Joke from "./Joke";

function JokeList(props) {
  const URL = "https://icanhazdadjoke.com/search";

  const [jokeList, setJokes] = useState([]);
  console.log(jokeList);
  if (jokeList.length == 0) {
    const headers = {
      Accept: "application/json",
    };
    axios.get(URL, { headers }).then((res) => {
      setJokes(res?.data?.results);
    });
  }

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
