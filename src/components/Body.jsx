import { useState } from "react";

function Body() {
  // getter, setter
  let [city, setCity] = useState("San Francisco");

  setTimeout(() => {
    setCity("New York"); // react tracks calls to setter function
  }, 5000);

  setTimeout(() => {
    city = "London"; // this will not update, since setCity has not been called
  }, 7000);

  return (
    <>
      <div>
        <p>I left my heart in {city}!</p>
      </div>
    </>
  );
}

export default Body;
