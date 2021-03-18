/**
 *
 * Instructor
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectInstructor from './selectors';
import reducer from './reducer';
import saga from './saga';
import Grid from '@material-ui/core/Grid';

import Header from '../../components/Header/Loadable';
import Footer from '../../components/Footer/Loadable';
import CourseCard from '../../components/CourseCard/Loadable';
import Rating from '@material-ui/lab/Rating';
import './instructor.css';
import book from '../images/book.jpg';
import student from '../images/students.jpg';
import tag from '../images/tag.jpg';
import '../CourseDetails/CourseDetails.css';

const reviews = [
  {
    text:
      'This course teaches computer programming to those with little to no previous experience. Here you will learn Matrices and Operators, Function, programmers Toolbox, loops, Data Type, and plotting',
    date: '11/03/2021',
    name: 'karthick',
    rating: 2.5,
  },
  {
    text:
      'This course teaches computer programming to those with little to no previous experience. Here you will learn Matrices and Operators, Function, programmers Toolbox, loops, Data Type, and plotting',
    date: '11/03/2021',
    name: 'karthick',
    rating: 2.5,
  },
  {
    text:
      'This course teaches computer programming to those with little to no previous experience. Here you will learn Matrices and Operators, Function, programmers Toolbox, loops, Data Type, and plotting',
    date: '11/03/2021',
    name: 'karthick',
    rating: 2.5,
  },
  {
    text:
      'This course teaches computer programming to those with little to no previous experience. Here you will learn Matrices and Operators, Function, programmers Toolbox, loops, Data Type, and plotting',
    date: '11/03/2021',
    name: 'karthick',
    rating: 2.5,
  },
  {
    text:
      'This course teaches computer programming to those with little to no previous experience. Here you will learn Matrices and Operators, Function, programmers Toolbox, loops, Data Type, and plotting',
    date: '11/03/2021',
    name: 'karthick',
    rating: 2.5,
  },
  {
    text:
      'This course teaches computer programming to those with little to no previous experience. Here you will learn Matrices and Operators, Function, programmers Toolbox, loops, Data Type, and plotting',
    date: '11/03/2021',
    name: 'karthick',
    rating: 2.5,
  },
  {
    text:
      'This course teaches computer programming to those with little to no previous experience. Here you will learn Matrices and Operators, Function, programmers Toolbox, loops, Data Type, and plotting',
    date: '11/03/2021',
    name: 'karthick',
    rating: 2.5,
  },
  {
    text:
      'This course teaches computer programming to those with little to no previous experience. Here you will learn Matrices and Operators, Function, programmers Toolbox, loops, Data Type, and plotting',
    date: '11/03/2021',
    name: 'karthick',
    rating: 2.5,
  },
  {
    text:
      'This course teaches computer programming to those with little to no previous experience. Here you will learn Matrices and Operators, Function, programmers Toolbox, loops, Data Type, and plotting',
    date: '11/03/2021',
    name: 'karthick',
    rating: 2.5,
  },
  {
    text:
      'This course teaches computer programming to those with little to no previous experience. Here you will learn Matrices and Operators, Function, programmers Toolbox, loops, Data Type, and plotting',
    date: '11/03/2021',
    name: 'karthick',
    rating: 2.5,
  },
];

export function Instructor() {
  useInjectReducer({ key: 'instructor', reducer });
  useInjectSaga({ key: 'instructor', saga });

  return (
    <div>
      <Helmet>
        <title>Instructor</title>
        <meta name="description" content="Description of Instructor" />
      </Helmet>
      <div>
        <Header />
        <Grid
          container
          spacing={0}
          className='instructor-cont'
          style={{ marginTop: '2rem', marginBottom: '5rem' }}
        >
          <Grid item xs={12} sm={4}>
            <div className="instructor-image">
              <img
                src="https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228__340.jpg"
                alt="instructot"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={5}>
            <div className="instructor-name-main-div">
              <div className="instructor-name">
                Anjali Sikka <span>(4.5/5)</span>
              </div>
              <div class="instructor-name-under1">
                Python master, Readmycourse
              </div>
              <div className="instructor-class-tittle4">
                <span style={{ color: '#9900aa' }}>specialisation-</span>{' '}
                Python, pythonfor BioInformatics
              </div>
              <div className="instructor-name-under1">
                <img src={student} alt="student" />
                100 Students
              </div>
              <div className="instructor-name-under1">
                <img src={book} alt="student" />
                10 Courses
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={3}>
            <div className="instructor-award-main">
              <div className="instructor-award">
                <div>
                  <img src={tag} alt="tag" />
                </div>
                <div>Under Top 10</div>
              </div>
              <div className="instructor-award">
                <div>
                  <img src={tag} alt="tag" />
                </div>
                <div>Under Top 10</div>
              </div>
              <div className="instructor-award">
                <div>
                  <img src={tag} alt="tag" />
                </div>
                <div>Under Top 10</div>
              </div>
            </div>
          </Grid>
        </Grid>
        <hr style={{ margin: '0 5%' }} />
        <div className="instructor-bio-main">
          <div>Bio</div>
          <div>
            Google is proud to be an equal opportunity workplace and is an
            affirmative action employer. We are committed to equal employment
            opportunity regardless of race, color, ancestry, religion, sex,
            national origin, sexual orientation, age, citizenship, marital
            status, disability, gender identity or Veteran status. We also
            consider qualified applicants regardless of criminal histories,
            consistent with legal requirements. See also Google's EEO Policy and
            EEO is the Law. If you have a disability or special need that
            requires accommodation, please let us know by completing this form.
          </div>
        </div>
        <div className="instructor-courses">Courses</div>
        <CourseCard />
        <div className="Sample-videos-tittle2">
          Students reviews on Anjali Sikka
        </div>
        <div>
          <div className="rating-div">
            <Grid container spacing={0}>
              <Grid item xs={12} sm={5}>
                <Grid container spacing={0}>
                  <Grid item xs={4} sm={4}>
                    <div class="star-Rating2">
                      <div className="point-reviews">4.5</div>
                      <Rating
                        name="read-only"
                        value="4.5"
                        readOnly
                        precision={0.5}
                      />
                      <div className="reviews">(1121)Reviews</div>
                    </div>
                  </Grid>
                  <Grid item xs={8} sm={8}>
                    <div class="row">
                      <div className="rating-bar">
                        <div className="rating-bar-num">5</div>
                        <div class="bar-container">
                          <div class="bar-5"></div>
                        </div>
                        <div className="rating-bar-num rating-bar-num1">5</div>
                      </div>
                      <div className="rating-bar">
                        <div className="rating-bar-num">4</div>
                        <div class="bar-container">
                          <div class="bar-4"></div>
                        </div>
                        <div className="rating-bar-num rating-bar-num1">5</div>
                      </div>
                      <div className="rating-bar">
                        <div className="rating-bar-num">3</div>
                        <div class="bar-container">
                          <div class="bar-3"></div>
                        </div>
                        <div className="rating-bar-num rating-bar-num1">5</div>
                      </div>
                      <div className="rating-bar">
                        <div className="rating-bar-num">2</div>
                        <div class="bar-container">
                          <div class="bar-2"></div>
                        </div>
                        <div className="rating-bar-num rating-bar-num1">5</div>
                      </div>
                      <div className="rating-bar">
                        <div className="rating-bar-num">1</div>
                        <div class="bar-container">
                          <div class="bar-1"></div>
                        </div>
                        <div className="rating-bar-num rating-bar-num1">5</div>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                {reviews &&
                  reviews.map((ele) => (
                    <div className="rating-message">
                      <div className="first-div">
                        <img src="https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=800&h=300" />
                        <div className="rating-message-name">{ele.name}</div>
                      </div>
                      <div className="first-div2">
                        <Rating
                          name="read-only"
                          value={ele.rating}
                          readOnly
                          precision={0.5}
                        />
                        <div className="reviews-post-date">{ele.date}</div>
                      </div>
                      <div className="reviews-feedback">{ele.text}</div>
                      <hr style={{ border: ' 1px solid #0000000' }} />
                    </div>
                  ))}
              </Grid>
            </Grid>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

Instructor.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  instructor: makeSelectInstructor(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Instructor);
