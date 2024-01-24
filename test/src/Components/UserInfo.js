// src/UserInfo.js
import React from "react";

const UserInfo = ({ user }) => {
  return (
    <div>
      <h2>User Details</h2>
      <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
      <p>Name: {user.name}</p>
      <p>Location: {user.location}</p>
      <p>Bio: {user.bio}</p>

      <h2>Repositories</h2>
      <ul>
        {user.repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserInfo;
