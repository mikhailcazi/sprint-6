import "./Planet.css";

function Planet({ name, diameter, rotation_period }) {
  return (
    <div className="planet">
      <h4>{name}</h4>
      <p>
        {name} has a diameter of {diameter} km. It takes {rotation_period} days
        to turn once on its axis!
      </p>
    </div>
  );
}

export default Planet;
