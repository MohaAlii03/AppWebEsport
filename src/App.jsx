import React from 'react';
import PagePresentation from './components/PagePresentation';
// import Login from './Login';
import UserLogin from "./components/Userlogin.jsx";
import "./assets/css/style.css";

function App() {
  return (
    <div className="App">
      {/* <PagePresentation /> */}
      <UserLogin />
    </div>
  );
}

export default App;
