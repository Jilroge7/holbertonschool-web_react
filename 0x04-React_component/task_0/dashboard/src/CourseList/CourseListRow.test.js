import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow.js';
import CourseList from './CourseList';

describe('CourseList component', () => {
  it('renders the CourseListRow table elements without crashing', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textSecondCell='null' textFirstCell='test'/>);
    expect(wrapper.find(CourseListRow)).toHaveLength(0);
  });
  it('renders the CourseListRow table elements with crashing', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='test' textSecondCell='test'/>);
    expect(wrapper.html()).toContain('<th>test</th>');  
  });
  it('renders the CourseListRow table elements with crashing', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell=''/>);
    expect(wrapper.find(CourseListRow)).toHaveLength(0);

  });
});