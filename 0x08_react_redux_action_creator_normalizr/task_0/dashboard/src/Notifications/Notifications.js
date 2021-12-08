import React, {Component} from "react";
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem.js';
import closeImg from '../assets/close-icon.png';
import { getLatestNotification } from "../utils/utils.js";
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape.js';


class Notifications extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer, markNotificationAsRead } = this.props;
    return (
      <div className={
        displayDrawer
          ? css(styles.container, styles.displayOn)
          : css(styles.container)}
      >
        <div className={css(styles.menuItem)}
          onClick={handleDisplayDrawer}
          >Your notifications
        </div>
        {
          displayDrawer && (
          <div className={css(styles.notifications, styles.noBox)}>
            <p className={css(styles.centerText)}>
              Here is the list of notifications
            </p>
            <ul>
              { listNotifications.length > 0
                ? listNotifications.map(({ markNotificationAsRead, type, value, html, id }) => (
                  <NotificationItem markNotificationAsRead={markNotificationAsRead} id={id} type={type} value={value} html={html} key={id} />
                ))
                : <NotificationItem value='No new notification for now' />
              }
            </ul>
            <button className={css(styles.button)}
              aria-label="Close"
              onClick={handleHideDrawer}>
              <img alt="close-icon" src={closeImg} width="10px" height="10px"/>
            </button>
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleHideDrawer: PropTypes.func,
  handleDisplayDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {}
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '1rem',
    marginRight: '1rem',
    gridRow: '1'
  },

  notifications: {
    border: 'dashed #ec4242',
    padding: '0.40rem',
    marginTop: '.3rem'
  },

  menuItem: {
    textAlign: 'right',
    marginRight: '0.5rem'
  },

  button: {
    position: "absolute", 
    top: "5.75rem",
    right: "2.2rem",
    '@media (max-width: 900px)': {
      top: '19.75rem',
      right: '4rem'
    }
  },

  displayOn: {
    '@media (max-width: 990px)': {
      gridRow: '2'
    }
  },

  noBox: {
    '@media (max-width: 900px)': {
      border: 'none',
    }
  },

  centerText: {
    '@media (max-width: 900px)': {
      fontSize: '20px'
    }
  },

  default: {
    color: 'blue'
  },

  urgent: {
    color: 'red'
  },
});



export default Notifications;