/**
 *
 * Footer
 *
 */

import React, { memo } from 'react';

import '../../containers/HomePage/HomePage.css';
import PinDropIcon from '@material-ui/icons/PinDrop';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedCameraRoundedIcon from '@material-ui/icons/LinkedCameraRounded';
import SubscriptionsRoundedIcon from '@material-ui/icons/SubscriptionsRounded';
import EmojiNatureRoundedIcon from '@material-ui/icons/EmojiNatureRounded';

import Grid from '@material-ui/core/Grid';
import 'rsuite/dist/styles/rsuite-default.css';
import Button from '@material-ui/core/Button';

function Footer() {
  return (
    <div>
      <div class="bottomtab">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={3}>
            <div class="gridalign">
              <div class="bottomtabtittles">Have questions?</div>
              <div>
                <PinDropIcon />
                <span style={{ paddingLeft: '10px' }}>Noida 75,UP, india</span>
              </div>
              <div>
                <PhoneIcon />
                <span style={{ paddingLeft: '10px' }}>+91 7317553431</span>
              </div>
              <div>
                <MailOutlineIcon />
                <span style={{ paddingLeft: '10px' }}>
                  info@ReadMycourse.com
                </span>
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
              <div>Home</div>
              <div>ClassRoom</div>
              <div>Courses</div>
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
                  <Button className="subscribe">Subscribe</Button>
                </div>
              </div>
            </div>
            <div class="gridalign">
              <div class="bottomtabtittles">Connect with us!</div>
              <div class="connectlogo">
                <FacebookIcon style={{ marginRight: '0.5rem' }} />
                <LinkedCameraRoundedIcon style={{ marginRight: '0.5rem' }} />
                <SubscriptionsRoundedIcon style={{ marginRight: '0.5rem' }} />
                <EmojiNatureRoundedIcon style={{ marginRight: '0rem' }} />
              </div>
            </div>
          </Grid>
        </Grid>
        <div style={{ textAlign: 'center', paddingBottom: '2rem' }}>
          Copyright @ 2021 All rights reserved ! ReadMyCourse
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = {};

export default memo(Footer);
