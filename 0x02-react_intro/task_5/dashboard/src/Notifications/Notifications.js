import React from 'react';
import './Notifications.css';
import closeImg from '../assets/close-icon.png';
import { getLatestNotification } from "../utils/utils.js";

function Notifications() {
  return (
    <div className="Notifications">
      <p>
        Here is the list of notifications
      </p>
      <ul>
        <li data-default>New course available</li>
        <li data-urgent>New resume available</li>
        <li data-urgent dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
      <button style={{ position: "absolute", top: "1rem", right: "1rem" }}
        aria-label="Close"
        onClick={() => console.log('Close button has been clicked')}>
        <img alt="close-icon" src={closeImg} width="10px" height="10px"/>
      </button>
    </div>
  );
}

export default Notifications;