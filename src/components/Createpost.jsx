import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import { api } from "../config";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();
  const currentuser = useSelector(selectCurrentUser);
  const [loading, setLoading] = useState(false);
  const { token } = currentuser;
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Store the file directly
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    // Create a FormData object to send data in multipart/form-data format
    const formData = new FormData();
    formData.append("description", content);
    if (image) {
      formData.append("image", image); // Append image file
    }

    try {
      const response = await fetch(`${api.url}/posts`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: token,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      toast.success("Post created successfully", {
        position: "top-right",
        theme: "dark",
      });

      setLoading(false);
      // Reset the form or handle success as needed
      setContent("");
      setImage(null);
      navigate("/profile");
    } catch (error) {
      // console.error("Error uploading post:", error);
      toast.error("Error uploading post:", {
        position: "top-right",
        theme: "dark",
      });
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full h-24 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="my-4 p-2 border rounded-md"
          required
        />

        {image && (
          <div className="mb-4">
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              className="w-full h-40 object-cover rounded-md"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          {loading ? "loading" : "Post"}
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
