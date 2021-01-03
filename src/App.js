import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Header from "./component/Header";
import SideBar from "./component/SideBar/SideBar";
import Feed from "./component/Feed/Feed";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./component/Login/Login";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import Widget from "./component/Widget/Widget";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <SideBar />
          <Feed />
          <Widget />
        </div>
      )}
    </div>
  );
}

export default App;
