import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./Post.css";
import avatar from "./avatar.png"

function Post({ username, caption, image }) {

  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="post__avatar" alt={username} src={avatar} />
        <h3>{username}</h3>
      </div>
      <img className="post__image" src={image} alt="" />
      <h4 className="post__text">
        <strong>{username} </strong>
        {caption}
      </h4>
    </div>
  );
}

export default Post;
