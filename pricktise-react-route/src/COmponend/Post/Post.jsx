// import React, { use } from "react";
import { Link, useLoaderData } from "react-router";

const Post = () => {
//   const promisPost = use(postes);
  const promisPost = useLoaderData();

  return (
    <div>
      <div>
        {promisPost.map((post) => (
          <div className="border mt-2 rounded-lg bg-yellow-400 py-3 font-medium ">
            <p>{post.id}</p>
            <p>{post.title}</p>
            <Link
              className="bg-red-400 px-2 py-1 rounded text-white"
              to={`/postDetlis/${post.id}`}
            >
              Show Body
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
