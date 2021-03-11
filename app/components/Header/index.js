/**
 *
 * Header
 *
 */

import React, { memo, useState } from 'react';
import '../../containers/HomePage/HomePage.css';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Menubar from 'react-responsive-multi-level-menu';
import { Popover, Whisper, ButtonToolbar } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import Button from '@material-ui/core/Button';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';

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
    backgroundColor: 'red',
    backgroundColor: '#ffffff',
    boxShadow: '2px 2px 17px #b8b8bd',
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
    <div className="pop">
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
                borderRadius: index === i ? '10px' : '',
              }}
            >
              <div>{ele.value}</div>
              {ele.items.length > 0 ? (
                <div item>
                  <ArrowForwardIosIcon />
                </div>
              ) : null}
            </div>
          ))}
      </div>
      <div className="pop-main" style={{ marginLeft: '1rem' }}>
        {data &&
          data.map((ele) => (
            <div className="pop-cont">
              <div>{ele.value}</div>
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

function Header() {
  const classes = useStyles();
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

  return (
    <div>
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
              <div className="search" style={{ border: '1px solid grey' }}>
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
        <Grid container spacing={0} className={classes.grid}>
          <Grid item xs={2} style={{ paddingLeft: '1rem' }}>
            <img
              src="https://readmycourse.com/Images/site-logo-v2-full.png"
              alt="logo"
              width="100%"
            />
          </Grid>
          <Grid item xs={2}>
            <ButtonToolbar>
              <Whisper placement="bottom" trigger="click" speaker={speaker}>
                <Button className="mega-menu">
                  All Course
                  <span>
                    <ExpandMoreIcon />
                  </span>
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
            <Button className="maeg" component={Link} to={'/maeg'}>
              MAEG Award
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="outlined" color="secondary" className="join">
              Join Free
            </Button>
            <Button
              className="login"
              variant="outlined"
              size="large"
              color="primary"
            >
              Login
            </Button>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

Header.propTypes = {};

export default memo(Header);
