import { useState } from "react";

function NavBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };
  return (
    <>
      <div id="title-div">
        <span>DAD JOKES</span>
      </div>
      <div id="search-bar-div">
        <input
          id="search-bar"
          type="text"
          placeholder="Search for jokes..."
          value={searchTerm}
          onChange={handleChange}
        ></input>
      </div>
      <div id="nav-div"></div>
    </>
  );
}

export default NavBar;
