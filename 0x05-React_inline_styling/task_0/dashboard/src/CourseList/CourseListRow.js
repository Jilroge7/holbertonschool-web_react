import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const rowStyle = {
    backgroundColor: '#f5f5f5ab',
  };

  const headerStyle = {
    backgroundColor: '#deb5b545',
  };
  return (
    <>
      <tr>
        { isHeader && textSecondCell === null && (
          <th colSpan={2}>{textFirstCell}</th>
        )}
        { isHeader && textSecondCell !== null && (
          <>
            <th style={headerStyle}>{textFirstCell}</th>
            <th style={headerStyle}>{textSecondCell}</th>
          </>
        )}
        { !isHeader && (
          <>
            <td style={rowStyle}>{textFirstCell}</td>
            <td style={rowStyle}>{textSecondCell}</td>
          </>
        )}
      </tr>
    </>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};

export default CourseListRow;