import React from "react";
import Post from "./Post";
import CommentSection from "./../CommentSection/CommentSection";

import "./PostContainer.css";

const PostContainer = props => {
  return (
    <div className="post-container">
      <Post user={props.userData} />
      <CommentSection user={props.userData} />
    </div>
  );
};

export default PostContainer;