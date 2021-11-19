import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow.js';
import CourseList from './CourseList.js';

describe('CourseList component', () => {
  it('renders the CourseListRow table elements without crashing', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='test'/>);
  //  { isHeader && textSecondCell === null && (
  //    expect(wrapper.html().toContain(`<th colSpan={2}>test</th>`))
  //  )};  
  });
  //it('renders the CourseListRow table elements with crashing', () => {
  //  const wrapper = shallow(<CourseListRow />);
  //  { isHeader && textSecondCell !== null && (
  //    expect(wrapper.html().toContain(`<>
  //          <th>{textFirstCell}</th>
  //          <th>{textSecondCell}</th></>`))
  //  )};  
  //});
  //it('renders the CourseListRow table elements with crashing', () => {
  //  const wrapper = shallow(<CourseListRow />);
  //  { !isHeader && (
  //    expect(wrapper.html().toContain(`<>
  //          <td>{textFirstCell}</td>
  //          <td>{textSecondCell}</td></>`))
  //  )};  
  //});
});