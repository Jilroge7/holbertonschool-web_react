import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function NotificationItem({ type, html, value }) {
  return (
    <li data-notification-type={type} style={css(styles.{type})} dangerouslySetInnerHTML={html}>{value}</li>
  );
}

NotificationItem.propTypes =  {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string
  })
};

NotificationItem.defaultProps = {
  type: 'default'
};

const styles = StyleSheet.create({
  default: {
    color: 'blue'
  },

  urgent: {
    color: 'red'
  }
})

export default NotificationItem;