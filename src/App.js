import { useEffect, useState } from "react";
import "./App.css";
import Post from "./Components/Post";
import { db } from "./firebase";

function App() {
  const [posts, setPosts] = useState([]);
  // useEffect Runs A piece of code based on a specific condition
  //nuns everytime the variable changes and once when the  app component runs
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      //every time a new post is added ,this code runs...
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  });

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>
      {posts.map(({ id, post }) => (
        <Post
          key={id}
          username={post.username}
          caption={post.caption}
          image={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
