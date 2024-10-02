import React, { useEffect, useState } from "react";
import Post from "./Post";
import { api } from "../config";
import PostListSkeleton from "../Skeleton/PostSkeleton";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../features/auth/authSlice";

const UserPostList = () => {
  const currentuser = useSelector(selectCurrentUser);
  const { token } = currentuser;
  const [posts, setPosts] = useState([]);
  const [load, setLoad] = useState(false);
  const parmas = useParams();

  const getPosts = async () => {
    try {
      setLoad(true);
      const res = await fetch(`${api.url}/users/${parmas.id}`, {
        headers: {
          Authorization: token,
        },
      });
      const result = await res.json();
      // console.log(data);
      setPosts(result.data.post);
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

export default UserPostList;
