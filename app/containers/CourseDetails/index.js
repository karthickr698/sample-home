/**
 *
 * CourseDetails
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCourseDetails from './selectors';
import reducer from './reducer';
import saga from './saga';
import Header from '../../components/Header/Loadable';
import Footer from '../../components/Footer/Loadable';
import './CourseDetails.css';
import individual06 from '../images/Icon individual-06.jpg';
import individual07 from '../images/Icon individual-07.jpg';
import individual08 from '../images/Icon individual-08.jpg';
import individual09 from '../images/Icon individual-09.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    paddingTop: '0.3rem',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export function CourseDetails() {
  const classes = useStyles();
  useInjectReducer({ key: 'courseDetails', reducer });
  useInjectSaga({ key: 'courseDetails', saga });

  const [starValue, setStarValue] = React.useState(5);

  return (
    <div>
      <Helmet>
        <title>CourseDetails</title>
        <meta name="description" content="Description of CourseDetails" />
      </Helmet>
      <div>
        <Header />
        <div>
            <img className='topmaindiv-img' src="https://readmycourse.com/Images/maeg-cer.jpeg" />
          <div className='top-main-div'>
            <div className='page-content'>
              Home / Join Live Class
            </div>
            <div className='live-content'>
              Join Live Class
            </div>
            <div className='tittle'>
              PYTHON for  BioInformatics
            </div>
            <div class="star-Rating">
              <Rating
                name="read-only"
                value={starValue}
                readOnly
                precision={0.5}
              />
              <div>(5.0)</div>
            </div>
            <div className='fees-content'>
              Full course fees ₹ 1000
            </div>
            <div className="rigister-content">
              Sorry! you can't join this course. Registration has been closed for this course
            </div>
          </div>
          <div>
            <div className='grid-table-content'>
              <div>
                <div class="content-tittle">About course</div>
                <div class="content-sub-tittle">
                  This course teaches computer programming to those with little to no previous experience. Here you will learn Matrices and Operators, Function, programmer's Toolbox, loops, Data Type, and plotting
                </div>
                <div class="content-tittle">About Instructor</div>
                <div class="content-sub-tittle3">
                  <img src="https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228__340.jpg" />
                  <div>
                    <div className='name'>
                      Anjali Sikka <span>(4.5/5)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="content-tittle2">Special features</div>
                <div class="content-sub-tittle2">
                  <div className="special-img">
                    <img src={individual06} alt="individual06" />
                    <div>
                      certificate of completion
                    </div>
                  </div>
                  <div className="special-img">
                    <img src={individual07} alt="individual07" />
                    <div>
                      Job opportunities
                    </div>
                  </div>
                  <div className="special-img">
                    <img src={individual08} alt="individual08" />
                    <div>
                      message instructor at any time
                    </div>
                  </div>
                  <div className="special-img">
                    <img src={individual09} alt="individual09" />
                    <div>
                      Life time study material access
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CourseDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  courseDetails: makeSelectCourseDetails(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(CourseDetails);
