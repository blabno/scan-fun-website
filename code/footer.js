import React, { Fragment } from 'react';
import {
  COLLECTOR_APP_ANDROID_URL,
  COLLECTOR_APP_IOS_URL,
  DISTRIBUTOR_APP_ANDROID_URL,
  DISTRIBUTOR_APP_IOS_URL,
  MANAGER_APP_ANDROID_URL,
  MANAGER_APP_IOS_URL
} from './config';
import Row from './row';


const Footer = ({ _body, _ID, _relativeURL }) => (
  <Fragment>
    <Row>
      <ul className={'list-unstyled'}>
        <li>
          Aplikacja dla zbierających kupony:
          <ul className={'list-unstyled'}>
            <li><a href={COLLECTOR_APP_ANDROID_URL}>Android</a></li>
            <li><a href={COLLECTOR_APP_IOS_URL}>iOS</a></li>
          </ul>
        </li>
      </ul>
      <ul className={'list-unstyled'}>
        <li>
          Aplikacja dla biznesu:
          <ul className={'list-unstyled'}>
            <li><a href={MANAGER_APP_ANDROID_URL}>Android</a></li>
            <li><a href={MANAGER_APP_IOS_URL}>iOS</a></li>
          </ul>
        </li>
      </ul>
      <ul className={'list-unstyled'}>
        <li>
          Aplikacja Dystrybutor:
          <ul className={'list-unstyled'}>
            <li><a href={DISTRIBUTOR_APP_ANDROID_URL}>Android</a></li>
            <li><a href={DISTRIBUTOR_APP_IOS_URL}>iOS</a></li>
          </ul>
        </li>
      </ul>
    </Row>
    <Row>
      <div className={'copyright'}>
        {_body}
      </div>
    </Row>
  </Fragment>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
