import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../features/auth/authSlice";
import { api } from "../config";
import ImageSkeleton from "../Skeleton/ImageSkeleton";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const currentuser = useSelector(selectCurrentUser);
  const { token } = currentuser;
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [like, setLike] = useState(post.post_likes.length);
  const [comment, setComment] = useState(post.comments);
  const [commentData, setCommentData] = useState();
  const [commentToggle, setCommentToggle] = useState(false);
  const handleComment = () => {
    setCommentToggle(!commentToggle);
  };
  const addComment = (e, post_id) => {
    const data = { comment: commentData };
    e.preventDefault();
    let time;
    try {
      clearTimeout(time);
      time = setTimeout(async () => {
        const res = await fetch(`${api.url}/comments/${post_id}`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify(data),
        });
        const result = await res.json();
      }, 100);
    } catch (error) {
      console.error("Error in comment", error);
    }

    let newcomment = [...comment, data];
    newcomment.reverse();
    setComment(newcomment);
  };

  const handleLike = (e) => {
    setToggle(!toggle);
    let time;
    e.preventDefault();
    try {
      clearTimeout(time);
      time = setTimeout(async () => {
        const res = await fetch(`${api.url}/likes/post/${post.id}`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Authorization: token,
          },
        });
        const data = await res.json();
      }, 1000);
    } catch (error) {
      console.error("Error in like", error);
    }
    if (!toggle) {
      setLike(like + 1);
    } else {
      setLike(like - 1);
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto bg-white   my-5 py-2">
        {/* Header */}
        <div className="flex items-center py-4 px-2">
          <div className="avatar placeholder ">
            <Link to={`/other-profile/${post?.user?.id}`}>
              <div className="bg-slate-500 border flex items-center justify-center text-white h-12 w-12 rounded-full ">
                <span className="text-3xl">
                  {post?.user?.username?.at(0).toUpperCase()}
                </span>
              </div>
            </Link>
          </div>
          <div className="ml-3">
            <Link to={`/other-profile/${post?.user?.id}`}>
              <p className="font-bold">{post?.user?.username}</p>
            </Link>
          </div>
        </div>

        {/* Post Image */}
        {loading && <ImageSkeleton />}
        <div className="bg-black">
          <img
            className="w-full object-cover"
            src={post?.image_url}
            onLoad={() => setLoading(false)}
            alt="Post content"
          />
        </div>

        {/* Interaction Icons */}
        <div className="flex justify-between items-center  py-2 px-2">
          <div className="flex space-x-3 justify-center items-center">
            {!toggle && (
              <CiHeart
                size={28}
                onClick={(e) => handleLike(e, post?.postd)}
                className="cursor-pointer"
              />
            )}
            {toggle && (
              <FcLike
                size={28}
                onClick={(e) => handleLike(e, post?.id)}
                className="cursor-pointer"
              />
            )}

            <FaRegComment
              size={26}
              onClick={handleComment}
              className="cursor-pointer"
            />
          </div>
        </div>

        {/* Likes and Caption */}
        <div className=" pb-2 px-2">
          <p className="font-semibold">{like} likes</p>
          <p>
            <span className="font-bold">{post?.user?.username}</span>{" "}
            {post?.description}
          </p>
          <p className="text-xs text-gray-500 uppercase tracking-wide">{}</p>
        </div>
        {commentToggle && (
          <section className="bg-white  py-4 lg:py-2 antialiased max-w-md">
            <div className="max-w-2xl mx-auto px-4">
              <div className="flex justify-between mb-2">
                <h2 className="text-lg lg:text-2xl font-bold text-gray-900 ">
                  Comments ({comment.length})
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
                    className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none  "
                    placeholder="Write a comment..."
                    required=""
                    value={commentData}
                    onChange={(e) => setCommentData(e.target.value)}
                  />
                </div>
                <button
                  disabled={!commentData}
                  type="submit"
                  onClick={(e) => addComment(e, post.id)}
                  className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-primary-800"
                >
                  Post comment
                </button>
              </form>
              {comment &&
                comment.map((comment, index) => (
                  <article
                    key={comment.id}
                    className="p-6 text-base bg-white rounded-lg "
                  >
                    <footer
                      key={index}
                      className="flex justify-between items-center mb-2"
                    >
                      <div className="flex items-center">
                        <div className="inline-flex items-center mr-3 text-sm text-gray-900  font-semibold">
                          <div className="bg-slate-500 border flex items-center justify-center text-white h-12 w-12 rounded-full mr-2 ">
                            <span className="text-xl">
                              {comment?.user?.username?.at(0).toUpperCase() ||
                                currentuser?.user?.username
                                  ?.at(0)
                                  .toUpperCase()}
                            </span>
                          </div>
                          {currentuser?.user?.username}
                        </div>
                        <p className="text-sm text-gray-600 ">
                          <time
                            pubdate=""
                            dateTime="2022-02-08"
                            title="February 8th, 2022"
                          ></time>
                        </p>
                      </div>
                      {/* <RiDeleteBack2Line
                      size={20}
                      className="cursor-pointer"
                      onClick={(e) => handleCommentDelete(e, comment.id)}
                    /> */}
                      {/* Dropdown menu */}
                    </footer>
                    <p className="text-gray-500 dark:text-gray-400 px-3">
                      {comment.comment}
                    </p>
                    <div className="flex items-center mt-4 gap-1">
                      <div>
                        {/* {!toggle && <CiHeart size={18} />}
                      {toggle && <FcLike size={18} />} */}
                      </div>
                      <button
                        type="button"
                        className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium "
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
                ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default Post;
