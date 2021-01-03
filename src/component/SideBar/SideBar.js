import { Avatar } from "@material-ui/core";
import React from "react";
import "./SideBar.css";
import img from "../11.jpg";
import bg from "./img.png";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

function SideBar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="Sidebar__recentItem">
      <span className="Sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="SideBar">
      <div className="SideBar__Top">
        <img src={bg} alt="bg" />
        <Avatar
          src={user.photoUrl ? user.photoUrl : user.email[0]}
          alt="img"
          className="SideBar__avatar"
        >
          {user.email[0]}
        </Avatar>

        <h3>{user.displayName}</h3>
        <p>{user.email}</p>
      </div>
      <div className="SideBar__stats">
        <div className="SideBar__stat">
          <p>Who viewed You</p>
          <p className="SideBar__statNumber">3,004</p>
        </div>
        <div className="SideBar__stat">
          <p>view on post</p>
          <p className="SideBar__statNumber">1,004</p>
        </div>{" "}
      </div>{" "}
      <div className="SideBar__bottom">
        <p>Recent</p>
        {recentItem("ReactJS")}
        {recentItem("Developers")}
        {recentItem("Designs")}
        {recentItem("Software Engineering")}
      </div>
    </div>
  );
}

export default SideBar;
