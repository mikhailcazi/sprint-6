import Profile from "./Profile";
import "./ClassWall.css";
import classData from "../data/profile-data.json";
import { useParams, useSearchParams } from "react-router";

function ClassWall() {
  console.log(classData);
  const [params, setParams] = useSearchParams();
  return (
    <>
      <div className="class-wall">
        {classData.map((person, index) => (
          <Profile key={index} {...person} chosen={params.get("default")} />
        ))}
      </div>
    </>
  );
}

export default ClassWall;
