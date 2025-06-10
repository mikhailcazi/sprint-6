import Profile from "./Profile";
import "./ClassWall.css";

function ClassWall() {
  return (
    <div className="class-wall">
      <Profile name="Mikhail" hobby="Gaming" favouriteWord="Obnoxious" />
      <Profile name="Kevin" hobby="Running" favouriteWord="Dog" />
      <Profile name="Hakimi" hobby="Volleyball" favouriteWord="Love" />
      <Profile name="Dionne" hobby="Gaming" favouriteWord="Cat" />
      <Profile name="Jason" hobby="Hiking" favouriteWord="Skydiving" />
      <Profile name="David" hobby="Martial Arts" favouriteWord="Damn" />
    </div>
  );
}

export default ClassWall;
