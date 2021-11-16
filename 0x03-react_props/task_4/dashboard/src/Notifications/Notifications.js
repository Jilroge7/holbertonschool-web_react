import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem.js';
import closeImg from '../assets/close-icon.png';
import { getLatestNotification } from "../utils/utils.js";
import PropTypes from 'prop-types';


function Notifications({ displayDrawer }) {
  return (
    { displayDrawer &&
    <div className='menuItem'>
      <p>Your notifications</p>
    </div>
    }
    <div className="Notifications">
      <p>
        Here is the list of notifications
      </p>
      <ul>
        <NotificationItem type="default" value='New courses available' />
        <NotificationItem type="urgent" value='New resume available' />
        <NotificationItem type="urgent" html={{__html: getLatestNotification()}} />
      </ul>
      <button style={{ position: "absolute", top: "1rem", right: "1rem" }}
        aria-label="Close"
        onClick={() => console.log('Close button has been clicked')}>
        <img alt="close-icon" src={closeImg} width="10px" height="10px"/>
      </button>
    </div>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.boolean
};

Notifications.defaultProps = {
  displayDrawer: false
};


export default Notifications;