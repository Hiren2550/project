import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut, selectCurrentUser } from "../features/auth/authSlice";
import { api } from "../config";
import ProfileSkeleton from "../Skeleton/ProfileSkeleton";
import ImageSkeleton from "../Skeleton/ImageSkeleton";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Modal from "./Model";

const Profile = () => {
  const [showModal, setShowModal] = React.useState(false);
  const message = "Do you want to delete Your Account?";
  const title = "Account Deletion";
  const currentuser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const { token } = currentuser;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(false);

  const getPosts = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${api.url}/users/${currentuser.user.id}`, {
        headers: {
          Authorization: token,
        },
      });

      if (res.status === 401) {
        dispatch(logOut());
      }
      const result = await res.json();

      setPosts(result.data.post);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`${api.url}/users/${currentuser.user.id}`, {
        method: "DELETE",

        headers: {
          Authorization: token,
        },
      });
      if (response.ok) {
        const result = await response.json();
        console.log(result);
        toast.success("user deleted successfully", {
          position: "top-right",
          theme: "dark",
        });
        dispatch(logOut());

        setLoading(false);
      }
    } catch (error) {
      toast.error("Error uploading post:", {
        position: "top-right",
        theme: "dark",
      });
      setLoading(false);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);

  const user = {
    username: currentuser?.user?.username,
    bio: "Just another Instagram user.",
    posts: posts?.length,
    postsData: posts,
    // Add more post objects as needed
  };
  return (
    <>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        message={message}
        title={title}
        fun={handleDelete}
        buttonMessage={"DELETE"}
      />
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
              <h2 className="text-2xl font-bold">{user.username}</h2>
              <div className="flex flex-row gap-2 items-center  ">
                <Link to={"/update-user"}>
                  <button className="mt-2 bg-blue-500 text-white rounded px-4 py-1 hover:underline">
                    Edit Profile
                  </button>
                </Link>
                <div className="relative">
                  <BsThreeDotsVertical
                    className="mt-2 cursor-pointer"
                    size={26}
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                  />
                  {toggle && (
                    <ul className="absolute top-7 left-2 w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600 cursor-pointer">
                        Profile
                      </li>
                      <li
                        className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600 cursor-pointer"
                        onClick={() => setShowModal(true)}
                      >
                        delete
                      </li>

                      <li className="w-full px-4 py-2 rounded-b-lg cursor-pointer">
                        Deactivate
                      </li>
                    </ul>
                  )}
                </div>
              </div>
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
            {user?.postsData?.map((post, index) => (
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

export default Profile;
