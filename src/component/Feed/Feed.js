import React, { useState, useEffect } from "react";
import "./Feed.css";
// import CreateIcon from "@material-ui/icons/Create";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import InputFeedOption from "./inputOption";
import ImageIcon from "@material-ui/icons/Image";
import MovieIcon from "@material-ui/icons/Movie";
import EventNoteIcon from "@material-ui/icons/EventNote";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Post from "./Post";
import { db, auth, app } from "../../firebase";
import firebase from "firebase";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";

function Feed() {
  const user = useSelector(selectUser);
  const [post, setPost] = useState([]);
  const [input, setInput] = useState("");
  const [img, setImg] = useState("");

  const getPost = async () => {
    await db
      .collection("post")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        const items = [];
        snapshot.forEach((doc) => {
          items.push({ ...doc.data(), id: doc.id });
        });
        setPost(items);
      });
  };

  const postImg = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setImg(await fileRef.getDownloadURL());
  };

  const makePost = async () => {
    await db
      .collection("post")
      .doc()
      .set({
        name: user.displayName,
        description: user.email,
        message: input,
        photoUrl: user.photoUrl || " ",
        // postImg: await img,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    setInput("");
  };

  const sendPost = async (e) => {
    e.preventDefault();
    makePost();
  };
  console.log(post);
  useEffect(() => {
    getPost();
  }, []);
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <BorderColorIcon />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                makePost();
              }}
              type="submit"
            >
              send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          {/*  */}
          <InputFeedOption
            Icon={ImageIcon}
            title="Photo"
            color="#70B5F9"
            // onClick={postImg}
          />
          <InputFeedOption Icon={MovieIcon} title="Video" color="#E7A33E" />
          <InputFeedOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputFeedOption
            Icon={AssignmentIcon}
            title="Write Article"
            color="#7FC15E"
          />
        </div>
      </div>
      {/* post */}{" "}
      <FlipMove>
        {post.map(({ id, name, photoUrl, description, message }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
