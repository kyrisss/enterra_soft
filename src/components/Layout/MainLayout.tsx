import React from "react";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="mainLayout">
      {/* <Header /> */}
      <div className="outlet wrapper">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};
