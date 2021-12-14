import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow.js';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape.js';

function CourseList({ listCourses }) {
  return (
    <table id='CourseList' className={css(styles.courseList)}>
      <thead className="table-title">
        <CourseListRow textFirstCell="Available Courses" isHeader={true} />
        <CourseListRow textFirstCell="Course Name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        { listCourses.length > 0
          ? listCourses.map(({ id, name, credit }) => (
            <CourseListRow textFirstCell={name} textSecondCell={credit} key={id} />
          ))
          : <CourseListRow textFirstCell='No course available yet' className={css(styles.courseListRow)}/>
        }
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
};

CourseList.defaultProps = {
  listCourses: []
};

const styles = StyleSheet.create({
  courseList: {
    border: '1px solid rgb(153, 153, 153)',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  courseListRow: {
    border: '1px solid rgb(153, 153, 153)',
    width: '80%'
  }
});

export default CourseList;