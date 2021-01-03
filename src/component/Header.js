import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import logo from "../component/logo11.png";
import "./Header.css";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import SmsIcon from "@material-ui/icons/Sms";
import WorkIcon from "@material-ui/icons/Work";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AppsIcon from "@material-ui/icons/Apps";
import HeaderOption from "./HeaderOption";
import img from "./11.jpg";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { auth } from "../firebase";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__Left">
        <div className="header__Logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header__search">
          <SearchIcon style={{ color: "gray" }} />
          <input type="text" className="header__input" placeholder="Search" />
        </div>
      </div>
      <div className="header__Right">
        <HeaderOption Icon={HomeWorkIcon} title="Home" />
        <HeaderOption Icon={PeopleAltIcon} title="My Network" />
        <HeaderOption Icon={WorkIcon} title="Job" />
        <HeaderOption Icon={SmsIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsActiveIcon} title="Notification" />
        <HeaderOption
          avatar={img}
          title={"You"}
          onClick={() => {
            logoutOfApp();
          }}
        />
      </div>
    </div>
  );
}

export default Header;

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
