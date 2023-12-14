import React, { useState } from 'react';

function AnimatedForms() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSwitch = index => {
    setActiveIndex(index);
  };

  return (
    <section className="forms-section">
      <h1 className="section-title">E-SPORT</h1>
      <div className="forms"> 
        <div className={`form-wrapper ${activeIndex === 0 ? 'is-active' : ''}`}>
          <button type="button" className="switcher switcher-login" onClick={() => handleSwitch(0)}>
            Login
            <span className="underline"></span>
          </button>
          <form className={`form form-login ${activeIndex === 0 ? 'is-active' : ''}`}>
            <fieldset>
              <legend>Please, enter your email and password for login.</legend>
              <div className="input-block">
                <label htmlFor="login-email">E-mail</label>
                <input id="login-email" type="email" required />
              </div>
              <div className="input-block">
                <label htmlFor="login-password">Password</label>
                <input id="login-password" type="password" required />
              </div>
            </fieldset>
            <button type="submit" className="btn-login">Login</button>
          </form>
        </div>

        <div className={`form-wrapper ${activeIndex === 1 ? 'is-active' : ''}`}>
          <button type="button" className="switcher switcher-signup" onClick={() => handleSwitch(1)}>
            Sign Up
            <span className="underline"></span>
          </button>
          <form className={`form form-signup ${activeIndex === 1 ? 'is-active' : ''}`}>
            <fieldset>
              <legend>Please, enter your email, password and password confirmation for sign up.</legend>
              <div className="input-block">
                <label htmlFor="signup-email">E-mail</label>
                <input id="signup-email" type="email" required />
              </div>
              <div className="input-block">
                <label htmlFor="signup-password">Password</label>
                <input id="signup-password" type="password" required />
              </div>
              <div className="input-block">
                <label htmlFor="signup-password-confirm">Confirm password</label>
                <input id="signup-password-confirm" type="password" required />
              </div>
            </fieldset>
            <button type="submit" className="btn-signup">Continue</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AnimatedForms;
