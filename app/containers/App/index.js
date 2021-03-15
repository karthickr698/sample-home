/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import {
  HOME,
  COURSE_DETAILS,
  ALL_COURSE,
  MAEG,
  INSTRUCTOR,
} from '../../constants/path';
import HomePage from '../HomePage/Loadable';
import Maeg from '../Maeg/Loadable';
import CourseDetails from '../CourseDetails/Loadable';
import AllCourse from '../AllCourse/Loadable';
import Instructor from '../Instructor/Loadable';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path={HOME} component={HomePage} />
        <Route exact path={MAEG} component={Maeg} />
        <Route exact path={COURSE_DETAILS} component={CourseDetails} />
        <Route exact path={ALL_COURSE} component={AllCourse} />
        <Route exact path={INSTRUCTOR} component={Instructor} />
        <Route path="" component={() => <div>Not Found</div>} />
      </Switch>
    </div>
  );
}
