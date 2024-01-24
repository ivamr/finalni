// src/App.js
import React, { useState } from "react";
import axios from "axios";
import UserForm from "./Components/UserForm";
import UserInfo from "./Components/UserInfo";

const App = () => {
  const [user, setUser] = useState(null);

  const searchUser = async (username) => {
    try {
      const userResponse = await axios.get(
        `https://api.github.com/users/${username}`,
        {
          headers: {
            "User-Agent": "Your-App-Name", // Add a custom user-agent header
          },
        }
      );

      const userDetails = userResponse.data;

      const reposResponse = await axios.get(
        `https://api.github.com/users/${username}/repos`,
        {
          headers: {
            "User-Agent": "Your-App-Name", // Add a custom user-agent header
          },
        }
      );

      const userRepos = reposResponse.data;

      const updatedUser = {
        avatar_url: userDetails.avatar_url,
        name: userDetails.name,
        location: userDetails.location,
        bio: userDetails.bio,
        repos: userRepos.map((repo) => ({ id: repo.id, name: repo.name })),
      };

      setUser(updatedUser);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div>
      <h1>Github User Details</h1>
      <UserForm onSearch={searchUser} />
      {user && <UserInfo user={user} />}
    </div>
  );
};

export default App;
