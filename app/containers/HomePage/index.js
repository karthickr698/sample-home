/**
 *
 * HomePage
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import './HomePage.css';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import 'rsuite/dist/styles/rsuite-default.css';
import Tabs from '@material-ui/core/Tabs';
import Button from '@material-ui/core/Button';

import saga from './saga';
import reducer from './reducer';
import makeSelectHomePage from './selectors';
import Header from '../../components/Header/Loadable';
import Footer from '../../components/Footer/Loadable';
import CourseCard from '../../components/CourseCard/Loadable';

import topImage from '../images/Cover-image.jpg';
import midel from '../images/mid-curve.jpg';
import bottom from '../images/Readmycourse thankyou graphic-06.jpg';
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
  footer: {
    fontSize: '1.5rem',
    marginRight: '2rem',
  },
  grid: {
    paddingTop: '1rem',
    paddingBottom: '1rem',
    backgroundColor: '#ffffff',
    boxShadow: '2px 2px 7px #b8b8bd',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    border: '1px solid rgb(199, 199, 199)',
  },
  iconButton: {
    width: '2rem',
  },
  cont: {
    paddingTop: '0.3rem',
    padding: '0.3rem 1rem 0 1rem',
    height: '5rem',
    backgroundColor: 'red',
  },
}));

export function HomePage() {
  const classes = useStyles();
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="Description of HomePage" />
      </Helmet>
      <Header />
      <div className="background">
        <img src={topImage} alt="image" />
        <div className="overall">
          <div className="textcontect">
            <div>
              Most Unique courses around the Globe <span>curated for you</span>
            </div>
          </div>
          <Button variant="contained" color="secondary" className="bookBtn">
            Book a free class
          </Button>
        </div>
      </div>
      <div>
        <div className="subtittle">
          <div>
            Achieve your targets with <span>ReadMycourse</span>
          </div>
          <div className="textopacity">
            Try a free live course today from instructors 10+ world-class
            universities
          </div>
        </div>
        <div className="logoscroll">
          <div className={classes.root}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <div className="logos">
                <img src="https://readmycourse.com/Images/iit-indore-logo.png" />
                <img src="https://readmycourse.com/Images/iit_mandi_logo.png" />
                <img src="https://readmycourse.com/Images/mnnit-allahabad-logo.png" />
                <img src="https://readmycourse.com//Images/institutions_logo/IIT_Kharagpur_Logo.svg" />
                <img src="https://readmycourse.com/Images/institutions_logo/mit-logo.png" />
                <img src="https://readmycourse.com/Images/institutions_logo/stanford.png" />
                <img src="https://readmycourse.com/Images/institutions_logo/iiser-pune-logo.png" />
              </div>
            </Tabs>
          </div>
        </div>
        <div className="curve-overall">
          <div className="curvetop">
            <img className="curve-mid" src={midel} alt="middle" />
            <div className="texttittle1">benefites of learning live</div>
            <div className="textopacityalign">
              Do you want to know why millions of students want learn live?
            </div>
            <div className="icons">
              <Grid container spacing={1}>
                <Grid item xs={12} sm={4}>
                  <div>
                    <img src="https://readmycourse.com/Images/icon/web_icons/bulb.png" />
                    <div className="textalign">
                      <div>customized learning</div>
                      Learn what you exactly need, to boost your interest.
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <div>
                    <img src="https://readmycourse.com/Images/icon/web_icons/chat.png" />
                    <div className="textalign">
                      <div>customized learning</div>
                      Learn what you exactly need, to boost your interest.
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <div>
                    <img src="https://readmycourse.com/Images/icon/web_icons/book.png" />
                    <div className="textalign">
                      <div>customized learning</div>
                      Learn what you exactly need, to boost your interest.
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className="texttittle1">
              Features available in our live classes
            </div>
            <div className="livetittle">"who knows, dose it live"</div>
            <div class="circleflex">
              <div className="circle">
                <img src={individual06} alt="individual06" />
              </div>
              <div className="circle">
                <img src={individual07} alt="individual07" />
              </div>
              <div className="circle">
                <img src={individual08} alt="individual08" />
              </div>
              <div className="circle">
                <img src={individual09} alt="individual09" />
              </div>
            </div>
            <div class="text-help">
              We help you to get job in <span>top companies</span>
            </div>
            <div className="textopacityalign">
              Try a free live course today from instructors 10+ world-class
              universities
            </div>
            <div className="logoscroll2">
              <div className={classes.root}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                  <div className="logos2">
                    <img src="https://readmycourse.com/Images/iit-indore-logo.png" />
                    <img src="https://readmycourse.com/Images/iit_mandi_logo.png" />
                    <img src="https://readmycourse.com/Images/mnnit-allahabad-logo.png" />
                    <img src="https://readmycourse.com//Images/institutions_logo/IIT_Kharagpur_Logo.svg" />
                    <img src="https://readmycourse.com/Images/institutions_logo/mit-logo.png" />
                    <img src="https://readmycourse.com/Images/institutions_logo/stanford.png" />
                    <img src="https://readmycourse.com/Images/institutions_logo/iiser-pune-logo.png" />
                  </div>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="join-text">
            Join our specially designed live courses
          </div>
          <CourseCard />
        </div>
        <div className="textquestion">
          Why should you choose <span style={{ color: '#9900aa' }}>us</span>?
        </div>
        <div>
          <div className="chats">
            <Grid container spacing={1} className="chats-cont">
              <Grid item xs={12} sm={6}>
                <div className="chart-sub-cont">
                  <div class="chatcard">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStN_DfwUJ7o3S32kOPA111HHQsZFgzTlJrFw&usqp=CAU" />
                  </div>
                  <div className="message">
                    <div className="massegebox">
                      <span>
                        Technical courses of ReadMyCourse can really satisfy to
                        our student’s hunger for learning and development. It
                        can also help to students for correctly automating,
                        storing, handling, measuring, analysing data and
                        information processing.{' '}
                      </span>
                    </div>
                    <div class="colorname">Anna Bashir Nakhoon</div>
                  </div>
                </div>
                <div className="chart-sub-cont">
                  <div className="message massegebox1">
                    <div className="massegebox">
                      <span>
                        Technical courses of ReadMyCourse can really satisfy to
                        our student’s hunger for learning and development. It
                        can also help to students for correctly automating,
                        storing, handling, measuring, analysing data and
                        information processing.{' '}
                      </span>
                    </div>
                    <div class="colorname">Anna Bashir Nakhoon</div>
                  </div>
                  <div class="chatcard">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStN_DfwUJ7o3S32kOPA111HHQsZFgzTlJrFw&usqp=CAU" />
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className="chart-sub-cont chart-sub-cont1">
                  <div class="chatcard">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStN_DfwUJ7o3S32kOPA111HHQsZFgzTlJrFw&usqp=CAU" />
                  </div>
                  <div className="message">
                    <div className="massegebox">
                      <span>
                        Technical courses of ReadMyCourse can really satisfy to
                        our student’s hunger for learning and development. It
                        can also help to students for correctly automating,
                        storing, handling, measuring, analysing data and
                        information processing.{' '}
                      </span>
                    </div>
                    <div class="colorname">Anna Bashir Nakhoon</div>
                  </div>
                </div>
                <div className="chart-sub-cont chart-sub-cont2">
                  <div className="message massegebox1">
                    <div className="massegebox">
                      <span>
                        Technical courses of ReadMyCourse can really satisfy to
                        our student’s hunger for learning and development. It
                        can also help to students for correctly automating,
                        storing, handling, measuring, analysing data and
                        information processing.{' '}
                      </span>
                    </div>
                    <div class="colorname">Anna Bashir Nakhoon</div>
                  </div>
                  <div class="chatcard">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStN_DfwUJ7o3S32kOPA111HHQsZFgzTlJrFw&usqp=CAU" />
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
          <div>
            <div>
              <div class="thankstittle">Get certified by us</div>
              <div class="imagecertificate">
                <img src="https://readmycourse.com/Images/rmc_certifcate_sample.jpg.jpg" />
              </div>
            </div>
            <div className="thankstittle">Thankyou for visiting us</div>
            <div style={{ height: '50px' }}>
              <div>
                <img className="bottomimg" src={bottom} alt="bottom" />
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(HomePage);
