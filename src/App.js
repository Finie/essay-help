import React,{useState} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { IoLogoWhatsapp } from 'react-icons/io'

import './App.css';
import Navbar from './components/components/Navbar/navbar';
import Backdrop from './components/components/backdrop/Backdrop'
import Sidebar from './components/components/sidebar/Sidebar'
import Blogs from './components/pages/blog/blog'
import Home from './components/pages/home/home'
import Howitworks from './components/pages/howitworks/howitworks'
import Orders from './components/pages/orders/order'
import Pricing from './components/pages/pricing/pricing'
import Reviews from './components/pages/reviews/reviews'
import Chatbot from './components/components/chatbot/ChatBox'
import Button from './components/components/whatsapp/whatsappbutton'
import Footer from './components/components/footer/footer';




function App() {

  const [isSideDrawerOpen,setIsSideDrawerOpen] = useState(false);

  const drawerToggleButtonHandler = () =>{
    setIsSideDrawerOpen((!isSideDrawerOpen))
  }

  
  const backdropClickHandler = () =>{
    setIsSideDrawerOpen(false)
  }


  let backDrop = null;

  if(isSideDrawerOpen){
    backDrop = <Backdrop backdropClick={backdropClickHandler} />
  }


  return (
    <div className="App">

      <Router>
          <Navbar clickHandler={drawerToggleButtonHandler}/>
          <Sidebar backdropClick={backdropClickHandler} show={isSideDrawerOpen}/>
          {backDrop}
          <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/howitworks' component={Howitworks}/>
          <Route exact path='/reviews' component={Reviews}/>
          <Route exact path='/pricing' component={Pricing}/>
          <Route exact path='/blogs' component={Blogs}/>
          <Route exact path='/orders' component={Orders}/>
        </Switch>
        <Chatbot/>
        <div className="whatsapp-contact">
          <Button><a target="_blank" rel="noreferrer" href="https://wa.me/254715438186" style={{textDecoration:'none', color:'white'}}>  <IoLogoWhatsapp  style={{marginBottom:-3, marginRight:4}}/> whatsApp</a></Button>
        </div>
        <Footer/>
      </Router>
     
    </div>
  );
}

export default App;
