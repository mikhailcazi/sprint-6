import Profile from "./Profile";
import "./ClassWall.css";
import classData from "../data/profile-data.json";

function ClassWall() {
  console.log(classData);

  return (
    <div className="class-wall">
      {classData.map((person, index) => (
        <Profile key={index} {...person} />
      ))}
    </div>
  );
}

export default ClassWall;
