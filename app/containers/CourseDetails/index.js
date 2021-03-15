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
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Steps } from 'rsuite';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCourseDetails from './selectors';
import reducer from './reducer';
import saga from './saga';
import Header from '../../components/Header/Loadable';
import Footer from '../../components/Footer/Loadable';
import './CourseDetails.css';
import individual06 from '../images/Features-2.png';
import individual07 from '../images/Features-4.png';
import individual08 from '../images/Features-6.png';
import individual09 from '../images/Features-8.png';
import about from '../images/About the course BG-06.jpg';

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

const videoDatas = [
  {
    text: 'Top Course On Machine Learning',
    imgLink:
      'https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228__340.jpg',
  },
  {
    text: 'Top Course On Machine Learning',
    imgLink:
      'https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228__340.jpg',
  },
  {
    text: 'Top Course On Machine Learning',
    imgLink:
      'https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228__340.jpg',
  },
  {
    text: 'Top Course On Machine Learning',
    imgLink:
      'https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228__340.jpg',
  },
  {
    text: 'Top Course On Machine Learning',
    imgLink:
      'https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228__340.jpg',
  },
  {
    text: 'Top Course On Machine Learning',
    imgLink:
      'https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228__340.jpg',
  },
  {
    text: 'Top Course On Machine Learning',
    imgLink:
      'https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228__340.jpg',
  },
  {
    text: 'Top Course On Machine Learning',
    imgLink:
      'https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228__340.jpg',
  },
  {
    text: 'Top Course On Machine Learning',
    imgLink:
      'https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228__340.jpg',
  },
  {
    text: 'Top Course On Machine Learning',
    imgLink:
      'https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228__340.jpg',
  },
  {
    text: 'Top Course On Machine Learning',
    imgLink:
      'https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228__340.jpg',
  },
  {
    text: 'Top Course On Machine Learning',
    imgLink:
      'https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228__340.jpg',
  },
];

