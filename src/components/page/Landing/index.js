import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import './Landing.css';
import Button from '../../shared/Button';

const Landing = () => {
  const [redirectPath, setRedirectPath] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage user authentication state

  useEffect(() => {
    // Check if a token exists in localStorage
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // If token exists, user is logged in
  }, []);

  const handleNavigation = (path) => {
    setRedirectPath(path);
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token
    setIsLoggedIn(false); // Update state
    // setRedirectPath('/#/'); // Redirect to home page
  };

  const handleMealPlanClick = () => {
    if (isLoggedIn) {
      setRedirectPath('/survey'); // Redirect to survey if logged in
    } else {
      alert('Please log in to access the meal plan!');
    }
  };

  if (redirectPath) {
    return <Redirect to={redirectPath} />;
  }

  return (
    <div className="Landing">
      <div className="Landing__header">
        {isLoggedIn ? (
          <button
            className="Landing__button Landing__button--logout"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <div>
            <button
              className="Landing__button Landing__button--login"
              onClick={() => handleNavigation('/login')}
            >
              Login
            </button>
            <button
              className="Landing__button Landing__button--signup"
              onClick={() => handleNavigation('/signup')}
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
      <div className="Landing__banner">
        <h1 className="Landing__banner__heading">Custom Meal Planning made easy</h1>
      </div>
      <div className="Landing__data">
        <div className="Landing__data__content">
          <h1>Does this sound like you?</h1>
          <ul>
            <li>Wasted a lot of time thinking about what I should make for dinner today</li>
            <li>Want to watch what I eat but don't know how?</li>
            <li>Not good at pre-planning meals</li>
            <li>Want to track my weight and calorie intake</li>
          </ul>
          <Button
            type="accent"
            link={false}
            onClick={handleMealPlanClick}
            className="Landing__data__button"
          >
            Let's find that meal plan
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
