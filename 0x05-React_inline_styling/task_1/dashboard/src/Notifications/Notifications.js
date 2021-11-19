import { StyleSheet, css } from 'aphrodite';
import React from 'react';
import NotificationItem from './NotificationItem.js';
import closeImg from '../assets/close-icon.png';
import { getLatestNotification } from "../utils/utils.js";
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape.js';


const Notifications = ({ displayDrawer, listNotifications }) => {
  return (
    <>
      <div className='menuItem' style={css(styles.menuItem)}>
        <p>Your notifications</p>
      </div>
      { displayDrawer && (
        <div style={css(styles.notifications)}>
          <p>
            Here is the list of notifications
          </p>
          <ul>
            { listNotifications.length > 0
              ? listNotifications.map(({ type, value, html, id }) => (
                <NotificationItem type={type} style={css(styles.{type})} value={value} html={html} key={id} />
              ))
              : <NotificationItem value='No new notification for now' />
            }
          </ul>
          <button style={{ position: "absolute", top: "4.25rem", right: "1rem" }}
            aria-label="Close"
            onClick={() => console.log('Close button has been clicked')}>
            <img alt="close-icon" src={closeImg} width="10px" height="10px"/>
          </button>
        </div>
      )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

const styles = StyleSheet.create({
  notifications: {
    border: 'dashed #ec4242',
    padding: '0.40rem',
    float: 'right',
    width: '30%'
  },

  menuItem: {
    display: flex;
    justifyContent: 'flex-end',
    paddingRight: '0.5rem'
  },

  default: {
    color: 'blue'
  },

  urgent: {
    color: 'red'
  },
});

export default Notifications;