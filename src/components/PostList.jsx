import React, { useEffect, useState } from "react";
import Post from "./Post";
import { api } from "../config";
import PostListSkeleton from "../Skeleton/PostSkeleton";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [load, setLoad] = useState(false);

  const getPosts = async () => {
    try {
      setLoad(true);
      const res = await fetch(`${api.url}/posts`);
      const data = await res.json();
      // console.log(data);
      setPosts(data.post);
      console.log(data);
      setLoad(false);
    } catch (error) {
      console.log(error);
      setLoad(false);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {load ? (
        <PostListSkeleton />
      ) : (
        <div className="max-w-2xl mx-auto p-5">
          {/* Loop through the postData and render each post */}
          {posts.map((post) => (
            <Post
              key={post.id}
              post={post}
              comments={post.comments}
              load={load}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default PostList;
