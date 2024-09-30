import React, { useEffect, useState } from "react";
import Post from "./Post";

const PostList = () => {
  // Sample data for posts
  const postData = [
    {
      id: 1,
      userName: "user1",
      imageUrl: "https://via.placeholder.com/300",
      likes: 150,
      description: "Enjoying the sunny weather! ☀️",
      time: "2 hours ago",
      comments: [{ content: "Raja" }],
    },
    {
      id: 2,
      userName: "user2",
      imageUrl: "https://via.placeholder.com/300",
      likes: 200,
      description: "Had a great day at the beach! 🌊",
      time: "3 hours ago",
      comments: [],
    },
    {
      id: 3,
      userName: "user3",
      imageUrl: "https://via.placeholder.com/300",
      likes: 320,
      description: "Best coffee ever ☕",
      time: "5 hours ago",
      comments: [{ content: "my hero" }],
    },
  ];
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await fetch("http://192.168.1.77:3000/api/posts");
    const data = await res.json();
    console.log(data);
    setPosts(data.post);
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-5">
      {/* Loop through the postData and render each post */}
      {posts.map((post) => (
        <Post key={post.id} post={post} comments={post.comments} />
      ))}
    </div>
  );
};

export default PostList;
