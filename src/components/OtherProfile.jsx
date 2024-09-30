import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../features/auth/authSlice";
import { api } from "../config";
import ProfileSkeleton from "../Skeleton/ProfileSkeleton";
import ImageSkeleton from "../Skeleton/ImageSkeleton";
import { Link, useParams } from "react-router-dom";

const OtherProfile = () => {
  const currentuser = useSelector(selectCurrentUser);
  const { token } = currentuser;
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const param = useParams();

  const getPosts = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${api.url}/users/${param.id}`, {
        headers: {
          Authorization: token,
        },
      });
      const result = await res.json();

      setPosts(result.post);
      console.log(result.user);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {loading ? (
        <ProfileSkeleton />
      ) : (
        <div className="max-w-4xl mx-auto p-4">
          {/* Profile Header */}
          <div className="flex items-center mb-6 border-b border-gray-300 pb-4">
            <div className="w-24 h-24 rounded-full  border-gray-300">
              <div className="avatar placeholder ">
                <div className="bg-slate-500  flex items-center justify-center text-white h-20 w-20 rounded-full ">
                  <span className="text-3xl">
                    {user?.username?.at(0).toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
            <div className="ml-4 flex-grow mt-5">
              <h2 className="text-2xl font-bold">
                {user.username}-{user.us}
              </h2>
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
            <span className="cursor-pointer py-2 text-lg font-medium">
              Posts
            </span>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-3 gap-4">
            {user.postsData.map((post, index) => (
              <div key={index} className="relative w-full h-0 pb-[100%]">
                {loading && <ImageSkeleton />}
                <Link to={`/user-post/${currentuser.user.id}`}>
                  <img
                    src={post.image_url}
                    alt={`Post ${index}`}
                    onLoad={() => setLoading(false)}
                    className="absolute inset-0 w-full h-full object-cover "
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default OtherProfile;
