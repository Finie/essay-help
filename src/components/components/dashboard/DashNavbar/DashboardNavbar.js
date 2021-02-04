import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DashboardNavbar.css";
import MenuButton from "../../sidebar/Dashboardbut";

function DashboardNavbar({ clickHandler }) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <header className="navbar-container">
      <nav className="navbar">
        <div className="button-toggle-dash">
          <MenuButton click={clickHandler} />
        </div>
      </nav>
    </header>
  );
}

export default DashboardNavbar;
