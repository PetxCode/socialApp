import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import InputFeedOption from "./inputOption";
import EventNoteIcon from "@material-ui/icons/EventNote";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ChatIcon from "@material-ui/icons/Chat";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";

import "./Post.css";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  const user = useSelector(selectUser);
  const [click, setClick] = React.useState(false);
  const [count, setCount] = React.useState(1);
  const onClick = () => {
    setClick(!click);
  };
  const onCount = () => {
    if (click === true) {
      setClick(count + 1);
    } else {
      setClick(count);
    }
  };
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={user.photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2> {name} </h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__bodyOption">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <InputFeedOption
            // style={click ? "cB" : "cG"}
            Icon={ThumbUpAltIcon}
            title="Like"
            onClick={onClick}
            color={click ? "#239EEF" : "gray"}
          />
          <p>{count}</p>
        </div>
        <InputFeedOption Icon={ChatIcon} title="Comment" color="gray" />
        <InputFeedOption Icon={ShareIcon} title="Share" color="gray" />
        <InputFeedOption Icon={SendIcon} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
