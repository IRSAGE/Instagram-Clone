import { useState } from "react";
import "./App.css";
import Post from "./Components/Post";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "IR~SAGE",
      caption: "Wow First Caption",
      image:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    },
    {
      username: "IR~SAGE",
      caption: "Wow First Caption",
      image:
        "https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg",
    },
  ]);

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>
      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default App;
