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
import HomePage from '../HomePage/Loadable';
import Maeg from '../Maeg/Loadable';
import CourseDetails from '../CourseDetails/Loadable';
import AllCourse from '../AllCourse/Loadable';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/maeg" component={Maeg} />
        <Route exact path="/course-details" component={CourseDetails} />
        <Route exact path="/all-course" component={AllCourse} />
        <Route path="" component={() => <div>Not Found</div>} />
      </Switch>
    </div>
  );
}
