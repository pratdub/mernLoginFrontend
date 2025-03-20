import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./HomePage.css"; // Import the CSS file

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    axios.get("/api/posts").then((res) => setPosts(res.data));
  }, []);

  return (
    <div className="home-container">
      <h1>Welcome this is home</h1>
      <h1 className="home-title">All Posts</h1>
      <button className="create-post-button" onClick={() => navigate("/create")}>Create Post</button>
      {posts.map((post) => (
        <div key={post._id} className="post-card">
          <h2 className="post-title">{post.title}</h2>
          <p className="post-content">{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;