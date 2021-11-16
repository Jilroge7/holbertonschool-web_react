import React from "react";
import Notifications from '../Notifications/Notifications.js';
import Login from '../Login/Login.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList.js';


function App({ isLoggedIn }) {
  return (
    <>
      <Notifications />
      <Header />
      { isLoggedIn ? <CourseList /> : <Login /> }
      <Footer />
    </> 
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;