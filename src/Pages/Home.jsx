import React from "react";
import { useMediaQuery } from 'react-responsive'
import "./Home.css";
import "./Home.css";
import Logo from "../Images/logo.jpg";
import locationicon from "../Images/locationicon.jpg";
import timeicon from "../Images/timeicon.jpg";
import emergencyicon from "../Images/emergencyicon.jpg";
import f1 from "../Images/f1.jpg";
import {Link} from 'react-router-dom';






const Home = () => {
    return (
          
    
        <>
        <div className="hero">
            <div className="navbar">
                <img src={Logo} alt='' className="logo"/>
                <Link to ="/login"><button type="button" className="btn  btn-outline-primary">Login</button></Link>
            </div>
            <div className="content">
            
                <small><h1 className="w-full">A Shadow of you in your absence</h1></small>
                <h5 className="h5">For your loved ones</h5>
            </div>
           
        </div>
        <div className="feat">
            <h1>Features</h1>
        </div>
           
           <div className="maincontainer1">
            <div className="thecard1"  >
           

                <div className="thefront1"><h3>#1.Live Location</h3></div>
             
                <div className="theback1"><p>Live location of the bus system through drivers phone location</p><img src={locationicon} alt='' className="locationicon"/></div>
               
            </div>
           </div>

           <div className="maincontainer2">
            <div className="thecard2">

                <div className="thefront2"><h3>#2.Time Saving</h3></div>
                <div className="theback2"><p>Gives timely update of the bus with estimates</p><img src={timeicon} alt='' className="timeicon"/></div>
            </div>
           </div>

           <div className="maincontainer3">
            <div className="thecard3">

                <div className="thefront3"><h3>#3.Emergency Alert</h3></div>
                <div className="theback3"><p>Anybody at home can track you and there is also an SOS alert system for you</p><img src={emergencyicon} alt='' className="emergencyicon"/></div>
            </div>
           </div>

           <div className="abt">
            <h1>About</h1>
            <img src={f1} alt='' className="f1"/>
            

           </div>
           <div className="below">
                <h4>This is a college major project for me. This project mainly aims<br/>
                at developing a system that can track institutional vehicles and<br/>
                saves time for passenegers.This project is developed at Geekwo<br/>-rkx Technologies </h4>
                
            </div>

    </> 
        
    ) 
}

export default Home;
