import React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EditLocationIcon from "@material-ui/icons/EditLocation";
import PeopleIcon from "@material-ui/icons/People";
import SendIcon from "@material-ui/icons/Send";
import HelpIcon from "@material-ui/icons/Help";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import "./Header.css";
// import db from "./firebase";
function Header({ channelName }) {
  return (
    <div className="headerr">
      <div className="Chat__name">
        <h3>
          <span className="header__hash">#</span>
          {channelName}
        </h3>
      </div>
      <div className="header__icons">
        <NotificationsIcon />
        <EditLocationIcon />
        <PeopleIcon />
        <div className="Search__box">
          <input placeholder="Search"></input>
          <SearchRoundedIcon />
        </div>
        <SendIcon />
        <HelpIcon />
      </div>
    </div>
  );
}

export default Header;
