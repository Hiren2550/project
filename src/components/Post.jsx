import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";

const Post = ({ username, postImage, likes, caption, time, comments }) => {
  const [toggle, setToggle] = useState(false);
  const [like, setLike] = useState(likes);
  const [comment, setComment] = useState(comments);
  const [commentdata, setCommentData] = useState();
  const [commentToggle, setCommentToggle] = useState(false);
  const handleComment = () => {
    setCommentToggle(!commentToggle);
  };
  const handleLike = () => {
    setToggle(!toggle);
    if (!toggle) {
      setLike(like + 1);
    } else {
      setLike(like - 1);
    }
  };
  return (
    <div className="max-w-md mx-auto bg-white  rounded-lg shadow-sm my-5">
      {/* Header */}
      <div className="flex items-center p-4">
        <div className="avatar placeholder ">
          <div className="bg-neutral border flex items-center justify-center text-neutral-content h-12 w-12 rounded-full ">
            <span className="text-3xl">{username.at(0).toUpperCase()}</span>
          </div>
        </div>
        <div className="ml-3">
          <p className="font-bold">{username}</p>
        </div>
      </div>

      {/* Post Image */}
      <div className="bg-black">
        <img
          className="w-full object-cover"
          src={postImage}
          alt="Post content"
        />
      </div>

      {/* Interaction Icons */}
      <div className="flex justify-between items-center px-2 py-2">
        <div className="flex space-x-3">
          {!toggle && <CiHeart size={28} onClick={handleLike} />}
          {toggle && <FcLike size={28} onClick={handleLike} />}

          <FaRegComment size={26} onClick={handleComment} />
        </div>
      </div>

      {/* Likes and Caption */}
      <div className="px-4 pb-2">
        <p className="font-semibold">{like} likes</p>
        <p>
          <span className="font-bold">{username}</span> {caption}
        </p>
        <p className="text-xs text-gray-500 uppercase tracking-wide">{time}</p>
      </div>
      {commentToggle && (
        <section className="bg-white  py-4 lg:py-2 antialiased max-w-md">
          <div className="max-w-2xl mx-auto px-4">
            <div className="flex justify-between mb-2">
              <h2 className="text-lg lg:text-2xl font-bold text-gray-900 ">
                Comments ({comment?.length})
              </h2>
            </div>
            <form className="mb-6">
              <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 ">
                <label htmlFor="comment" className="sr-only">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  rows={6}
                  value={commentdata}
                  onChange={(e) => setCommentData(e.target.value)}
                  className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none  "
                  placeholder="Write a comment..."
                  required=""
                  defaultValue={""}
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-primary-800"
              >
                Post comment
              </button>
            </form>
            <article className="p-6 text-base bg-white rounded-lg ">
              <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm text-gray-900  font-semibold">
                    <img
                      className="mr-2 w-6 h-6 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                      alt="Michael Gough"
                    />
                    Michael Gough
                  </p>
                  <p className="text-sm text-gray-600 ">
                    <time
                      pubdate=""
                      dateTime="2022-02-08"
                      title="February 8th, 2022"
                    >
                      Feb. 8, 2022
                    </time>
                  </p>
                </div>
                <button
                  id="dropdownComment1Button"
                  data-dropdown-toggle="dropdownComment1"
                  className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500  bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 "
                  type="button"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 3"
                  >
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                  </svg>
                  <span className="sr-only">Comment settings</span>
                </button>
                {/* Dropdown menu */}
                <div
                  id="dropdownComment1"
                  className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownMenuIconHorizontalButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Edit
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Remove
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Report
                      </a>
                    </li>
                  </ul>
                </div>
              </footer>
              <p className="text-gray-500 dark:text-gray-400">
                Very straight-to-point article. Really worth time reading.
              </p>
              <div className="flex items-center mt-4 space-x-4">
                <button
                  type="button"
                  className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                >
                  <svg
                    className="mr-1.5 w-3.5 h-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                    />
                  </svg>
                  Reply
                </button>
              </div>
            </article>
          </div>
        </section>
      )}
    </div>
  );
};

export default Post;
