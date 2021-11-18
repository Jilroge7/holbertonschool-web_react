import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem.js';
import closeImg from '../assets/close-icon.png';
import { getLatestNotification } from "../utils/utils.js";
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape.js';


const Notifications = ({ displayDrawer, listNotifications }) => {
  return (
    <>
      <div className='menuItem'>
        <p>Your notifications</p>
      </div>
      { displayDrawer && (
        <div className="Notifications">
          <p>
            Here is the list of notifications
          </p>
          <ul>
            { listNotifications.length <= 0
              ? <NotificationItem value='No new notification for now' />
              :
              <NotificationItem type={type} value={value} />
              <NotificationItem type={type} value={value} />
              <NotificationItem type={type} html={html} />
            }
          </ul>
          <button style={{ position: "absolute", top: "1rem", right: "1rem" }}
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


export default Notifications;