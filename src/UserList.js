// src/UserList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

// UserList component
const UserList = () => {
  // State to store the list of users
  const [Users, setUsers] = useState([]);

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        // Update the state with the fetched user data
        setUsers(response.data);
      } catch (error) {
        // Handle any errors that occur during the data fetching process
        console.error("Error fetching user data:", error);
      }
    };
    // Call the fetchData function
    fetchData();
  }, []);

  // Render the UserList component
  return (
    <div className="container">
      {/* Display the title of the user list */}
      <h1 className="title">Users List</h1>
      {/* Render the list of users */}
      <ol className="userList">
        {/* Map through the users array and display each user's name */}
        {Users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ol>
    </div>
  );
};

// Export the UserList component as the default export
export default UserList;
