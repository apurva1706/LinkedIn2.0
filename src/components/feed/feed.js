import React, { useState, useEffect } from "react";
import CreateIcon from "@material-ui/icons/Create";
import "./feed.css";
import InputOptions from "./inputOptions";
import ImageIcon from "@material-ui/icons/Photo";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EventNoteIcon from "@material-ui/icons/EventNote";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Post from "./post";
import { db } from "../../firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  const user=useSelector(selectUser);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  const sendPost = (e) => {
    e.preventDefault();
    
    db.collection("posts").add({
      name:user.displayName,
      description:user.email,
      message: input,
      photoUrl:user.photoUrl||"",
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon className="feed_inputCreateIcon" />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Start a post"
            />
            <button onClick={sendPost} type="submit">
              send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOptions title="Photo" Icon={ImageIcon} color="#70B5f9" />
          <InputOptions title="Video" Icon={YouTubeIcon} color="#e7a33e" />
          <InputOptions title="Event" Icon={EventNoteIcon} color="cocbcd" />
          <InputOptions
            title="Write article"
            Icon={AssignmentIcon}
            color="7fc15e"
          />
        </div>
      </div>
      <FlipMove>
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
          key={id}
        />
      ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
