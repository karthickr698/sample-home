/**
 *
 * CourseCard
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import '../../containers/HomePage/HomePage.css';
import Rating from '@material-ui/lab/Rating';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const data = [
  {
    id: 1,
    name: 'Python for BioInformatics',
    starValue: 3,
  },
  {
    id: 1,
    name: 'Python for BioInformatics',
    starValue: 3.5,
  },
  {
    id: 1,
    name: 'Python for BioInformatics',
    starValue: 2.5,
  },
  {
    id: 1,
    name: 'Python for BioInformatics',
    starValue: 3,
  },
];

function CourseCard() {
  return (
    <div className="course-card-main">
      <Grid container spacing={1}>
        {data &&
          data.map((ele) => (
            <Grid item xs={12} sm={6} lg={4}>
              <div class="cardmain">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStN_DfwUJ7o3S32kOPA111HHQsZFgzTlJrFw&usqp=CAU" />
                <div class="cardtittle">Python for BioInformatics</div>
                <div class="card-author">By karthick</div>
                <div class="star-value">
                  <Rating
                    name="read-only"
                    value={ele.starValue}
                    readOnly
                    precision={0.5}
                  />
                  <div>({ele.starValue})</div>
                </div>
                <div class="number-of-joined">117+ students joined</div>
                <div class="card-buttom">
                  <Button>Join Free</Button>
                  <div class="more-details">
                    <Button>More details</Button>
                  </div>
                </div>
              </div>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

CourseCard.propTypes = {};

export default memo(CourseCard);
