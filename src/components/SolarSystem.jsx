import axios from "axios";
import Planet from "./Planet";
import { useEffect, useState } from "react";

function SolarSystem() {
  const URL = "https://webapis.bloomtechdev.com/planets";

  const [planetData, setPlanetData] = useState([]);

  useEffect(() => {
    axios.get(URL).then((res) => {
      setPlanetData(res.data);
      console.log(planetData);
    });
  });

  return (
    <>
      <h1>Welcome to the Solar System</h1>
      {planetData.map((planet) => (
        <Planet key={planet.id} {...planet} />
      ))}
    </>
  );
}

export default SolarSystem;
