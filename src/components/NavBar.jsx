import { Button } from "@mui/material";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router";

function NavBar({ onSearch }) {
  const nav = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    if (typeof onSearch === "function") {
      onSearch(event.target.value);
    }
  };
  return (
    <>
      <div id={"title-div"}>
        <span>DAD JOKES</span>
      </div>
      <div id={"search-bar-div"}>
        <input
          id={"search-bar"}
          type="text"
          placeholder="Search for jokes..."
          value={searchTerm}
          onChange={handleChange}
        ></input>
      </div>
      <div id="nav-div">
        <Button
          onClick={() => {
            nav("/jokes");
          }}
        >
          Jokes
        </Button>
        <Button
          onClick={() => {
            nav("/class-wall");
          }}
        >
          Class Wall
        </Button>
      </div>
    </>
  );
}

export default NavBar;
