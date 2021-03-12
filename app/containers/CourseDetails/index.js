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
import about from '../images/About the course BG-06.jpg';


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

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

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
    history: [
      { date: '2020-01-05', content: '11091700', amount: 3 },
      { },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box style={{border:'1px solid black'}} margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  {row.history.map((historyRow) => (
                    
                      <TableCell>{historyRow.content}</TableCell>
                    
                  ))}
                </TableBody>
              </Table>
            </Box>
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
  }
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
                <img style={{position:'absolute',height:'80vh',width:'98.8vw'}} src={about} alt="about" />
              <div className='grid-table-content'>
                <div style={{position:'relative'}}>
                  <div class="content-tittle">About course</div>
                    <div class="content-sub-tittle">
                      This course teaches computer programming to those with little to no previous experience. Here you will learn Matrices and Operators, Function, programmer's Toolbox, loops, Data Type, and plotting
                    </div>
                    <div class="content-tittle">About Instructor</div>
                    <div class="content-sub-tittle3">
                      <img src="https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228__340.jpg" />
                      <div className="name-main-div">
                        <div className='name'>
                          Anjali Sikka <span>(4.5/5)</span>
                        </div>
                        <div class="name-under">
                            Python master, Readmycourse
                        </div>
                        <div className='class-tittle'>
                          <span style={{ color: '#9900aa' }}>
                            specialisation-
                          </span> Python, pythonfor BioInformatics
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{position:'relative'}}>
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
                <div>
                  <div className='Sample-videos-tittle'>
                    Sample videos
                  </div>
                  <div className='tab-videos'>
                    <div className="video-logoscroll">
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
                          <div className="video-tabs">
                            <div className='videos-card'>
                              <img src="https://readmycourse.com/Images/iit-indore-logo.png" />
                            </div>
                            <div className='videos-card'>
                              <img src="https://readmycourse.com/Images/iit-indore-logo.png" />
                            </div>
                            <div className='videos-card'>
                              <img src="https://readmycourse.com/Images/iit-indore-logo.png" />
                            </div>
                            <div className='videos-card'>
                              <img src="https://readmycourse.com/Images/iit-indore-logo.png" />
                            </div>
                            <div className='videos-card'>
                              <img src="https://readmycourse.com/Images/iit-indore-logo.png" />
                            </div>
                            <div className='videos-card'>
                              <img src="https://readmycourse.com/Images/iit-indore-logo.png" />
                            </div>
                          </div>
                        </Tabs>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className='tittle-content'>
                      Our latest <span style={{color:'#b83b5e'}}>Syllabus</span>
                    </div>
                    <div className='weeks-table'>
                      <div className='week-bar'>
                        <TableContainer component={Paper}>
                          <Table aria-label="collapsible table">
                            <TableBody style={{border:'1px solid black'}}>
                              {rows.map((row) => (
                                <Row key={row.name} row={row} />
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </div>
                    </div>
                    <div>
                      <div className='Sample-videos-tittle2'>
                    Student reviews
                      </div>
                  <div>
                    <div className='rating-div'>
                      <Grid container spacing={0}>
                        <Grid item xs={12} sm={5}>
                          <Grid container spacing={0}>
                            <Grid item xs={12} sm={6}>
                              <div class="star-Rating2">
                                <div  className='point-reviews'>
                                  4.8
                                </div>
                                <Rating
                                  name="read-only"
                                  value={starValue}
                                  readOnly
                                  precision={0.5}
                                />
                                <div className='reviews'>(1121)Reviews</div>
                              </div>
                            </Grid>
                            <Grid item xs={12} sm={6}>                              
                              <div class="row">
                              </div>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <div className='rating-message'>
                            <div className='first-div'>
                              <img src="https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=800&h=300" />
                              <div className='rating-message-name'>
                                Alex Phillips
                              </div>
                            </div>
                              <div className='first-div2'>
                                <Rating
                                  name="read-only"
                                  value={starValue}
                                  readOnly
                                  precision={0.5}
                                />
                                <div className='reviews-post-date'>11/03/2021</div>
                            </div>
                            <div className='reviews-feedback'>
                              This course teaches computer programming to those with little to no previous experience. Here you will learn Matrices and Operators, Function, programmer's Toolbox, loops, Data Type, and plotting
                            </div>
                            <hr style={{ border:' 1px solid #0000000'}} />
                          </div>
                        </Grid>  
                      </Grid>    
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
