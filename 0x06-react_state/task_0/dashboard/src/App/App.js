import React from "react";
import Notifications from '../Notifications/Notifications.js';
import Login from '../Login/Login.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList.js';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom.js';
import BodySection from '../BodySection/BodySection.js';
import { getLatestNotification } from '../utils/utils.js';
import { StyleSheet, css } from 'aphrodite';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {displayDrawer: false};
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', event => {
      if (event.ctrlKey && event.key === 'h') {
        alert('Logging you out');
        this.props.logOut();
      }
    });
  }

  componentWillUnmount() {
    document.addEventListener('keydown', event => {
      if (event.ctrlKey && event.key === 'h') {
        alert('Logging you out');
        this.props.logOut();
      }
    });
  }

  handleDisplayDrawer() {
    this.setState({displayDrawer: true});
  }

  handleHideDrawer() {
    this.setState({displayDrawer: false});
  }

  render() {
    const {displayDrawer} = this.state;
    const {isLoggedIn} = this.props;
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
        <div className={css(styles.app, styles.under)}>
          <Header />
          <Notifications listNotifications={listNotifications}
            displayDrawer={displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
          />
        </div>
        <hr className={css(styles.hr)} />
        { isLoggedIn 
        ? <BodySectionWithMarginBottom title='Course List'>
            <CourseList listCourses={listCourses} /></BodySectionWithMarginBottom>
        : <BodySectionWithMarginBottom title='Log in to continue'>
            <Login /></BodySectionWithMarginBottom>
        }
        <BodySection title='News from the School'>
          <p>Now is the winter of our discontent
            Made glorious summer by this sun of York;
            And all the clouds that lour'd upon our house
            In the deep bosom of the ocean buried.
            Now are our brows bound with victorious wreaths;
            Our bruised arms hung up for monuments;
            Our stern alarums changed to merry meetings,
            Our dreadful marches to delightful measures.
            Grim-visaged war hath smooth'd his wrinkled front;
            And now, instead of mounting barded steeds
            To fright the souls of fearful adversaries.</p>
        </BodySection>
        <hr className={css(styles.hr)} />
        <Footer /> 
      </> 
    );
  }
}  

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}
};

const styles = StyleSheet.create({
  app: {
    display: 'flex',
    justifyContent: 'space-between'
  },

  hr: {
  borderTop: '3.5px solid #ec4242'
  },

  under: {
    '@media (max-width: 900px)': {
      display: 'grid',
      justifyContent: 'center'
    }
  },

  body: {
  
  },

  footer: {

  },
});

export default App;