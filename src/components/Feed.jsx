import React from "react";
import Post from "./Post";

const numberOfPosts = 50;
const posts = new Array(numberOfPosts).fill(null);
function Feed() {
  return (
    <>
      {posts.map((post) => {
        return <Post />;
      })}
    </>
  );
}

export default Feed;
