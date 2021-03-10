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

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Menubar from 'react-responsive-multi-level-menu';
import { Popover, Whisper, ButtonToolbar } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import PinDropIcon from '@material-ui/icons/PinDrop';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedCameraRoundedIcon from '@material-ui/icons/LinkedCameraRounded';
import SubscriptionsRoundedIcon from '@material-ui/icons/SubscriptionsRounded';
import EmojiNatureRoundedIcon from '@material-ui/icons/EmojiNatureRounded';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import saga from './saga';
import reducer from './reducer';
import makeSelectHomePage from './selectors';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    paddingTop: '0.3rem',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  footer:{
    fontSize:'1.5rem',
    marginRight:'2rem'
  },
  grid:{
    paddingTop:'1rem',
    paddingBottom:'1rem',
    backgroundColor:'#ffffff',
    boxShadow:'2px 2px 7px #b8b8bd'
    
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

const Elements = () => {
  const menuItems = [
    {
      value: 'Fashion',
      items: [
        {
          value: 'Men',
          items: [
            {
              value: 'Shirts',
            },
          ],
        },
        {
          value: 'Women',
          items: [
            {
              value: 'Jackets',
            },
            {
              value: 'T-Shirts',
            },
            {
              value: 'Underwear',
            },
          ],
        },
        {
          value: 'Children',
        },
      ],
    },
    {
      value: 'Electronics',
      items: [],
    },
    {
      value: 'Furnitures',
      items: [],
    },
    {
      value: 'Jewelery&watches',
      items: [],
    },
    {
      value: 'Fashion',
      items: [
        {
          value: 'Men',
          items: [
            {
              value: 'Shirts',
            },
          ],
        },
        {
          value: 'Women',
          items: [
            {
              value: 'Jackets',
            },
            {
              value: 'T-Shirts',
            },
            {
              value: 'Underwear',
            },
          ],
        },
        {
          value: 'Children',
        },
      ],
    },
    {
      value: 'Electronics',
      items: [],
    },
    {
      value: 'Furnitures',
      items: [],
    },
    {
      value: 'Jewelery&watches',
      items: [],
    },
    {
      value: 'Fashion',
      items: [
        {
          value: 'Men',
          items: [
            {
              value: 'Shirts',
            },
          ],
        },
        {
          value: 'Women',
          items: [
            {
              value: 'Jackets',
            },
            {
              value: 'T-Shirts',
            },
            {
              value: 'Underwear',
            },
          ],
        },
        {
          value: 'Children',
        },
      ],
    },
    {
      value: 'Electronics',
      items: [],
    },
    {
      value: 'Furnitures',
      items: [],
    },
    {
      value: 'Jewelery&watches',
      items: [],
    },
  ];

  const [data, setData] = useState([]);
  const [index, setIndex] = useState(-1);

  return (
    <div className='pop'>
      <div item xs={6} className="pop-main">
        {menuItems &&
          menuItems.map((ele, i) => (
            <div
              className="pop-cont"
              onMouseOver={() => {
                setData(ele.items);
                setIndex(i);
              }}
              style={{
                backgroundColor: index === i ? 'rgb(207, 204, 204)' : '',
                borderRadius: index === i?'10px':''
              }}
            >
              <div >
                {ele.value}
              </div>
              {ele.items.length > 0 ? (
                <div item >
                  <ArrowForwardIosIcon />
                </div>
              ) : null}
            </div>
          ))}
      </div>
      <div className="pop-main" style={{marginLeft:'1rem'}}>
        {data &&
          data.map((ele) => (
            <div className="pop-cont">
              <div >
                {ele.value}
              </div>
            </div>
          ))}
      </div>
    </div>

  );
};

const speaker = (
  <Popover className="popover">
    <Elements />
  </Popover>
);

export function HomePage() {
  const classes = useStyles();
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });

  const menuItems = [
    {
      value: 'Fashion',
      items: [
        {
          value: 'Men',
          items: [
            {
              value: 'Shirts',
            },
          ],
        },
        {
          value: 'Women',
          items: [
            {
              value: 'Jackets',
            },
            {
              value: 'T-Shirts',
            },
            {
              value: 'Underwear',
            },
          ],
        },
        {
          value: 'Children',
        },
      ],
    },
    {
      value: 'Electronics',
    },
    {
      value: 'Furnitures',
      items: [],
    },
    {
      value: 'Jewelery&watches',
      items: [],
    },
  ];
  const color = '#c62860';
  const animation = ['slideIn', 'slideOut'];
  const [value, setValue] = React.useState(0);
  const [starValue, setStarValue] = React.useState(2.5);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="Description of HomePage" />
      </Helmet>
      <>
        {window.innerWidth < 768 ? (
          <>
            <div className="mob-nav">
              <div>
                <img
                  src="https://readmycourse.com/Images/site-logo-v2.png"
                  alt="logo"
                  width="100%"
                />
              </div>
              <div className="search-cont">
                <div className="search" style={{border:'1px solid grey'}}>
                  <IconButton type="submit" aria-label="search">
                    <SearchIcon />
                  </IconButton>
                  <InputBase
                    className=""
                    placeholder="Search Course"
                    inputProps={{ 'aria-label': 'search google maps' }}
                  />
                </div>
              </div>

              <Menubar
                backgroundColor={color}
                data={menuItems}
                animation={animation}
                className="menubar"
                hamBurgerClassName="hamBurgerMenu"
              />
            </div>
          </>
        ) : (
            <Grid container spacing={1} className={classes.grid}>
              <Grid item xs={2} style={{paddingLeft:'1rem'}}>
                <img
                  src="https://readmycourse.com/Images/site-logo-v2-full.png"
                  alt="logo"
                  width="100%"
                />
              </Grid>
              <Grid item xs={2}>
                <ButtonToolbar>
                  <Whisper placement="bottom" trigger="click" speaker={speaker}>
                    <Button className="mega-menu">All Course
                    <span><ExpandMoreIcon /></span>
                    </Button>
                  </Whisper>
                </ButtonToolbar>
              </Grid>
              <Grid item xs={3}>
                <div className="search desktop">
                  <IconButton type="submit" aria-label="search">
                    <SearchIcon />
                  </IconButton>
                  <InputBase
                    className=""
                    placeholder="Search Course"
                    inputProps={{ 'aria-label': 'search google maps' }}
                  />
                </div>
              </Grid>
              <Grid item xs={2}>
                <Button className='maeg'>MAEG Award</Button>
              </Grid>
              <Grid item xs={3}>
                <Button variant="outlined" color="secondary" className='join'>
                  Join Free
                </Button>
                <Button className='login' variant="outlined" size="large" color="primary" >
                  Login
                </Button>
              </Grid>
            </Grid>
        )}
      </>
      <div className="background">
        <img
          src="https://readmycourse.com/Images/home-page-bg-graphics.svg"
          alt="image"
        />
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
      <div className="curve" />
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
        <div className='curve-overall'>
          <div className="curvetop">
            <div className="texttittle">benefites of learning live</div>
            <div className="textopacityalign">
              Do you want to knowwhy millions of students want learn live?
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
            <div className="texttittle">
              Features available in our live classes
            </div>
            <div className="livetittle">"who knows, dose it live"</div>
            <div class="circleflex">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
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
          </div>
        </div>
        <div>
          <div className="texttittle">
            Join our specially designed live courses
          </div>
          <div>
            <div>
              <div class="cardmain">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStN_DfwUJ7o3S32kOPA111HHQsZFgzTlJrFw&usqp=CAU" />
                <div class="cardtittle">
                  Python for BioInformatics
                </div>
                <div class="card-author">
                  By karthick
                </div>
                <div class="star-value">
                    <Rating name="read-only" value={starValue} readOnly precision={0.5} />
                    <div>(2.5)</div>
                </div>
                <div class="number-of-joined">
                  117+ students joined
                </div>
                <div class="card-buttom">
                  <Button>Join Free</Button>
                  <div>
                    <Button>More details</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="textquestion">
          Why should you choose <span style={{color:'#9900aa'}}>us</span>?
        </div>
        <div>
          <div className="chats">
              <Grid container spacing={1} className='chats-cont'>
                <Grid item xs={12} sm={6}>
                  <div className='chart-sub-cont'>
                    <div class="chatcard">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStN_DfwUJ7o3S32kOPA111HHQsZFgzTlJrFw&usqp=CAU" />
                    </div>
                    <div className='message'>
                      <div className="massegebox">
                        <span>Technical courses of ReadMyCourse can really satisfy to our student’s hunger for learning and development. It can also help to students for correctly automating, storing, handling, measuring, analysing data and information processing. </span>
                      </div>
                      <div class="colorname">Anna Bashir Nakhoon</div>
                    </div>
                </div>
                <div className='chart-sub-cont'>
                    <div className='message massegebox1'>
                      <div className="massegebox">
                        <span>Technical courses of ReadMyCourse can really satisfy to our student’s hunger for learning and development. It can also help to students for correctly automating, storing, handling, measuring, analysing data and information processing. </span>
                      </div>
                      <div class="colorname">Anna Bashir Nakhoon</div>
                    </div>
                    <div class="chatcard">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStN_DfwUJ7o3S32kOPA111HHQsZFgzTlJrFw&usqp=CAU" />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div className='chart-sub-cont chart-sub-cont1'>
                    <div class="chatcard">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStN_DfwUJ7o3S32kOPA111HHQsZFgzTlJrFw&usqp=CAU" />
                    </div>
                    <div className='message'>
                      <div className="massegebox">
                        <span>Technical courses of ReadMyCourse can really satisfy to our student’s hunger for learning and development. It can also help to students for correctly automating, storing, handling, measuring, analysing data and information processing. </span>
                      </div>
                      <div class="colorname">Anna Bashir Nakhoon</div>
                    </div>
                </div>
                <div className='chart-sub-cont chart-sub-cont2'>
                <div className='message massegebox1'>
                      <div className="massegebox">
                        <span>Technical courses of ReadMyCourse can really satisfy to our student’s hunger for learning and development. It can also help to students for correctly automating, storing, handling, measuring, analysing data and information processing. </span>
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
            <div className="thankstittle">
              Thankyou for visiting us
              </div>
            <div style={{height:'50px'}}>
              <div class="topcouver">
            </div>
            </div>
            <div class="bottomtab">
              <div>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={3}>
                  <div class="gridalign">
                      <div class="bottomtabtittles">Have questions?</div>
                      <div>
                        <PinDropIcon className={classes.footer}/>Noida 75,UP, india
                      </div>
                      <div>
                        <PhoneIcon className={classes.footer}/>+91 7317553431
                      </div>
                      <div>
                        <MailOutlineIcon className={classes.footer}/>info@ReadMycourse.com
                      </div>
                  </div>
                </Grid>
                  <Grid item xs={12} sm={3}>
                    <div class="gridalign">
                      <div class="bottomtabtittles">Download App</div>
                      <img src="" />
                  </div>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <div class="gridalign">
                      <div class="bottomtabtittles">Links</div>
                      <div>
                        Home
                      </div>
                      <div>
                        ClassRoom
                      </div>
                      <div>
                        Courses
                      </div>
                      <div>Become Instructor</div>
                      <div>Free Tests</div>
                      <div>About US</div>
                      <div>Student Login</div>
                      <div>Instructor Login</div>
                      <div>Terms and Conditions</div>
                      <div>Privacy Policy</div>
                  </div>
                </Grid>
                  <Grid item xs={12} sm={3}>
                    <div class="gridalign">
                      <div class="bottomtabtittles">Subscribe us!</div>
                      <div class="mailinput">
                        <input type="text" placeholder="Enter email address" />
                        <div>
                          <Button className='subscribe'>Subscribe</Button>
                        </div>
                      </div>
                    </div>
                    <div class="gridalign">
                      <div class="bottomtabtittles">Connect with us!</div>
                      <div class="connectlogo">
                        <FacebookIcon style={{marginRight:'0.5rem'}} />
                        <LinkedCameraRoundedIcon style={{marginRight:'0.5rem'}} />
                        <SubscriptionsRoundedIcon style={{marginRight:'0.5rem'}} />
                        <EmojiNatureRoundedIcon style={{marginRight:'0rem'}} />
                      </div>
                  </div>
                </Grid>
              </Grid>
              </div>
              <div style={{textAlign:'center',marginBottom:'2rem'}}>
                Copyright @ 2021 All rights reserved ! ReadMyCourse
              </div>
            </div>

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