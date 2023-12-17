import React from 'react';
import PagePresentation from './components/PagePresentation';
// import Login from './Login';
import UserLogin from "./components/Userlogin.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Userlogin';
import HomePage from './pages/HomePage';
import "./assets/css/style.css";
import { RouterProvider } from 'react-router-dom';
import router from './services/router';


const App= () => {


   return<RouterProvider router={ router } />  // <Router>
  //      <Routes>
        
  //       <Route path="/" element={<LoginPage />} />
  //       <Route path="/home" element={<HomePage />} />
  //     </Routes>
  //  </Router>;

};

export default App;
