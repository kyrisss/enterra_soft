import React from "react";
import { Outlet } from "react-router-dom";

export const MainLayout = () => (
  <div className="mainLayout">
    <div className="outlet wrapper">
      <Outlet />
    </div>
  </div>
);
