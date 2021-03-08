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
import { Popover, Whisper, Button, ButtonToolbar } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import saga from './saga';
import reducer from './reducer';
import makeSelectHomePage from './selectors';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`scrollable-auto-tabpanel-${index}`}
//       aria-labelledby={`scrollable-auto-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    paddingTop: '0.3rem',
    '& > *': {
      margin: theme.spacing(1),
    },
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
    <Grid container spacing={1}>
      <Grid item xs={6} className="pop-main">
        {menuItems &&
          menuItems.map((ele, i) => (
            <Grid
              container
              spacing={1}
              className="pop-cont"
              onMouseOver={() => {
                setData(ele.items);
                setIndex(i);
              }}
              style={{
                backgroundColor: index === i ? 'rgb(207, 204, 204)' : '',
              }}
            >
              <Grid item key={i} xs={10}>
                {ele.value}
              </Grid>
              {ele.items.length > 0 ? (
                <Grid item xs={2}>
                  <ArrowForwardIosIcon />
                </Grid>
              ) : null}
            </Grid>
          ))}
      </Grid>
      <Grid item xs={6} className="pop-main">
        {data &&
          data.map((ele) => (
            <Grid container spacing={1} className="pop-cont">
              <Grid item xs={12}>
                {ele.value}
              </Grid>
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
};

const speaker = (
  <Popover className="popover">
    <Elements />
  </Popover>
);

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: 'rgb(228, 99, 13)',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 20,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover': {
      color: '#FE4500',
      opacity: 1,
    },
    '&$selected': {
      color: '#FE4500',
      fontWeight: 'bold',
      fontSize: '16px',
    },
    '&:focus': {
      color: 'rgb(228, 99, 13)',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      style={{ marginTop: '1rem' }}
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Typography>{children}</Typography>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

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
                <div className="search">
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
          <div className={classes.root}>
            <Grid container spacing={1}>
              <Grid item xs={3}>
                <img
                  src="https://readmycourse.com/Images/site-logo-v2-full.png"
                  alt="logo"
                  width="100%"
                />
              </Grid>
              <Grid item xs={2}>
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
                <ButtonToolbar>
                  <Whisper placement="bottom" trigger="click" speaker={speaker}>
                    <Button className="mega-menu">All Course</Button>
                  </Whisper>
                </ButtonToolbar>
              </Grid>
              <Grid item xs={2}>
                <div>MAEG Award</div>
              </Grid>
              <Grid item xs={4}>
                <Button variant="contained" color="primary">
                  Primary
                </Button>
                <Button variant="contained" color="primary">
                  Login
                </Button>
              </Grid>
            </Grid>
            <TabPanel value={value} index={0} />
            <TabPanel value={value} index={1}>
              join
            </TabPanel>
          </div>
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
      <div className="curve"></div>
      <div>
        <div className="subtittle">
            <div>
              Achieve your targets with <span>ReadMycourse</span>
          </div>
            <div class="textopacity">
              try a free live course today from instructors 10+ world-class universities
            </div>
        </div>
        <div class="logoscroll">
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
              <div class="logos">
                <img src="https://readmycourse.com/Images/iit-indore-logo.png"/>
                <img src="https://readmycourse.com/Images/iit_mandi_logo.png"/>
                <img src="https://readmycourse.com/Images/mnnit-allahabad-logo.png"/>
                <img src="https://readmycourse.com//Images/institutions_logo/IIT_Kharagpur_Logo.svg"/>
                <img src="https://readmycourse.com/Images/institutions_logo/mit-logo.png"/>
                <img src="https://readmycourse.com/Images/institutions_logo/stanford.png"/>
                <img src="https://readmycourse.com/Images/institutions_logo/iiser-pune-logo.png"/>
              </div>
            </Tabs>
          </div>
        </div>
          <div>
          <div className="curvetop">
            <div class="texttittle">
              benefites of  learning live
              </div>
              <div class="textopacityalign">
              Do you want to knowwhy millions of students want learn live?
              </div>
            <div class="icons">
            <Grid container spacing={1}>
              <Grid item xs={5}>      
                <div>
                    <EmojiObjectsIcon style={{ color:'#aa004f',zoom:'4'}} />
                    <div class="textalign">
                      <div>
                        customized learning
                      </div>
                      Learn what you exactly need, to boost your interest.
                    </div>
                </div>
                  </Grid>
                  <Grid item xs={2}>      
                <div>
                    <EmojiObjectsIcon style={{ color: '#aa004f', zoom: '4' }} />
                     <div class="textalign">
                      <div>
                        customized learning
                      </div>
                      Learn what you exactly need, to boost your interest.
                    </div>
                </div>
                  </Grid>
                  <Grid item xs={5}>      
                <div>
                  <EmojiObjectsIcon style={{ color:'#aa004f',zoom:'4'}} />
                   <div class="textalign">
                      <div>
                        customized learning
                      </div>
                      Learn what you exactly need, to boost your interest.
                    </div>                
                  </div>
                  </Grid>
                </Grid>
            </div>
            <div class="texttittle">
              Features available in our live classes
            </div>
            <div class="livetittle">
              "who knows, dose it live"
            </div>
            <div class="circle"></div>
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
