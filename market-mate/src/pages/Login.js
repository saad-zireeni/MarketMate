import React from 'react';
import './login.css'
import GoogleLogin from 'react-google-login';
import { useEffect, useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import { useNavigate } from 'react-router-dom';


export default function SignInUpForm() {
  const navigate = useNavigate('/')

  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpActive(true);
  };

  const handleSignInClick = () => {
    setIsSignUpActive(false);
  };

  const handleGoogleLoginSuccess = (response) => {
    console.log('Google login success:', response);
    navigate('/')
  };

  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  //  localStorage here 


  const [userData, setUserData] = useState([]);
  const handleSignUpSubmit = (event) => {

    event.preventDefault();
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    const newUser = { name, email, password };
    setUserData([...userData, newUser]);

    localStorage.setItem("userData", JSON.stringify([...userData, newUser]));

    navigate('/')


  }

  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);
  const handleSignInSubmit = (event) => {


    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    for (let i = 0; i < userData.length; i++) {
      if (userData[i].email === email && userData[i].password === password) {
        navigate('/')
        console.log("Logged in!");
        localStorage.clear();

        return;
      }
    }
    console.log("Invalid email or password");
    const erorr = "Invalid email or password"
  };

  return (
    <div className='login'>
      <h2><span className='market'>Market </span><span className='mate'>Mate</span></h2>
      <div className={`container ${isSignUpActive ? 'right-panel-active' : ''}`}>
        <div className="form-container sign-up-container">

          <form onSubmit={handleSignUpSubmit} >

            <h1>Create Account</h1>
            <div className="social-container">
              <GoogleLogin
                clientId="131293938195-2k0p6ft4jn16fqf2nknb7t8iihfsk1id.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={handleGoogleLoginSuccess}

              />
              <br /> <br />
              <FacebookLogin
                appId="189266677360423"

                onSuccess={handleGoogleLoginSuccess}
                callback={handleGoogleLoginSuccess}
                // icon="fa-facebook"
                cssClass="facebook-button"

              />

            </div>
            <span>or use your email for registration</span>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />

            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={handleSignInSubmit} >
            <h1>Sign in</h1>
            <div className="social-container">
              <GoogleLogin
                clientId="131293938195-2k0p6ft4jn16fqf2nknb7t8iihfsk1id.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={handleGoogleLoginSuccess}

              />
              <br /><br />
              <FacebookLogin
                appId="189266677360423"

                onSuccess={handleGoogleLoginSuccess}

                callback={handleGoogleLoginSuccess}
                // icon="fa-facebook"
                cssClass="facebook-button"
              />
            </div>
            <span>or use your account</span>
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" onClick={handleSignInClick}>
                Sign In
              </button>

            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
