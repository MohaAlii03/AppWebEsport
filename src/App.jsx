import React from 'react';
import PagePresentation from './components/PagePresentation';
// import Login from './Login';
import UserLogin from "./components/Userlogin.jsx";
import "./assets/css/style.css";
import { RouterProvider } from 'react-router-dom';
import router from './services/router';


const App= () => {


  return <RouterProvider router={ router } />;

};

export default App;
