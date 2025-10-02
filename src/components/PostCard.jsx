import React from "react";

export default function PostCard({ post }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0", borderRadius: "8px" }}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <small>Posted by {post.author}</small>
    </div>
  );
}

