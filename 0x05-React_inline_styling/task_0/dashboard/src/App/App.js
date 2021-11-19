import React, {Component} from "react";
import Notifications from '../Notifications/Notifications.js';
import Login from '../Login/Login.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList.js';
import { getLatestNotification } from '../utils/utils.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {isLoggedIn} = this.props
    const listCourses = [
      {id: 1, name: 'ES6', credit: 60},
      {id: 2, name: 'Webpack', credit: 20},
      {id: 3, name: 'React', credit: 40}
    ];

    const listNotifications = [
      {id: 1, type: 'default', value: 'New courses available'},
      {id: 2, type: 'urgent', value: 'New resume available'},
      {id: 3, type: 'urgent', html: {__html: getLatestNotification()}}
    ];
    return (
      <>
        <Notifications listNotifications={listNotifications} />
        <div className='App'>
          <Header />
          { this.props.isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login /> }
          <Footer />
        </div>
      </> 
    );
  }
}  

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;