import React from "react";

const Profile = () => {
  const user = {
    username: "john_doe",
    profilePicture: "https://via.placeholder.com/150",
    bio: "Just another Instagram user.",
    posts: 120,
    followers: 1500,
    following: 300,
    postsData: [
      { imageUrl: "https://via.placeholder.com/300" },
      { imageUrl: "https://via.placeholder.com/300" },
      { imageUrl: "https://via.placeholder.com/300" },
      { imageUrl: "https://via.placeholder.com/300" },
      { imageUrl: "https://via.placeholder.com/300" },
      { imageUrl: "https://via.placeholder.com/300" },
      // Add more post objects as needed
    ],
  };
  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Profile Header */}
      <div className="flex items-center mb-6 border-b border-gray-300 pb-4">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300">
          <img
            src={user.profilePicture}
            alt={`${user.username}'s profile`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="ml-4 flex-grow">
          <h2 className="text-2xl font-bold">{user.username}</h2>
          <button className="mt-2 bg-blue-500 text-white rounded px-4 py-1">
            Edit Profile
          </button>
          <div className="flex mt-2 space-x-6">
            <span className="font-semibold">
              <strong>{user.posts}</strong> posts
            </span>
          </div>
          <p className="mt-2 text-gray-600">{user.bio}</p>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex space-x-4 border-b border-gray-300 mb-4">
        <span className="cursor-pointer py-2 text-lg font-medium">Posts</span>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-3 gap-4">
        {user.postsData.map((post, index) => (
          <div key={index} className="relative w-full h-0 pb-[100%]">
            <img
              src={post.imageUrl}
              alt={`Post ${index}`}
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
