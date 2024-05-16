import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();
  const handleClick = (e) => navigate("/");
  return (
    <div>
      <button onClick={handleClick}>Logout</button>
      <Outlet/>
    </div>
  );
};

export default DashboardPage;
