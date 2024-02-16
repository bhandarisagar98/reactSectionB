import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          color: "white",
          background: "blue",
          padding: "10px",
        }}
      >
        <p>admin</p>
      </div>
      <div>
        <div
          style={{
            width: "200px",
            background: "grey",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/dashboard">
            Home
          </Link>
          <Link style={{ textDecoration: "none" }} to="/dashboard/create">
            Create
          </Link>
        </div>
        <div style={{ width: "100%", height: "100vh" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;



// https://github.com/bhandarisagar98/reactSectionB