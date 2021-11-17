import PropTypes from 'prop-types';
import React from 'react';

const CourseShape: PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.name.isRequired,
  credit: PropTypes.number.isRequired
});

export default CourseShape;