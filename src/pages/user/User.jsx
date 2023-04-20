import "./user.css";
import { Link } from "react-router-dom";
import Userdata from "../../components/user-data/Userdata";

const User = () => {
  return (
    <div className="user">
      <div className="user-title-container">
        <h1 className="user-title">Edit User</h1>
        <Link to="/newUser">
          <button className="user-title-button">Create</button>
        </Link>
      </div>
      <div className="user-container">
        <Userdata />
      </div>
    </div>
  );
};

export default User;
