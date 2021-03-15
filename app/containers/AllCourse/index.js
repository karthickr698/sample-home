/**
 *
 * AllCourse
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
import makeSelectAllCourse from './selectors';
import reducer from './reducer';
import saga from './saga';
import Header from '../../components/Header/Loadable';
import Carousel from 'react-material-ui-carousel';
import './allcourse.css';
import CourseCard from '../../components/CourseCard/Loadable';
import Footer from '../../components/Footer/Loadable';

const items = [
  {
    imgLink:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqVXglCrfVQ49UGqSKU9vxn5UXrFJ0YtYajw&usqp=CAU',
  },
  {
    imgLink:
      'https://media.istockphoto.com/photos/green-leaf-with-dew-on-dark-nature-background-picture-id1050634172?k=6&m=1050634172&s=612x612&w=0&h=C6CWho9b4RDhCqvaivYOLV2LK6FzygYpAyLPBlF1i2c=',
  },
  {
    imgLink:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqVXglCrfVQ49UGqSKU9vxn5UXrFJ0YtYajw&usqp=CAU',
  },
  {
    imgLink:
      'https://media.istockphoto.com/photos/green-leaf-with-dew-on-dark-nature-background-picture-id1050634172?k=6&m=1050634172&s=612x612&w=0&h=C6CWho9b4RDhCqvaivYOLV2LK6FzygYpAyLPBlF1i2c=',
  },
];

export function AllCourse() {
  useInjectReducer({ key: 'allCourse', reducer });
  useInjectSaga({ key: 'allCourse', saga });

  return (
    <div>
      <Helmet>
        <title>AllCourse</title>
        <meta name="description" content="Description of AllCourse" />
      </Helmet>
      <div>
        <Header />
        <div className="carousel">
          <Carousel>
            {items.map((item, i) => (
              <img src={item.imgLink} alt="slide" />
            ))}
          </Carousel>
        </div>
        <div className="join-text-all-course">
          Join our specially designed live courses
        </div>
        <CourseCard />
        <Footer />
      </div>
    </div>
  );
}

AllCourse.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  allCourse: makeSelectAllCourse(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(AllCourse);
