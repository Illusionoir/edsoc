import React from "react";

const communities = [
  { name: "Science Club", desc: "For all science enthusiasts" },
  { name: "NCC", desc: "National Cadet Corps activities" },
  { name: "Boxing Club", desc: "College boxing community" },
];

export default function CommunityList() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Communities</h2>
      <ul>
        {communities.map((c, i) => (
          <li key={i}>
            <h3>{c.name}</h3>
            <p>{c.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

