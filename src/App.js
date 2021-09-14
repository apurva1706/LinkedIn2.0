import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import AppBody from "./components";
import Feed from "./components/feed/feed";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import Signup from "./signup/signup";

function App() {
  const user = useSelector(selectUser);
  console.log(user);
  const dispatch=useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth)
      {
        //user is logged in
        console.log("User is logged in");
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName:userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
         
        );
        console.log("login successful");
      }
      else
      {
        //user is logged out
        console.log("User is logged out");
        dispatch(logout());
      }
    })
  },[])
  return (
    <div className="app">
      <Header />
      {!user ? (
        <Signup />
      ) : (
        // <div className="app_body">
        //   <Sidebar />
        //   <Feed />
        // </div>
        <AppBody/>
      )}
    </div>
  );
}

export default App;