const instructorDatas = [
  {
    imgLink:
      'https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228__340.jpg',
    name: 'Anjali Sikka',
    title: 'Python master, Readmycourse',
    skills: 'Python, pythonfor BioInformatics',
    student: 1123,
    course: 10,
    rating: '3.5',
  },
  {
    imgLink:
      'https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228__340.jpg',
    name: 'Anjali Sikka',
    title: 'Python master, Readmycourse',
    skills: 'Python, pythonfor BioInformatics',
    student: 1123,
    course: 10,
    rating: '3.5',
  },
  {
    imgLink:
      'https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228__340.jpg',
    name: 'Anjali Sikka',
    title: 'Python master, Readmycourse',
    skills: 'Python, pythonfor BioInformatics',
    student: 1123,
    course: 10,
    rating: '3.5',
  },
  {
    imgLink:
      'https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228__340.jpg',
    name: 'Anjali Sikka',
    title: 'Python master, Readmycourse',
    skills: 'Python, pythonfor BioInformatics',
    student: 1123,
    course: 10,
    rating: '3.5',
  },
  {
    imgLink:
      'https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228__340.jpg',
    name: 'Anjali Sikka',
    title: 'Python master, Readmycourse',
    skills: 'Python, pythonfor BioInformatics',
    student: 1123,
    course: 10,
    rating: '3.5',
  },
  {
    imgLink:
      'https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228__340.jpg',
    name: 'Anjali Sikka',
    title: 'Python master, Readmycourse',
    skills: 'Python, pythonfor BioInformatics',
    student: 1123,
    course: 10,
    rating: '3.5',
  },
  {
    imgLink:
      'https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228__340.jpg',
    name: 'Anjali Sikka',
    title: 'Python master, Readmycourse',
    skills: 'Python, pythonfor BioInformatics',
    student: 1123,
    course: 10,
    rating: '3.5',
  },
  {
    imgLink:
      'https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228__340.jpg',
    name: 'Anjali Sikka',
    title: 'Python master, Readmycourse',
    skills: 'Python, pythonfor BioInformatics',
    student: 1123,
    course: 10,
    rating: '3.5',
  },
  {
    imgLink:
      'https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228__340.jpg',
    name: 'Anjali Sikka',
    title: 'Python master, Readmycourse',
    skills: 'Python, pythonfor BioInformatics',
    student: 1123,
    course: 10,
    rating: '3.5',
  },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    paddingTop: '0.3rem',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function createData(name) {
  return {
    name,
    history: [{ date: '2020-01-05', content: '11091700', amount: 3 }, {}],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow
        className={classes.root}
        onClick={() => setOpen(!open)}
        style={{ cursor: 'pointer' }}
      >
        <TableCell style={{ width: '1rem' }}>
          <IconButton aria-label="expand row" size="small">
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{
            paddingBottom: 0,
            paddingTop: 0,
            width: '70vw',
            borderRadius: '1rem',
          }}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Steps current={0} vertical style={{ padding: '0 5%' }}>
              <Steps.Item title="Finished" />
              <Steps.Item title="Finished" />
              <Steps.Item title="Finished" />
              <Steps.Item title="Finished" />
            </Steps>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        content: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('Frozen yoghurt'),
  createData('Ice cream sandwich'),
  createData('Eclair'),
  createData('Cupcake'),
  createData('Gingerbread'),
];

export function CourseDetails() {
  const classes = useStyles();
  useInjectReducer({ key: 'courseDetails', reducer });
  useInjectSaga({ key: 'courseDetails', saga });
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
          <div className="top-main-div">
            <div className="page-content">Home / Join Live Class</div>
            <div className="live-content">Join Live Class</div>
            <div className="tittle">PYTHON for BioInformatics</div>
            <div class="star-Rating">
              <Rating
                name="read-only"
                value={starValue}
                readOnly
                precision={0.5}
              />
              <div>(5.0)</div>
            </div>
            <div className="fees-content">Full course fees ₹ 1000</div>
            <div className="rigister-content">
              Sorry! you can't join this course. Registration has been closed
              for this course
            </div>
          </div>
          <div>
            <img src={about} class="curve-top-back" alt="about" />
            <div className="grid-over-all">
              <Grid container spacing={0}>
                <Grid item xs={12} sm={8}>
                  <div style={{ position: 'relative' }}>
                    <div class="content-tittle">About course</div>
                    <div class="content-sub-tittle">
                      This course teaches computer programming to those with
                      little to no previous experience. Here you will learn
                      Matrices and Operators, Function, programmer's Toolbox,
                      loops, Data Type, and plotting
                    </div>
                    <div class="content-tittle">About Instructor</div>
                    <div class="content-sub-tittle3">
                      <img src="https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228__340.jpg" />
                      <div className="name-main-div">
                        <div className="name">
                          Anjali Sikka <span>(4.5/5)</span>
                        </div>
                        <div class="name-under">
                          Python master, Readmycourse
                        </div>
                        <div className="class-tittle">
                          <span style={{ color: '#9900aa' }}>
                            specialisation-
                          </span>{' '}
                          Python, pythonfor BioInformatics
                        </div>
                        <div className="name-under">1133 Students</div>
                        <div className="name-under">10 Courses</div>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <div style={{ position: 'relative' }}>
                    <div class="content-tittle2">Special features</div>
                    <div class="content-sub-tittle2">
                      <div className="special-img">
                        <img src={individual06} alt="individual06" />
                        <div>certificate of completion</div>
                      </div>
                      <div className="special-img">
                        <img src={individual07} alt="individual07" />
                        <div>Job opportunities</div>
                      </div>
                      <div className="special-img">
                        <img src={individual08} alt="individual08" />
                        <div>message instructor at any time</div>
                      </div>
                      <div className="special-img">
                        <img src={individual09} alt="individual09" />
                        <div>Life time study material access</div>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
          <div>
            <div className="Sample-videos-tittle0">Sample videos</div>
            <div className="tab-videos">
              <div className="video-logoscroll">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                  <div className="video-tabs">
                    {videoDatas &&
                      videoDatas.map((ele) => (
                        <div className="videos-card">
                          <img src={ele.imgLink} alt="video" />
                          <div class="video-name">{ele.text}</div>
                        </div>
                      ))}
                  </div>
                </Tabs>
              </div>
            </div>
            <div>
              <div className="tittle-content">
                Our latest <span style={{ color: '#b83b5e' }}>Syllabus</span>
              </div>
              <div className="weeks-table">
                <div className="week-bar">
                  <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                      <TableBody style={{ width: '100%' }}>
                        {rows.map((row) => (
                          <div className="sample">
                            <Row key={row.name} row={row} />
                          </div>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </div>
              <div>
                <div class="profile-tab">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="scrollable force tabs example"
                  >
                    {instructorDatas &&
                      instructorDatas.map((ele) => (
                        <div className="profile-tab-cards">
                          <div class="content-sub-tittle4">
                            <img src={ele.imgLink} alt="author" />
                            <div className="name-main-div">
                              <div className="name">
                                {ele.name} <span>({ele.rating}/5)</span>
                              </div>
                              <div class="name-under1">{ele.title}</div>
                              <div className="class-tittle4">
                                <span style={{ color: '#9900aa' }}>
                                  specialisation-
                                </span>{' '}
                                {ele.skills}
                              </div>
                              <div className="name-under1">
                                {ele.student} Students
                              </div>
                              <div className="name-under1">
                                {ele.course} Courses
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </Tabs>
                </div>
              </div>
              <div>
                <div className="Sample-videos-tittle2">Student reviews</div>
                <div>
                  <div className="rating-div">
                    <Grid container spacing={0}>
                      <Grid item xs={12} sm={5}>
                        <Grid container spacing={0}>
                          <Grid item xs={6} sm={4}>
                            <div class="star-Rating2">
                              <div className="point-reviews">4.8</div>
                              <Rating
                                name="read-only"
                                value={starValue}
                                readOnly
                                precision={0.5}
                              />
                              <div className="reviews">(1121)Reviews</div>
                            </div>
                          </Grid>
                          <Grid item xs={6} sm={8}>
                            <div class="row">
                              <div className="rating-bar">
                                <div className="rating-bar-num">5</div>
                                <div class="bar-container">
                                  <div class="bar-5"></div>
                                </div>
                              </div>
                              <div className="rating-bar">
                                <div className="rating-bar-num">4</div>
                                <div class="bar-container">
                                  <div class="bar-4"></div>
                                </div>
                              </div>
                              <div className="rating-bar">
                                <div className="rating-bar-num">3</div>
                                <div class="bar-container">
                                  <div class="bar-3"></div>
                                </div>
                              </div>
                              <div className="rating-bar">
                                <div className="rating-bar-num">2</div>
                                <div class="bar-container">
                                  <div class="bar-2"></div>
                                </div>
                              </div>
                              <div className="rating-bar">
                                <div className="rating-bar-num">1</div>
                                <div class="bar-container">
                                  <div class="bar-1"></div>
                                </div>
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
                                <div className="rating-message-name">
                                  {ele.name}
                                </div>
                              </div>
                              <div className="first-div2">
                                <Rating
                                  name="read-only"
                                  value={ele.rating}
                                  readOnly
                                  precision={0.5}
                                />
                                <div className="reviews-post-date">
                                  {ele.date}
                                </div>
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
