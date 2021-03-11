/**
 *
 * Maeg
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectMaeg from './selectors';
import reducer from './reducer';
import saga from './saga';
import './maeg.css';
import Header from '../../components/Header/Loadable';
import Footer from '../../components/Footer/Loadable';

const mentorData = [
  {
    imageLink: 'https://readmycourse.com/Images/icon/web_icons/pride.svg',
    title: 'A Matter of Pride',
    text:
      'Opportunity to showcase your ability to help grow someone in their career. It makes you special and will be remembered by the community always.',
  },
  {
    imageLink:
      'https://readmycourse.com/Images/icon/web_icons/machine-learning.svg',
    title: 'Endless Learning For You Too',
    text:
      'Teaching improves your efficacy, confidence and communication skills. In addition to that it better organizes information to our mind.',
  },
  {
    imageLink: 'https://readmycourse.com/Images/icon/web_icons/networking.svg',
    title: 'An Ever Growing Network',
    text:
      'Meet professionals from different industries and build a long-lasting network of like-minded, driven individuals.',
  },
  {
    imageLink: 'https://readmycourse.com/Images/icon/web_icons/microphone.svg',
    title: 'Recognition',
    text:
      'You will get the full credit of your work, certificate and appreciation from our mentors.',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export function Maeg() {
  const classes = useStyles();

  useInjectReducer({ key: 'maeg', reducer });
  useInjectSaga({ key: 'maeg', saga });

  return (
    <div>
      <Helmet>
        <title>Maeg</title>
        <meta name="description" content="Description of Maeg" />
      </Helmet>
      <div>
        <Header />
        <div class="MAEG-Award">
          <div class="head-tittle">
            MAEG Award- Most Appreciated Educator Around The Globe Award
          </div>
          <div class="sub-tittle">
            This is your chance to give back to the community - mentor students
            to help them unlock their true potential.
          </div>
          <Button>apply now</Button>
        </div>
        <div class="overallgrid">
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <div class="grid-image">
                  <img src="https://readmycourse.com/Images/maeg-momento.jpeg" />
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div class="content">
                  <div class="grid-tittle">
                    Most Appreciated Educator Around The Globe Award
                  </div>
                  <div class="subcontent">
                    Become a part of ReadMyCourse's initiative to help millions
                    of students around the globe by providing access to free
                    education. This award will be given to all the instructors
                    who participate in our initiative.
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <div class="question-content">Why Should be a Mentor?</div>
        <Grid container spacing={1}>
          {mentorData &&
            mentorData.map((ele) => (
              <Grid item xs={12} sm={6} lg={3}>
                <div>
                  <div class="card">
                    <div className="card-img">
                      <img src={ele.imageLink} />
                    </div>
                    <div class="card-contect">{ele.title}</div>
                    <div class="card-sub-contect">{ele.text}</div>
                  </div>
                </div>
              </Grid>
            ))}
        </Grid>
      </div>
      <div class="question-content">Steps to get MAEG Award</div>
      <div>
        <div class="card">
          <div class="card-contect">Step 1</div>
          <div className="card-img">
            <img src="https://readmycourse.com/Images/icon/web_icons/shuttle.svg" />
          </div>
          <div class="card-contect">Launch</div>
          <div class="card-sub-contect">
            Launch any live course on our platform. It takes less than a minute.
            Choose any topic that you are most familier with.
          </div>
        </div>
      </div>
      <div class="overallgrid">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <div class="grid-image">
                <img src="https://readmycourse.com/Images/maeg-cer.jpeg" />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div class="content">
                <div class="grid-tittle">
                  Most Appreciated Educator Around The Globe Award
                </div>
                <div class="subcontent">
                  You will also get the certificate of appreciation.
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div class="about-us-head-tittle">About Us</div>
      <div class="about-us">
        <div class="about-us-tittle">Welcome to ReadMyCourse</div>
        <div class="about-us-sub-tittle">
          <span>readmycourse.com</span> is a next generation e-learning platform
          which provides fully interactive live classes for professional courses
          and have an aim to create social network of students, instructors and
          institutions.
        </div>
        <div class="about-us-mission-tittle">Our Mission</div>
        <div class="about-us-sub-tittle">
          “To accommodate everyone’s educational needs by providing self paced,
          relevant, and personalized content in an e-learning platform which
          bridges the gap between instructors and students worldwide through
          live courses by providing an “online live course marketplace” for
          instructors to create and sell their courses globally”
        </div>
        <div class="about-us-mission-tittle">Our Vision</div>
        <div class="about-us-sub-tittle">
          “To eliminate all educational restrictions & geographical boundaries &
          providing quality education by connecting Instructors and Students
          from all over the world to learn, earn and grow on our next-generation
          e-learning platform”
        </div>
      </div>
      <Footer />
    </div>
  );
}

Maeg.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  maeg: makeSelectMaeg(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Maeg);
