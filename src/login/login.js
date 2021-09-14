import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { auth } from "../firebase";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="login">
      <img
        src="https://www.freeiconspng.com/thumbs/linkedin-logo-png/linkedin-9.png"
        alt=""
      />
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name*"
          required
        />
        <input
          type="url"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile pic URL"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email*"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password*"
          required
        />
        <button type="submit" onClick={loginToApp}>
          Sign in
        </button>
      </form>
      <p>
        Not a member?
        <span className="login_register">Register now!</span>
      </p>
    </div>
  );
}

export default Login;
