import React, { useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [error, setError] = useState(false);

 

  let validEmail = document.getElementById("valid_email");
  let msg = "enter a valid email address";


  const handleSubmit = (e) => {
    e.preventDefault();
    //  if input is empty
    if (!email) {
      setErrorMessage("Email address is required");
      setError(true);  
//  email regex for email validity
    }else if (errorMessage && /\S+@\S+\.\S+/.test(value)) {
      validEmail.textContent = msg;
      setError(true)
//  to clear any error message once user starts typing
    } else {
      // Form submission logic here
      setErrorMessage(""); // Clears error message if email is valid
      console.log("Form submitted successfully with email:", email);
    }
  };


  const handleChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage(""); // Clear error message when user starts typing
    setError(false)
  };

  return (
    <section className="h-wrapper">
      {/* left hand side hero section */}
      <div className="paddings flexCenter h-container">
        <div className="flexColStart hero-left">
          <img src="./logo.svg" alt="logo" />
          <div className="primaryText hero-title">
            <h1>
              <span>WE'RE</span> <br />
              COMING <br /> SOON
            </h1>
          </div>

          <div className="hero-desc secondaryText">
            <span>Hello fellow shoppers! We're currently building our new</span>
            <span>
              fashion store. Add your email below to stay up-to date with
            </span>
            <span>announcements and our launch deals.</span>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="email__container">
              <input
                type="email"
                id="email-input"
                placeholder="Email Address"
                value={email}
                onChange={handleChange}
                className = {error ? 'error': 'no-error'}
              />
              <span id="valid_email" className="error"></span>

              {errorMessage && (
                <img
                  className="icon-error"
                  src="./icon-error.svg"
                  alt="icon-error"
                />
              )}
              <button id="email-button" type="submit">
                <img src="./icon-arrow.svg" alt="icon-arrow" />
              </button>
            </div>
            {errorMessage && <p className="error-info">{errorMessage}</p>}
          </form>
        </div>

        {/* right hand side image */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-desktop.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
