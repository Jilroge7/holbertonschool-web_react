import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow.js';

describe('CourseList component', () => {
  it('renders the CourseList with crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow)).toHaveLength(5);
  });
});