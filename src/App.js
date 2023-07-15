//import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Pages/Home";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Features from "./Components/Features";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import User from "./Pages/User";
import Adduser from "./Pages/Adduser";
import UserEdit from "./Pages/UserEdit";
import Start from "./Pages/Start";
import UserDetail from "./Pages/UserDetail";
import UserLogin from './Pages/UserLogin';
import Driver from './Pages/Driver';
import Adddriver from "./Pages/Adddriver";
import DriverEdit from './Pages/Driveredit';






import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';

const Layout = ()=>{
  return (
    <>
    <Navbar/>
    <Hero/>
    <Features/>
    <About/>
    <Footer/>
    </>
  );
 
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },

      
      {
        path:"/",
        element:<Home/>
      },
    ]
  },

  

  {
    path: "/login",
    element: <Login/>,
  },


  {
    path: "/register",
    element: <Register/>,
  },

  {
    path: "/dashboard",
    element: <Dashboard/>,
  },

  {
    path: "/user",
    element: <User/>,
  },

  
  {
    path: "/create",
    element: <Adduser/>,
  },

  {
    path: "/userEdit/:id",
    element: <UserEdit/>,
  },

  {
    path: "/start",
    element: <Start/>,
  },

  {
    path: "/userdetail/:id",
    element: <UserDetail/>,
  },
  {
    path: "/UserLogin",
    element: <UserLogin/>,
  },


  {
    path: "/driver",
    element: <Driver/>,
  },

  {
    path: "/adddriver",
    element: <Adddriver/>,
  },

  {
    path: "/driveredit/:id",
    element: <DriverEdit/>,
  },
  

  
  
  

  


  

  {
    path: "/home",
    element: <Home/>,
  },



 {
  path:"/about",
  element:<About/>
 }


  
]);

  function App(){
    return(
      <>
      
        <RouterProvider router={router}/>
        <BrowserRouter>
        
        </BrowserRouter>
       
      </>
    );
  }
 

  export default App;

{/*
function App(){
  return(

    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <About/>
      <Footer/>
      
    </div>

    
   

   
  )
};



export default App; */}

{/*function App(){
  return(
    <>
   
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/navbar"element={<Navbar/>}/>
        <Route path="/hero"element={<Hero/>}/>

      </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App; */}