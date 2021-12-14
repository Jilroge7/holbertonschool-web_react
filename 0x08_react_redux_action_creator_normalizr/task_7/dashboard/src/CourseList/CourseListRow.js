import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const [checkBox, setCheckBox] = useState(false)

  function handleCheck() {
    setCheckBox(!checkBox)
  }

  return (
    <>
      <tr className={css(styles.tr)}>
        { isHeader && textSecondCell === null && (
          <th className={css(styles.headerStyle)} colSpan={2}>{textFirstCell}</th>
        )}
        { isHeader && textSecondCell !== null && (
          <>
            <th className={css(styles.headerStyle)}>{textFirstCell}</th>
            <th className={css(styles.headerStyle)}>{textSecondCell}</th>
          </>
        )}
        { !isHeader && (
          <>
            <td className={
              checkBox 
                ? css(styles.rowStyle, styles.rowChecked)
                : css(styles.rowStyle)
            }
            >
              <input type='checkbox' onChange={handleCheck}/>{textFirstCell}</td>
            <td className={css(styles.rowStyle)}>{textSecondCell}</td>
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

const styles = StyleSheet.create({
  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
  tr: {
    borderBottom: '1px solid rgb(153, 153, 153)',
  },
  th: {
    borderBottom: '1px solid rgb(153, 153, 153)'
  },
  rowStyle: {
    backgroundColor: '#f5f5f5ab',
    width: '80%',
  },
  headerStyle: {
    backgroundColor: '#deb5b545',
    width: '80%'
  },
});

export default CourseListRow;