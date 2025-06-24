import { Button } from "@mui/material";
import { useState } from "react";

function Joke(props) {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  const handleOnkeyDown = (event) => {
    // we handle the Enter key submit
    if (event.key === "Enter" && text != "") {
      // add text to comment list
      setComments(comments.concat([text]));
      setText("");
    }
  };

  return (
    <div className="joke">
      <p style={{ margin: 0 }}>{props.text}</p>
      <hr />
      <span style={{ display: "block" }}>Comments</span>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <input
        value={text}
        onChange={(event) => setText(event.target.value)}
        className="comment"
        type="text"
        placeholder="Add a comment..."
        onKeyDown={handleOnkeyDown}
      />
      <Button>Click Me!</Button>
    </div>
  );
}

export default Joke;
