import React from "react";
import { useLoaderData } from "react-router";
import SinglePost from "../SinglePost/SinglePost";

const Post = () => {
  const promise = useLoaderData();

  return (
    <div>
      <h1>This Is Post Data</h1>
      {promise.map((element) => (
        <SinglePost element={element}></SinglePost>
      ))}
    </div>
  );
};

export default Post;
