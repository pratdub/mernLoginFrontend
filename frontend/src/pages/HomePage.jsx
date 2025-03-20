import React, { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    axios.get("/api/posts").then((res) => setPosts(res.data));
  }, []);

  return (
    <div>
      <h1>All Posts</h1>
      {posts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};
export default HomePage;