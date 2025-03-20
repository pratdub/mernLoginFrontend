import React, { useState } from "react";
import axios from "axios";

const CreatePostPage = () => {
  const [form, setForm] = useState({ title: "", content: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/posts", form, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
    window.location.href = "/";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <textarea placeholder="Content" onChange={(e) => setForm({ ...form, content: e.target.value })}></textarea>
      <button type="submit">Create Post</button>
    </form>
  );
};
export default CreatePostPage;