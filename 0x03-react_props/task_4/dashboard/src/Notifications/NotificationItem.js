import React from 'react';

function NotificationItem({ type, html, value }) {
  return (
    <>
      <li data-notification-type={type} dangerouslySetInnerHTML={html}>{value}</li>
    </>
  );
}

NotificationItem.propTypes =  {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string
  })
};

NoticationItem.defaultProps = {
  type: 'default'
};

export default NotificationItem;