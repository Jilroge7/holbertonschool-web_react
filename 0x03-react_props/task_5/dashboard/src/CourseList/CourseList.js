import React from 'react';
import './CourseList.css';
import CourseListRow from './CourseListRow.js';
import PropTypes from 'prop-types';

function CourseList({ listCourses }) {
  return (
    <table id='CourseList'>
      <thead className="table-title">
        <CourseListRow textFirstCell="Available Courses" isHeader={true} />
        <CourseListRow textFirstCell="CourseName" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        { listCourses.length <= 0
        ? <CourseListRow textFirstCell='No course available yet' />;
        : }
        <CourseListRow textFirstCell="ES6" textSecondCell="60" isHeader={false} />
        <CourseListRow textFirstCell="Webpack" textSecondCell="20" isHeader={false} />
        <CourseListRow textFirstCell="React" textSecondCell="40" isHeader={false} />
      </tbody>
    </table>
  );
};

CourseList.PropTypes = {
  listCourses: PropTypes.arrayOf(CourseShape);
};

CourseList.defaultProps = {
  listCourses: []
};

export default CourseList;