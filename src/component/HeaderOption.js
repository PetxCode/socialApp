import React from "react";
import "./Header.css";

import HomeWorkIcon from "@material-ui/icons/HomeWork";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import SmsIcon from "@material-ui/icons/Sms";
import WorkIcon from "@material-ui/icons/Work";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar, Icon } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
// immport {selectUser}

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="header__RightContainer">
      {Icon && <Icon />}
      {avatar && (
        <Avatar
          src={user?.photoUrl}
          style={{ width: "25px", height: "25px", objectFit: "contain" }}
        >
          {user?.email[0]}
        </Avatar>
      )}
      <div>{title}</div>
    </div>
  );
}

export default HeaderOption;

// <div className="header__RightContainer">
//           <HomeWorkIcon />
//           <div>Home</div>
//         </div>
//         <div className="header__RightContainer">
//           <PeopleAltIcon />
//           <div>My Network</div>
//         </div>
//         <div className="header__RightContainer">
//           <WorkIcon />
//           <div>Job</div>
//         </div>
//         <div className="header__RightContainer">
//           <SmsIcon />
//           <div>Messaging</div>
//         </div>
//         <div className="header__RightContainer">
//           <NotificationsActiveIcon />
//           <div>Notification</div>
//         </div>
//         <div className="header__RightContainer">
//           <AccountCircleIcon />
//           <div>Me</div>
//         </div>
//         <div className="header__RightContainer">
//           <AppsIcon />
//           <div>Work</div>
//         </div>
