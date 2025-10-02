import React from "react";
import PostCard from "./PostCard";

const mockPosts = [
  { id: 1, title: "Welcome to Science Club!", body: "Our first meetup is next Monday.", author: "user123" },
  { id: 2, title: "NSS Blood Donation Camp", body: "Join us at the auditorium.", author: "user456" },
];

export default function Feed() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Feed</h2>
      {mockPosts.map(p => <PostCard key={p.id} post={p} />)}
    </div>
  );
}

