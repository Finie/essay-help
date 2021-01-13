import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";

import "./App.css";
import Navbar from "./components/components/Navbar/navbar";
import Backdrop from "./components/components/backdrop/Backdrop";
import Sidebar from "./components/components/sidebar/Sidebar";
import Register from "./components/pages/main/auth/register";
import Forgot from "./components/pages/main/auth/forgotpass";
import Home from "./components/pages/main/home/home";
import Howitworks from "./components/pages/main/howitworks/howitworks";
import Pricing from "./components/pages/main/pricing/pricing";
import Reviews from "./components/pages/main/reviews/reviews";
import Chatbot from "./components/components/chatbot/ChatBox";
import Button from "./components/components/whatsapp/whatsappbutton";
import Footer from "./components/components/footer/footer";
import Login from "./components/pages/main/auth/login";
import Dashboard from "./components/pages/dashboard/dashboard/dashboard";
import Orders from './components/pages/dashboard/orders/orders'
import UserManagement from './components/pages/dashboard/manage-user/ManageUsers'
import Settings from './components/pages/dashboard/settings/settings'
import DashboardNav from "./components/components/dashboard/dashboard-menu/MenuBar";
import DashboardSide from "./components/components/dashboard/dashboard-sidebar/DashboardSide";

function App() {
  const [isUserLoggedin, setIsUserLoggedin] = useState(true);
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(true);

  const dashboardToggle = () => {
    setIsDashboardOpen(!isDashboardOpen)
  };

  const drawerToggleButtonHandler = () => {
    setIsSideDrawerOpen(!isSideDrawerOpen);
  };

  const backdropClickHandler = () => {
    setIsSideDrawerOpen(false);
  };

  let backDrop = null;

  if (isSideDrawerOpen) {
    backDrop = <Backdrop backdropClick={backdropClickHandler} />;
  }

  return (
    <div className="App">
      {isUserLoggedin ? (
        <Router>
          <DashboardNav
            clickHandler={dashboardToggle} />
          <DashboardSide 
            backdropClick={backdropClickHandler}
            hide={isDashboardOpen} />
          {backDrop}
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/orders" component={Orders} />
            <Route exact path="/user-management" component={UserManagement} />
            <Route exact path="/settings" component={Settings} />
          </Switch>
        </Router>
      ) : (
        <Router>
          <Navbar
            backdropClick={backdropClickHandler}
            clickHandler={drawerToggleButtonHandler}
          />
          <Sidebar
            backdropClick={backdropClickHandler}
            show={isSideDrawerOpen}
          />
          {backDrop}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/howitworks" component={Howitworks} />
            <Route exact path="/reviews" component={Reviews} />
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/forgot" component={Forgot} />
          </Switch>
          <Chatbot />
          <div className="whatsapp-contact">
            <Button url={"https://wa.me/254727213245"}>
              <span>
                {" "}
                <IoLogoWhatsapp
                  style={{ marginBottom: -3, marginRight: 4 }}
                />{" "}
                whatsApp
              </span>
            </Button>
          </div>
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;
