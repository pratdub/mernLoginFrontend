import React, { useState } from "react";
import axios from "axios";
import "./CreatePostPage.css"; // Import the CSS file

const CreatePostPage = () => {
  const [form, setForm] = useState({ title: "", content: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/posts", form, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
    window.location.href = "/";
  };

  return (
    <div className="create-post-container">
      <form className="create-post-form" onSubmit={handleSubmit}>
        <h2>Create Post</h2>
        <input
          className="create-post-input"
          type="text"
          placeholder="Title"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <textarea
          className="create-post-textarea"
          placeholder="Content"
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        ></textarea>
        <button className="create-post-button" type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePostPage;
