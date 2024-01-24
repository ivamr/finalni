// src/UserForm.js
import React, { useState } from "react";

const UserForm = ({ onSearch }) => {
  const [username, setUsername] = useState("");

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        GitHub Username:
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          required
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default UserForm;
