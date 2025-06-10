import { useState } from "react";

function Profile({ name, hobby, favouriteWord }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className={"profile-tile" + (clicked ? " profile-clicked" : "")}
      onClick={() => setClicked(true)}
    >
      <span className={"profile-name"}>{name}</span>
      <span>Hobby:{hobby}</span>
      <span>Fav Word:{favouriteWord}</span>
    </div>
  );
}

export default Profile;
