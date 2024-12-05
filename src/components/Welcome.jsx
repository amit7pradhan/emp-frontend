import { useLocation } from "react-router-dom";
import React from "react";

const Welcome = () => {
  const location = useLocation();
  const { user } = location.state || { user: { name: " " } };

  return (
    <div>
      <h1>Welcome, {user.name} ! </h1>
      <p>
        Employment Agency connects job seekers with employers. Explore
        opportunities and take your career to the next level!
      </p>
    </div>
  );
};

export default Welcome;
