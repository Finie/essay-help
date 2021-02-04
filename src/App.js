import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";

import "./App.css";
import Navbar from "./components/components/Navbar/navbar";
import Backdrop from "./components/components/backdrop/Backdrop";
import Sidebar from "./components/components/sidebar/Sidebar";
import Home from "./components/pages/main/home/home";
import Howitworks from "./components/pages/main/howitworks/howitworks";
import Pricing from "./components/pages/main/pricing/pricing";
import Reviews from "./components/pages/main/reviews/reviews";
import Button from "./components/components/whatsapp/whatsappbutton";
import Dashboard from "./components/pages/dashboard/dashboard/dashboard";
import Orders from "./components/pages/dashboard/orders/orders";
import MyOrder from "./components/pages/dashboard/myorder/Myorder"
import UserManagement from "./components/pages/dashboard/manage-user/ManageUsers";
import Settings from "./components/pages/dashboard/settings/settings";
import DashboardSide from "./components/components/dashboard/DashNavbar/DashboardSide";
import Footers from "./components/components/footer/Footers";
import DashboardNavbar from "./components/components/dashboard/DashNavbar/DashboardNavbar";
import Test from "./components/pages/dashboard/test/Test";

function App() {
  const [isUserLoggedin, setIsUserLoggedin] = useState(false);
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(true);

  const dashboardToggle = () => {
    setIsDashboardOpen(!isDashboardOpen);
    console.log("toggle the sidebar status: "+isDashboardOpen)
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
      <div className="app-container">
        <div className="container-one">
          
          {isUserLoggedin ? (
            <Router>
              <DashboardNavbar clickHandler={dashboardToggle} />

              <DashboardSide show={isDashboardOpen} />
              {backDrop}
              <Switch>
                
                <Route exact path="/:isDashboardOpen" render={(props)=>(<Test {...props} dashboardIsShowing={isDashboardOpen} />)} />                            
                <Route exact path="/orders" component={Orders} />
                <Route exact path="/my-orders" component={MyOrder} />
                <Route
                  exact
                  path="/user-management"
                  component={UserManagement}
                />
                <Route exact path="/settings" component={Settings} />
              </Switch>
            </Router>
          ) : (
            <Router style={{ width: "100%" }}>
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
                {/* <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/forgot" component={Forgot} /> */}
              </Switch>

              {/* <Chatbot /> */}
                    <Footers />

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

            </Router>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
