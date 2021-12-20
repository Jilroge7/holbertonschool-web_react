import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow.js';
import CourseList from './CourseList';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('CourseList component', () => {
  it('renders the CourseListRow table elements without crashing', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textSecondCell='null' textFirstCell='test'/>);
    expect(wrapper.find(CourseListRow)).toHaveLength(0);
  });
  it('renders the CourseListRow table elements without crashing', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='test' textSecondCell='test'/>);
    expect(wrapper.html()).toContain("<tr class=\"tr_1o7ml33\"><th class=\"headerStyle_1nlbras\">test</th><th class=\"headerStyle_1nlbras\">test</th></tr>");  
  });
  it('renders the CourseListRow table elements without crashing', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell=''/>);
    expect(wrapper.find(CourseListRow)).toHaveLength(0);

  });
});